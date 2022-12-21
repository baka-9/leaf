import { ref } from 'vue';
import { statusCode } from '@leaf/utils';
import { useNotification } from 'naive-ui';
import { deleteReplyAPI, type CommentType } from '@leaf/apis';
import { getCommentListAPI, getReplyListAPI, deleteCommentAPI } from '@leaf/apis';

export default function useComment() {
    const total = ref(0);
    const noMore = ref(false);
    const commentList = ref<Array<CommentType>>([]);
    const notification = useNotification();//通知

    const getCommentList = (vid: number, page: number, pageSize: number) => {
        getCommentListAPI(vid, page, pageSize).then((res) => {
            if (res.data.code === statusCode.OK) {
                const resComment = res.data.data.comments;
                if (resComment) {
                    commentList.value.push(...resComment);
                    if (resComment.length < pageSize) {
                        noMore.value = true;
                    }
                } else {
                    noMore.value = true;
                }
            } else {
                notification.error({
                    title: '获取失败',
                    duration: 5000,
                })
            }
        })
    }

    // const getManageCommentList = (vid: number, page: number, pageSize: number) => {
    //     getManageCommentListAPI(vid, page, pageSize).then((res) => {
    //         if (res.data.code === statusCode.OK) {
    //             total.value = res.data.data.count;
    //             commentList.value = res.data.data.comments;
    //         } else {
    //             notification.error({
    //                 title: '获取失败',
    //                 duration: 5000,
    //             })
    //         }
    //     })
    // }

    const getReplyListSync = async (cid: string, page: number, pageSize: number) => {
        try {
            const res = await getReplyListAPI(cid, page, pageSize);
            if (res.data.code === statusCode.OK) {
                return res.data.data.replies;
            }
            return [];
        } catch (err: any) {
            notification.error({
                title: '获取失败',
                duration: 5000,
            });
            return [];
        }
    }

    const deleteCommentSync = async (id: string, replyId: string | null) => {
        try {
            const res = replyId?await deleteReplyAPI(id, replyId):await deleteCommentAPI(id);
            if (res.data.code === statusCode.OK) {
                return true;
            }

            notification.error({
                title: '删除失败',
                duration: 5000,
            });
            return false;
        } catch {
            notification.error({
                title: '删除失败',
                duration: 5000,
            });
            return false;
        }
    }


    return {
        total,
        noMore,
        commentList,
        getCommentList,
        getReplyListSync,
        deleteCommentSync,
        // getManageCommentList
    }
}
