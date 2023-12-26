var express = require('express');
var router = express.Router();
// 通过命令 npm i sha1 安装 sha1
var sha1 = require('sha1');
var sign = require('../utils/sign')

var axios = require('axios')
var {appid, secret} = require('../config')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
router.get('/ticket', async function(req, res){
    let tokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=$${secret}`
    let token_data = await axios.get(tokenUrl);
    console.log('token_data', token_data);

    let access_token = token_data.data.access_token; // 获取access_token
    // 参考官方文档：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62
    let ticketUrl = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`
    let ticket_data = await axios.get(ticketUrl); // 获取jsapi的ticket
    console.log('ticket_data', ticket_data);
})



module.exports = router;
