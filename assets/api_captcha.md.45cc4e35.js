import{_ as a,c as s,o as t,a as n}from"./app.6fababfc.js";const F=JSON.parse('{"title":"人机验证相关接口","description":"","frontmatter":{},"headers":[{"level":2,"title":"获取滑块验证","slug":"获取滑块验证","link":"#获取滑块验证","children":[]},{"level":2,"title":"验证滑块","slug":"验证滑块","link":"#验证滑块","children":[]}],"relativePath":"api/captcha.md"}'),l={name:"api/captcha.md"},e=n(`<h1 id="人机验证相关接口" tabindex="-1">人机验证相关接口 <a class="header-anchor" href="#人机验证相关接口" aria-hidden="true">#</a></h1><h2 id="获取滑块验证" tabindex="-1">获取滑块验证 <a class="header-anchor" href="#获取滑块验证" aria-hidden="true">#</a></h2><h4 id="请求url" tabindex="-1">请求URL <a class="header-anchor" href="#请求url" aria-hidden="true">#</a></h4><ul><li><code>http://域名/api/v1/captcha/get?email=用户邮箱</code></li></ul><h4 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-hidden="true">#</a></h4><ul><li>GET</li></ul><h4 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">slider_captcha</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">slider_img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">bg_img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">y</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="返回参数说明" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">slider_img</td><td style="text-align:left;">string</td><td>base64滑块图</td></tr><tr><td style="text-align:left;">bg_img</td><td style="text-align:left;">string</td><td>base64背景图</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">int</td><td>滑块左上角y坐标</td></tr></tbody></table><h4 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-hidden="true">#</a></h4><p>无</p><h2 id="验证滑块" tabindex="-1">验证滑块 <a class="header-anchor" href="#验证滑块" aria-hidden="true">#</a></h2><h4 id="请求url-1" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-1" aria-hidden="true">#</a></h4><ul><li><code>http://域名/api/v1/captcha/validate</code></li></ul><h4 id="请求方式-1" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-1" aria-hidden="true">#</a></h4><ul><li>POST</li></ul><h4 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-hidden="true">#</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">email</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>邮箱</td></tr><tr><td style="text-align:left;">x</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>滑块左上角x坐标</td></tr></tbody></table><h4 id="返回示例-1" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-1" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="备注-1" tabindex="-1">备注 <a class="header-anchor" href="#备注-1" aria-hidden="true">#</a></h4><p>无</p>`,25),o=[e];function p(r,c,i,d,D,h){return t(),s("div",null,o)}const u=a(l,[["render",p]]);export{F as __pageData,u as default};
