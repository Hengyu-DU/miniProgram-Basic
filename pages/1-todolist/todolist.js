// pages/1-todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytext:'',
    list:['学习','上课','玩游戏']
  },

  handleInput(evt){
    // console.log(evt);
    this.setData({
      mytext:evt.detail.value
    })
  },
  
  handleTap(){
    if(this.data.mytext.trim() !== ''){
      this.setData({
      list:[this.data.mytext.trim(),...this.data.list],
      mytext:''
      })
    } 
  },

  delete(e){
    this.data.list.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      list:this.data.list
    })
  },

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