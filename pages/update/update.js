// pages/update/update.js

let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    options: {},
    story: {}
  },


  formSubmit(e){
    console.log(e)
    let id = this.data.options.id
    let data = e.detail.value
    let base = app.globalData.baseUrl
    wx.request({
      url: `${base}/stories/${id}`,
      method: 'PUT',
      data,
      success(res){
        wx.redirectTo({
          url: `/pages/show/show?id=${id}`,
        })
      }

    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("OPTIONS", options)
    this.setData({options})
    let page = this
    let id = page.data.options.id
    console.log('ID', page.data)
    let base = app.globalData.baseUrl
    wx.request({
      url: `${base}/stories/${id}`,
      success(res){
        console.log("response from server", res)
        let story = res.data
        page.setData({story})
      }
    })
  },


  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  }


})