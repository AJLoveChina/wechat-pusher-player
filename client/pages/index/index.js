//index.js
//获取应用实例
const app = getApp()
import wechatMediaStatusCode from '../common/wechatMediaStatusCode'


Page({
  data: {
    pushUrl: "",
    pullUrl: "",
    ip: ""
  },
  onIpInput(e){
    this.setData({
      ip: e.detail.value
    });
  },
  start: function() {
    this.setData({
      pushUrl: `rtmp://${this.data.ip}:1935/live/stream1`,
      pullUrl: `rtmp://${this.data.ip}:1935/live/stream1`
    })
  },
  statechange(e) {
    console.log('live-pusher code:', wechatMediaStatusCode[`${e.detail.code}`], e.detail.code)
  },
  onLoad: function () {
  
  }
})
