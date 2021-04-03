// pages/stories/stories.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  // local data
  data: {
    // key: value
    batch_number: 573,
    likes: 0,
    students: ['Kevin', 'Nico', 'Xiway'],
    stories: []
  },

  goToShow: function(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`, // everything after ? are query params. They go to options object in show.js

    })
  },

  upvote: function() {
    // // take the current like data
    // let likes = this.data.likes
    // // add 1
    // likes += 1
    // // update local likes data
    // this.setData({ likes })

    // same as above:
    this.setData({ likes: this.data.likes + 1 })

    // add another student
    let students = this.data.students
    students.push("Alex")
    this.setData({ students })
  },

  showToast: function() {
    wx.showToast({
      title: 'Clicked!',
      icon: 'none'
    })
    this.upvote()
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // API requests
    // logging in the user
    console.log('page is loading', new Date().getTime())

    // fetching some data...
    const todays_date = new Date();
    this.setData({todays_date: todays_date.toDateString()})

  
  },

  onReady: function () {
    // display some popups/adds
    // increment batch number by one in local data
    let batch_number = this.data.batch_number
    batch_number += 1
    // object shorthand
    this.setData({ batch_number })
    
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // render some components
    console.log('page is showing', new Date().getTime())

    // set stories from global to local data
    // const stories = getApp().globalData.stories
    // this.setData({ stories })
    let page = this
    let base = app.globalData.baseUrl
    wx.request({
      url: `${base}/stories`,
      success(response){
        console.log("RESPONSE FROM SERVER",response)
        let stories = response.data.stories
        page.setData({stories})
      }
    })


  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  

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
    console.log('page is unloading')
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