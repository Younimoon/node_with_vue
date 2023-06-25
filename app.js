const express = require('express')
const cors = require('cors')
const config = require('./config')//导入token的密钥对象
const expressJWT = require('express-jwt')

const user = require('./router/login.js')
const userInfo = require('./router/userinfo.js')
const helpList = require('./router/list')
// const artcate = require('./router/artcate.js')
// const article = require('./router/article')
const app = express()
const joi = require('joi')
app.use(cors())
const fs = require('fs')

// app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))//使用解析token的全局中间件


//注册登录接口
app.use('/user',user)
//用户信息接口
app.use('/info',userInfo)
//发布求助接口
app.use('/help',helpList)

// app.get('/image',(req,res)=>{
//   const qrcodeName = Date.now() + '-' + Math.random().toString(36).slice(-6);
//     const filePath = path.resolve(__dirname, `router-action/${req.query.a}/${req.query.b}`);
//     console.log(filePath);
//     // 给客户端返回一个文件流

//     //格式必须为 binary，否则会出错
//     // 创建文件可读流
//     const cs = fs.createReadStream(filePath);
//     console.log(cs);
//     cs.on("data", chunk => {
//         res.write(chunk);
//     })
//     cs.on("end", () => {
//         res.status(200);
//         res.end();
//     })
// })


//封装一个返回信息的对象
//全局应用中间件,发生了请求就会执行
app.use(function(req,res,next){
  //封装的方法
  res.cc = function(msg,code=200){
    res.send({
      // body:req.body,
      // mes:"意料之外的错误",
      // 状态
      code,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: msg,
    })
  }
  next()
})

// //图书列表
// app.get('/booklist',function(req,res){
//   const sql = 'select * from booklist  '
//   db.query(sql,function(err,result){
//     if(err) return res.send(err)
//     return res.send(result)
//   })
// })
// //订单列表
// app.get('/orderlist',function(req,res){
//   const sql = 'select * from  orderlist  '
//   db.query(sql,function(err,result){
//     if(err) return res.send(err)
//     return res.send(result)
//   })
// })
// //提交订单列表
// app.post('/booklist',function(req,res){
//   const info = req.body
//   const sql = 'inser into booklist set ?  '
//   db.query(sql,info,function(err,result){
//     if(err) return res.send(err)
//     return res.send(result)
//   })
// })
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
// app.use(expressJWT({secret:config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

// 全局错误中间件
// app.use(function (err, req, res, next) {//全局的错误中间件，很特殊，多了一个err参数且必须放置在路由之后
//   // 数据验证失败
//   if (err instanceof joi.ValidationError) return res.send(err)
//   if (err.name === 'UnauthorizedError') return res.send('身份认证失败！')
//   // 未知错误
//   res.send(err)
// })
const swiperlist = [
  "https://i.postimg.cc/g03T8Hzk/Snipaste-2023-06-13-18-04-38.png",
  "https://i.postimg.cc/90s03hvp/Snipaste-2023-06-13-18-04-29.png",
  "https://i.postimg.cc/HxQB8YtJ/Snipaste-2023-06-13-18-04-25.png",
  "https://i.postimg.cc/YCrKpVMf/Snipaste-2023-06-13-18-04-13.png"
]
app.get('/swiper',(req,res)=>{
  res.send(swiperlist)
})
app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
  })