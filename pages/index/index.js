//index.js
var Base64 = require('../../base64.min.js').Base64;
const app = getApp()
Page({
  data: {
    imgUrls:[
      'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
      'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'
    ],
    shoptext: [{
        id:1,
        img:'https://p3.pstatp.com/weili/ms/57438882580530669.jpg',
        item1:'某某牌某某商品,80后流行爆款',
        item2:'52.00'
      },{
        id:2,
        img:'https://p1.pstatp.com/weili/ms/57439037199355674.jpg',
        item1:'某某牌某某商品,90后流行爆款',
        item2:'64.00'
      },{
        id:3,
        img:'https://p3a.pstatp.com/weili/ms/57438788091252090.jpg',
        item1:'某某牌某某商品,00后流行爆款',
        item2:'86.00'
    }],
    money: [{
        id:1,
        name:'30元代金券',
        date:'2018-10-1至2019-10-1',
        num:'100'
      },{
        id:2,
        name:'50元代金券',
        date:'2018-10-1至2019-10-1',
        num:'50'
      },{
        id:3,
        name:'100元代金券',
        date:'2018-10-1至2019-10-1',
        num:'10'
    }]
  },
  onLoad:function (){
    wx.request({
      url: "https://api.yzhub.cn/api/users",
      data: {
        "username":"see",
        "password":"python"
      },
      method: "POST",
      header: {
        //"Authorization": "Basic " + Base64.encode()
      },
      success: function (res) {
        console.log(res)
        //success        
      },
      fail: function () {
        // fail         
      }
    })
  },  
})

wx.login({
  success: function (res) {
    if (res.code) { //发起网络请求 
    wx.request({ 
      url: 'https://icvne7.natappfree.cc', 
      method: 'POST', 
      data: { code: res.code }, 
      success: function(res) { 
        var openid = res.data.openid; 
        }, 
        fail: function(err) { 
          console.log(err) 
        } 
    }) 
    } 
    else { console.log('获取用户登录态失败！' + res.errMsg) } } });
//289deb8901ad965d38ad86c4c04874d5