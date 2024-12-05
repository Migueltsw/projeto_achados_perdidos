const mysql = require('mysql2/promise');

async function execute(sql){
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_projeto',
    port: 3306
  });

  const [ result ] = await conn.query(sql);
  return result;
}

module.exports = {
  execute
}