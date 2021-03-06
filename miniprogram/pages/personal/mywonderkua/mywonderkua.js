//var wonderkuaData = require('../../../data/data1.js')
// pages/homepage/kuakuaList/kuakuaList.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userid = options.id;
    this.data.openid = userid;
    this.getQiuKuaData();
  },

  //从云数据库kuaTopic获取数据
  getQiuKuaData:function(event){
    var that = this;
    const db = wx.cloud.database();
    db.collection('kuaTopic')
      .where({
        _openid: that.data.openid
      })
      .get({
        success: function (res) {
          that.setData({
            detailData: res.data,
          })
        }
      })
  },

  //跳转至求夸详情页面 
  tomywonderkuaDetail: function (event) {
    var kuakuaId = event.currentTarget.dataset.id;
    console.log('kuakuaId-->' + kuakuaId);
    wx.navigateTo({
      url: 'mywonderkuaDetail/mywonderkuaDetail?id=' + kuakuaId
    })
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