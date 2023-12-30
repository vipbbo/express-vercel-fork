const mysql = require('mysql2/promise');
const { database } = require('../config')
// 创建连接池
const pool = mysql.createPool({
  host: database.host,
  port: database.port,
  user: database.user,
  password: database.password,
  database: database.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 30000
});

// 导出连接池
module.exports = pool;
