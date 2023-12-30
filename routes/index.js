var express = require('express');
var router = express.Router();
// 通过命令 npm i sha1 安装 sha1
var sha1 = require('sha1');
var sign = require('../utils/sign')
var redirect = require('../utils/redirect')
const { userAccessToken, userInfo } = require('../utils/userinfo')
var test = require('../utils/test')

var axios = require('axios')
var {appid, secret} = require('../config')
/* GET home page. */
router.get('/', function(req, res, next) {
  const code = req.query.code;
  console.log(code);
  // 通过code换取网页授权access_token
  // const userData = userAccessToken(code);
  res.render('index', { title: code });
});


/* weixin-鉴权接口 参考文档：https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html*/
router.get('/wx-auth', function(req, res, next) {
  let {signature, timestamp, nonce, echostr} = req.query;
  let token = 'paidaxing';
  let array = [timestamp, nonce, token];
  array.sort(); // 字典排序
  let str = array.join('');
  let resultStr = sha1(str) // 对字符串str进行sha1进行加密
  if(resultStr === signature) {
    res.set('Content-Type', 'text/plain')
    res.send(echostr);
  }else {
    res.send('Error!!!!!!')
  }
});

// 生成签名
router.get('/jsapi', async function(req, res){
  let url = decodeURIComponent(req.query.url);
  let conf = await sign(url);
  console.log('conf', conf);
  res.send(conf);
})

// 生成签名
router.get('/test', async function(req, res){
  let r = await test();
  console.log('r', r);
  res.send(r);
})

// 调用函数进行重定向
router.get('/redirect', async function(req, res){
  let r = await redirect();
  console.log('r', r);
  res.redirect(r);
})

/* 获取 access_token 和 openid */
router.get('/user', async function(req, res, next) {
  try {
    const code = req.query.code;
    console.log(code);
    // 通过code换取网页授权access_token
    const userData = await userAccessToken(code);
    res.set('Content-Type', 'text/plain')
    res.send(userData);
  } catch (error) {
    console.error('Error in /user route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/user-info', async function(req, res, next) {
  let access_token = req.query.access_token;
  let openid = req.query.openid;
  let result = await userInfo(access_token, openid);
  console.log('result',result);
  res.send(result);
})


module.exports = router;
