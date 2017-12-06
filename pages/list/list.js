// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      shopList:[],
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   console.log(options);
    //options是用来获取页面加载过来的参数
      wx.setNavigationBarTitle({
          title:options.name
      });
    wx.request({
        // url: "https://locally.uieee.com/categories/1/shops",
        url: "https://locally.uieee.com/categories/"+options.id+"/shops?_page=this._page&_limit=this._data",
        data:{
            _page:1,
            _limit:10
        },
        success:res=>{
            // console.log(res);
            this.setData({
                shopList:res.data
            });
            // console.log(this.data.shopList);
        }
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
    //   console.log(this.data.shopList);
    //   var newMessage = this.data.shopList.concat();
    //   this.setData({
    //     //   messageList：this.data.shopList;
    //   });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})