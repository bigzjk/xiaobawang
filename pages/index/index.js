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
    tabbarList: [
      {
        tabIndex: 0,
        name: '首页',
        url: '../index/index',
        icon: 'home-o'
      },
      {
        tabIndex: 1,
        name: '搜索',
        url: '../search/index',
        icon: 'search'
      },
      {
        tabIndex: 2,
        name: '我的',
        url: '../center/index',
        icon: 'manager-o'
      },
    ]
  },
  onChange: function(e){
    console.log(e);
    const { tabbarList } = this.data
    wx.navigateTo({
      url: tabbarList[e.detail].url,
      success: ()=>{
        // console.log('跳转成功');
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
