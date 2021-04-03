// pages/create/create.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit: function(event) {
    const story = event.detail.value
    let base = app.globalData.baseUrl
    console.log("EVENT",event)
    let data = event.detail.value
    // getApp().globalData.stories.push(story)
    // console.log(getApp().globalData)

    // wx.reLaunch({
    //   url: '/pages/stories/stories',
    // })
    wx.request({
      url: `${base}/stories`,
      method: 'POST',
      data,
      success(res){
        console.log("RESPONSE FROM SERVER",res)
        let response = res.data
        if (response.errors){
          wx.showToast({
            title: `${response.errors[0]}`,
            icon: 'none'
          })
        } else {
          
          wx.redirectTo({
            url: `/pages/show/show?id=${response.id}`,
          })
        }
      }

    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

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