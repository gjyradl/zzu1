function requestt(params){
  return new Promise((resolve,reject) =>{
    wx.request({
      ...params,
      sussess:(res)=>{
        resolve(res.data)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}
export default requestt
