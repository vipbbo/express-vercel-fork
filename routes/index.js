var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* weixin-鉴权接口 */
router.get('/wx-auth', function(req, res, next) {
  res.send('Welcome to wx-auth!!!!');
});

module.exports = router;
