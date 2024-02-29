// pages/orderlistW/orderlistW.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodlist:[{
      "id": "1",
      "title": "精剪发型",
      "feature": "精致剪发，满足所有要求",
      "price": 50,
      "poster": "/images/li1.png"
    },
    {
      "id":"2",
      "title":"洗头服务",
      "feature":"简单洗头，柔顺飘柔。",
      "price":"10",
      "poster":"/images/li2.png"
    },
    {
      "id":"3",
      "title":"纹理烫",
      "feature":"纹理烫是一种动感蓬松飘逸活泼的发型形象，这种烫发以卷的弧度使头发蓬松区于直和卷之间。",
      "price":"300",
      "poster":"/images/li3.png"
    },
    {
      "id":"4",
      "title":"锡纸烫",
      "feature":"锡纸烫是用手工加锡纸卷烫的方法，使发丝呈一缕一缕状，发丝卷曲随意，自由而又不显凌乱。",
      "price":"400",
      "poster":"/images/li4.png"
    },
    {
      "id":"5",
      "title":"摩根烫",
      "feature":"摩根烫是专门用来烫发根的，只是在发根烫一下弧度，只是微微弯曲，不会太突兀。",
      "price":"500",
      "poster":"/images/li5.png"
    }
      
    ]

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
    // wx.request({
    //   url: 'http://localhost:3000/goods',
    //   method:'GET',
    //   success:(res)=>{
    //     console.log(res)
    //     this.setData({
    //       goodlist:res.data
    //     })
    //   }
    // })

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

  renderGoods(){
    

  },



  handleGet(){
    wx.request({
      url:'http://localhost:3000/users'
    })
    },
  handlePost(){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://localhost:3000/users',
      method:"post",
      data:{
        username:"2222",
        password:"sssss"
      }
    })
    wx.hideLoading({
      success: (res) => {},
    })

  },
  handlePut(){
    wx.request({
      url: 'http://localhost:3000/users/1',
      method:"put",
      data:{
        username:"2222",
        password:"33"
      }
    })
  },
  handleDelete(){
    wx.request({
      url: 'http://localhost:3000/users/10',
      method:"delete",
    })

  },
  handleChangePage(evt){
    var id = evt.currentTarget.dataset.id
    var title = evt.currentTarget.dataset.title
    var poster = evt.currentTarget.dataset.poster
    var price = evt.currentTarget.dataset.price
    var feature = evt.currentTarget.dataset.feature


    wx.navigateTo({
      url: "/pages/detail/detail?id="+ id+"&title="+title+"&poster="+poster+"&price="+price+"&feature="+feature,
    })
  }
})