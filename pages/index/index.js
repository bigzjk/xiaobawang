//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    itemList: [{
        index: 0,
        text: '德玛西亚pppp'
    }, {
        index: 1,
        text: '诺克萨斯'
    }, {
        index: 2,
        text: '黑色玫瑰'
    }, {
        index: 3,
        text: '艾欧尼亚'
    }, {
        index: 4,
        text: '守望之海'
    }, {
        index: 5,
        text: '均衡教派'
    }],
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
  },
  onChange: function(e){
    const { tabbarList } = this.data
    console.log('e.detail', e.detail, tabbarList[e.detail].url);
    this.setData({
      active: e.detail
    })
    wx.reLaunch({
      url: tabbarList[e.detail].url,
      success: ()=>{
        console.log('跳转成功');
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求,可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onPullDownRefresh: function(){
    console.log(123);
    this.setData({
      motto: '拉了'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
