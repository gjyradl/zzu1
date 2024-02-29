// pages/cart/cart.js
import CheckAuth from "../../utils/auth"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideButtons:[{
      type:'warn',
      text:'删除'
    }],
    cartList:[]

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
    CheckAuth(()=>{
      let {nickName} = wx.getStorageSync('token')
      let tel = wx.getStorageSync('tel')
      var goodId=this.data.id



      wx.request({
        url:"http://localhost:3000/carts?_expand=good&username="+nickName+"&gtel="+tel,
        success:(res)=> {
          console.log(res)
          this.setData({
            cartList:res.data
          })
        }
      })
      
    }
    )

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
  slideButtonTap(evt){
    var id = evt.currentTarget.dataset.id
    this.setData({
      cartList:this.data.cartList.filter(item=>item.id!==evt.currentTarget.dataset.id)
    })
    wx.request({
      url:"http://localhost:3000/carts/"+id,
      method:"DELETE"
    })
  },
  handleTap(evt){
    var item = evt.currentTarget.dataset.item
    item.checked = !item.checked
    this.handleUpdate(item)

  },
  handleUpdate(item){
    this.setData({
      cartList:this.data.cartList.map(data=>{
        if(data.id==item.id){
          return item

        }
        return data
      })
    })

    wx.request({
      url:"http://localhost:3000/carts/"+item.id,
      method:"PUT",
      data:{
        "username": item.username,
        "tel":item.tel,
        "goodId": item.goodId,
        "checked":item.checked,
        "id":item.id

      }
    })
  },
  handleAllChecked(evt){
    if(evt.detail.value.length===0){
      this.setData({
        cartList:this.data.cartList.map(item=>({
          ...item,
          checked:false
        }))
      })

      
    }else{
      this.setData({
        cartList:this.data.cartList.map(item=>({
          ...item,
          checked:true
        }))
      })

    }



  },
  handlePay(){
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  }
})