// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems:['服饰','电子','食品'],
    cateList:[
      '服饰相关数据...',
      '电子相关数据...',
      '食品相关数据...'],
    current: 0
  },

  handleChange(e){
    this.setData({
      current:e.detail.current
    })
  },

  handleEvent(e){
    this.setData({
      current:e.detail
    })
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})