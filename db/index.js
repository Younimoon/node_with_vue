const mysql = require('mysql')

// 创建数据库连接对象

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    port:3305,
    password:'huang1008',
    database:"nodeserver"
})



module.exports = db

// const mysql=require('mysql')
// const db=mysql.createPool({
//     host:"127.0.0.1",
//     user:"root",
//     port:3305,
//     password:'huang1008',
//     database:"demo"
// })
// module.exports=db
