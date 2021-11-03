// pages/8-checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  goodsList:[
    {name:'AAA',
    price:100,
    number:3,
    isChecked:false
    },
    {name:'BBB',
    price:300,
    number:2,
    isChecked:false
    },
    {name:'CCC',
    price:500,
    number:1,
  isChecked:false}
  ],
  sum:0
  },

  handleChange(e){
    let total = 0
    for(let i=0; i < e.detail.value.length ; i++){
      total += e.detail.value[i]*1
    }
    this.setData({
      sum: total
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