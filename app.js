// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    stories: [
    { title: "DB", description: "How to get MUSICIANS BY TRACK LIST????" },
    { title: "HTML/CSS", description: "Landing Page" },
    { title: "JS", description: "StimulusJS... wooops :(" }
   ]
  }
})
