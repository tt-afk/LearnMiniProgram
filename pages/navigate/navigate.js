var app = getApp()
Page({

  data: {  
  },
   
 
 xuanzeweizhi:function(){
  var that=this
  wx.chooseLocation({
    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    success (res) {
      const latitude = res.latitude
      const longitude = res.longitude
      wx.openLocation({
        latitude,
        longitude,
        scale: 18
      })
    }
   })
},
 xuanchewei: function(){
wx.navigateTo({
  url: '/pages/parking spot/parking spot',
})
  },

   
  onLoad: function (options) {
  },
 
})
