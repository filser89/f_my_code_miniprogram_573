// pages/landing/landing.js
Page({

  /**
   * Page initial data
   */
  data: {
    name: "Desmond",
    age: 10
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // calling an API...
    const tomorrowsBitcoinPrice = 10
    this.setData({ tomorrowsBitcoinPrice })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  goToStories: function() {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        getApp().globalData.userInfo = res.userInfo
      }
    })
    wx.switchTab({
      url: '/pages/stories/stories',
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log('page is hiding')
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})