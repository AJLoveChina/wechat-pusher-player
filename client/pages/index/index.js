//index.js
//获取应用实例
const app = getApp()
import wechatMediaStatusCode from '../common/wechatMediaStatusCode'


Page({
  data: {
    pushUrl: "",
    pullUrl: "",
    ip: "",
    pullStreamName: "stream1",
    pushStreamName: "stream1",
  },
  onIpInput(e){
    this.setData({
      ip: e.detail.value
    });
  },
  start: function() {
    this.setData({
      pushUrl: `rtmp://${this.data.ip}:1935/live/${this.data.pushStreamName}`,
      pullUrl: `rtmp://${this.data.ip}:1935/live/${this.data.pullStreamName}`
    })
  },
  updatePushStreamName(e) {
    this.setData({
      pushStreamName: e.detail.value
    });
  },
  updatePullStreamName(e) {
    this.setData({
      pullStreamName: e.detail.value
    });
  },
  statechange(e) {
    console.log('live-pusher code:', wechatMediaStatusCode[`${e.detail.code}`], e.detail.code)
  },
  onLoad: function () {
  
  }
})
