// pages/show/show.js
let app = getApp()
Page({
  data: {
    options: {}
  },

  goToUpdate(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/update/update?id=${id}`,
    })
  },

  deleteStory(e){
    console.log('DELETE', e)
    let id = e.currentTarget.dataset.id
    wx.request({
      url: `${app.globalData.baseUrl}/stories/${id}`,
      method: 'DELETE',
      success(res){
        console.log(res)
        wx.showToast({
          title: `${res.data.msg}`,
          duration: 2000,
          success(){
            setTimeout(()=>{
              wx.reLaunch({
                url: '/pages/stories/stories',
              }) 
            }, 2000
            )
          }
        })   
      }
    })
  },

  onLoad: function (options) {
    // const index = options.index
    // const story = getApp().globalData.stories[parseInt(index)]
    // this.setData({ story })

    this.setData({options})

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    let page = this
    let id = page.data.options.id
    let base = app.globalData.baseUrl
    wx.request({
      url: `${base}/stories/${id}`,
      success: (res) => {
        console.log("response from server", res)
        let story = res.data
        this.setData({story})
      }
    })
  }
})


