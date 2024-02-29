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
      "feature":"简单洗头，柔顺飘柔",
      "price":"10",
      "poster":"/images/li2.png"
    },
    {
      "id":"6",
      "title":"烫发",
      "feature":"烫完发后，卷发后可以使用一些让头发丰盈增加弹性、增加光泽度让头发更闪耀、动人。",
      "price":"300",
      "poster":"/images/ni1.png"
    },
    {
      "id":"7",
      "title":"离子烫",
      "feature":"头发复苏，变得平顺、光滑，这就是离子烫，可以打造出平顺光滑的直发。",
      "price":"400",
      "poster":"/images/ni2.png"
    },
    {
      "id":"8",
      "title":"玉米烫",
      "feature":"玉米烫不仅能给头发提供营养，而且使头发更有可塑性、质感、稳定性。",
      "price":"500",
      "poster":"/images/ni3.png"
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