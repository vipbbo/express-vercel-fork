const pool = require('./mysql-database-pool');

// 查询数据
async function queryData(sql, values) {
  const [rows, fields] = await pool.execute(sql, values);
  return rows;
}

// 插入数据
async function insertData(sql, values) {
  const [result] = await pool.execute(sql, values);
  return result.insertId;
}

// 更新数据
async function updateData(sql, values) {
  const [result] = await pool.execute(sql, values);
  return result.affectedRows;
}

module.exports = {
  queryData,
  insertData,
  updateData
};
