// pages/5-request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  handleTap(){
    // 1-没有跨域限制
    // 2-安全域名添加（小程序后台）
    wx.request({
      url: 'https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=60E92E003A2811EC8E55AB06C82116737A29B111A184433CB394FAAACCA1B838&optimus_risk_level=71&optimus_code=10',
      mothod:'get',
      data:{

      },
      success:(res)=>{
        this.setData({
          dataList: res.data.movieList
        })
      },
      fail:()=>{

      }

    })
  },

  onLoad: function (options) { // 生命周期函数--监听页面加载
    console.log('----onLoad');
    this.handleTap()
  },
  onReady: function () {       // 生命周期函数--监听页面初次渲染完成
    console.log('----onReady');
  },
  onShow: function () {        // 生命周期函数--监听页面显示
    console.log('----onShow');
  },
  onHide: function () {        // 生命周期函数--监听页面隐藏
    console.log('----onHide');
  },
  onUnload: function () {      // 生命周期函数--监听页面卸载
    console.log('----onUnload');
  },
  onPullDownRefresh: function () {    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function () {        // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function () {    // 用户点击右上角分享

  }
})