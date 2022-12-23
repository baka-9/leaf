package api

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"kuukaa.fun/leaf/cache"
	"kuukaa.fun/leaf/domain/dto"
	"kuukaa.fun/leaf/domain/resp"
	"kuukaa.fun/leaf/domain/valid"
	"kuukaa.fun/leaf/domain/vo"
	"kuukaa.fun/leaf/service"
	"kuukaa.fun/leaf/util/convert"
)

func GetUserInfo(ctx *gin.Context) {
	userId := ctx.GetUint("userId")
	userInfo := service.GetUserInfo(userId)

	resp.OK(ctx, "", gin.H{"user_info": vo.ToUserVO(userInfo)})
}

func ModifyUserInfo(ctx *gin.Context) {
	var modifyDTO dto.ModifyUserInfoDTO
	if err := ctx.Bind(&modifyDTO); err != nil {
		resp.Response(ctx, resp.RequestParamError, "", nil)
		zap.L().Error("请求参数有误")
		return
	}

	// 参数校验
	if !valid.Name(modifyDTO.Name) {
		resp.Response(ctx, resp.RequestParamError, valid.NAME_ERROR, nil)
		zap.L().Error(valid.NAME_ERROR)
		return
	}

	userId := ctx.GetUint("userId")
	if exist, uid := service.IsNameExist(modifyDTO.Name); exist && uid != userId {
		resp.Response(ctx, resp.NameExistError, "", nil)
		zap.L().Error("用户名已存在")
		return
	}

	// 检测文件是否有效
	oldUserInfo := service.SelectUserByID(userId)
	if modifyDTO.Avatar != oldUserInfo.Avatar && cache.GetUploadImage(modifyDTO.Avatar) != userId {
		resp.Response(ctx, resp.InvalidLinkError, "", nil)
		zap.L().Error("文件链接无效")
		return
	}

	// 保存到数据库
	service.UpdateUserInfo(userId, modifyDTO)
	// 返回
	resp.OK(ctx, "ok", nil)
}

func ModifySpaceCover(ctx *gin.Context) {
	var modifyDTO dto.ModifySpaceCoverDTO
	if err := ctx.Bind(&modifyDTO); err != nil {
		resp.Response(ctx, resp.RequestParamError, "", nil)
		zap.L().Error("请求参数有误")
		return
	}

	// 参数校验
	userId := ctx.GetUint("userId")
	if cache.GetUploadImage(modifyDTO.SpaceCover) != userId {
		resp.Response(ctx, resp.InvalidLinkError, "", nil)
		zap.L().Error("文件链接无效")
		return
	}

	// 保存到数据库
	service.UpdateUserSpaceCover(userId, modifyDTO.SpaceCover)
	// 返回
	resp.OK(ctx, "ok", nil)
}

// 通过用户ID获取用户信息
func GetUserInfoByID(ctx *gin.Context) {
	uid := convert.StringToUint(ctx.DefaultQuery("uid", "0"))

	user := service.GetUserInfo(uid)
	fmt.Println(user)

	// 返回给前端
	resp.OK(ctx, "ok", gin.H{"user": vo.ToBaseUserVO(user)})
}