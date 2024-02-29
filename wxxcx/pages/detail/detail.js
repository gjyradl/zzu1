import CheckAuth from "../../utils/auth"
import requestt from "../../utils/requestt"

// pages/detail/detail.js
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
  
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({
      id:options.id,
      poster:options.poster,
      title:options.title,
      feature:options.feature,
      price:options.price

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

  },

  handleAdd(){
    CheckAuth(()=>{
      console.log("准备预约")
      let {nickName} = wx.getStorageSync('token')
      let tel = wx.getStorageSync('tel')
      var goodId=this.data.id

      wx.request({
        url:'http://localhost:3000/carts',
        method:"post",
        data:{
          username:nickName,
          tel:tel,
          goodId:goodId,
          checked:false
      },
        success:function(res) {
          wx.showToast({
            title: '预约成功',
          })
        }
      }
        
  )
    })},
    handleChange(){
      wx.switchTab({
        url: '/pages/cart/cart',
      })
    }

      

    
    
  
    
   

  })
 