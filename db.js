const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'database-1.cjy6822cev8a.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Shivam321',
    database: 'tapclass',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

    // # DB_CONNECTION=mysql
// # DB_HOST=database-1.cjy6822cev8a.ap-south-1.rds.amazonaws.com
// # DB_PORT=3306
// # DB_DATABASE=tapclass
// # DB_USERNAME=admin
// # DB_PASSWORD=Shivam321
})

module.exports = pool;