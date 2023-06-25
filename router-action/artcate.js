 const db = require('../db/index')
 
 //获取文章分类
exports.getArticleCates=function(err,res){
    res.send('hello')
}

 //新增文章分类
 exports.addArticleCates=(err,res)=>{
    res.send('hbc')
 }

 //删除文章分类
 exports.deleteAriticleCates=(err,res)=>{
    res.send('hehe')
 }

 //通过id获取文章分类
 exports.getCatesbyid = (err,res)=>{
     res.send('hahh ')
 }
