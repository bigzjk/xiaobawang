// pages/test/index.js
const types = ['default', 'primary', 'warn']
const pageObject = {
/**
 * 页面的初始数据
 */
    data: {
        active: 0,
        
        isShow: false,
        itemList: [{
            index: 0,
            text: '德玛西亚'
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
        }]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const res = wx.getSystemInfoSync()
        console.log('log', res);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        console.log(919);
    },
    handerClick: (e) => {
        let { item } = e.target.dataset
        console.log(e, item);

    }

}

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  }(types[i]))
}
Page(pageObject)