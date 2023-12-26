var express = require('express');
var router = express.Router();
// 通过命令 npm i sha1 安装 sha1
var sha1 = require('sha1');

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

module.exports = router;
