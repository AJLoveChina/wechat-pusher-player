## 微信小程序live-pusher/live-player使用示例

本仓库包括的内容
* 使用开源组件搭建本地的RTMP服务给小程序使用
* 小程序live-pusher/live-player如何使用
* 使用网页播放小程序推的视频流


### 开源组件搭建本地的RTMP服务
命令行进入文件夹 Node-Media-Server, 执行
```text
node index.js
```

程序默认将在1935端口提供RTMP服务, 8000端口提供HTTP流服务

程序使用第三方开源MIT协议组件 Node-Media-Server 


### 小程序live-pusher/live-player如何使用
<b>开始之前你需要在微信开放平台注册小程序开发账号, 并申请小程序接口实时音视频流权限</b>
这一步很重要, 不完成这一步无法进行后面的开发. 

个人账号截止2019年3月5日, 是可以申请此类接口权限的.

当小程序账号注册完成以及申请实时音视频流权限之后.使用微信开发者工具打开 client 文件夹.
然后点击 `真机调试`, 使用手机微信调试RTMP视频流.
<b>记住要先开启本地的RTMP服务哦</b>, 至于IP地址配置会在小程序页面有提示的.

## 使用网页播放小程序推的视频流
前面两步都完成的情况下, 可以在网页上测试一下小程序推的视频流.
命令行进入 `web-client` 文件夹, 然后命令行执行如下命令 :
```text
// 如果你的npm已经全局安装了http-server
http-server -p 8080

// 否则
npm install
npx http-server -p 8080
```
然后浏览器打开 [http://localhost:8080](http://localhost:8080),
根据网页的提示填写拉取流的名称, 然后点击`开始`按钮, 如果不出意外你可以看到小程序推上来的视频流.


#### 链接
* [Node-Media-Server](https://github.com/illuspas/Node-Media-Server)


#### 一些配置截图
<image src="assets/小程序接口设置.jpg" />
<image src="assets/wifi-ip地址.jpg" />
