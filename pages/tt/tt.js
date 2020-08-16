// pages/tt/tt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'ss',
    age:18,
    students:[

  {id:110,name:'yya',age:30},
  {id:160,name:'yua',age:45},
  {id:190,name:'iia',age:20},
    ],
    counter:0
  },
  handleBtnClick(){
    console.log('按钮发生了点击')
   this.setData({
     counter:this.data.counter+1
   })
  },
  
  handleSubtraction(){
    console.log('点击-')
   this.setData({
     counter:this.data.counter-1
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