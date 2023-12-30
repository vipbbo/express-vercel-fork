var express = require('express');
var router = express.Router();

const db = require('../db/mysql-util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/nickname', async (req, res) => {
  let nickname = req.query.nickname;
  try {
    const data = await db.queryData(`SELECT * FROM chat_user WHERE nick_name = '${nickname}'`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
