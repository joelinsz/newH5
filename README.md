# 高级婚礼 H5｜完整部署项目

## 1. 项目特点

- 纯 HTML + CSS + JavaScript
- 无 Node.js、无构建步骤
- 手机竖屏优先
- 兼容微信内置浏览器的常见使用方式
- HTTPS 部署后即可通过微信分享链接打开
- 全屏首屏、照片画廊、时间轴、倒计时、音乐、地图、电话 RSVP
- 图片全部放在 assets/images，可直接替换
- 音乐放在 assets/music/wedding.mp3，可直接替换

## 2. 本地预览

直接双击 index.html 一般即可预览。

如果浏览器限制本地音频，可使用任意静态 HTTP 服务，例如：

python -m http.server 8080

然后打开：
http://127.0.0.1:8080/

## 3. 修改新人信息

打开 index.html，搜索并替换：

林先生
陈小姐
2026.10.18
2026年10月18日 · 星期日
18:00
XX国际酒店 · 宴会厅
请在这里填写婚礼地址
13800000000

倒计时日期在 script.js：

const target=new Date("2026-10-18T18:00:00+08:00").getTime();

## 4. 替换照片

把自己的照片放入：

assets/images/

并保持以下文件名：

hero.jpg
photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg
photo6.jpg

推荐：
- hero.jpg：首屏竖图，建议 1440×2400 左右
- photo1~6：婚纱照/生活照
- JPG/WebP 均可；如果要保持现有代码，请使用 JPG 文件名。

## 5. 替换音乐

将 MP3 文件命名为：

assets/music/wedding.mp3

微信对自动播放有限制，所以页面采用“首次触摸后尝试播放 + 右上角音乐按钮”的方案。
不同微信版本/手机系统仍可能要求用户主动点击。

## 6. 修改地图

index.html 中找到：

https://maps.google.com/

替换成你的地图导航地址。

如果主要给中国大陆用户使用，可以换成高德/百度地图的实际导航链接。

## 7. 微信部署

最简单方式：

1. 准备一个支持 HTTPS 的静态网站空间。
2. 上传 wedding-h5 文件夹中的全部文件。
3. 确保 index.html 可以通过 HTTPS 打开。
4. 用手机微信打开该 HTTPS 地址。
5. 将链接发送给宾客即可。

不要只提供 file:// 本地文件给微信；微信分享应使用 HTTPS 网页地址。

## 8. 建议

正式发布前：
- 手机微信实际测试 iPhone / Android
- 测试音乐按钮
- 测试地图链接
- 测试电话按钮
- 检查所有照片尺寸和加载速度
- 图片尽量压缩到每张 300KB～1MB
- 正式域名使用 HTTPS
