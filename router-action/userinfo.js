const db = require('../db/index')

const bcrypt = require('bcryptjs')
const circularjson = require('circular-json')

exports.getUserinfo = function(req,res){
    const userinfo = req.query
    const sql = 'select * from user where username= ?'
    db.query(sql,userinfo.username,(err,result)=>{
        if(err) return res.send('未知错误，请重新登录')
        res.send(result)
    })
}

//修改用户头像
exports.updateAvatar = function(req,res){
    const info = req.body
    console.log(info.userpic);
    const sql = 'update user set userpic = ? where username = ?'
    db.query(sql,[info.userpic,info.username],(err,result)=>{
        if(err) return res.send({
            message:'未知错误，请重新修改',
            code:201
        })
        if (result.affectedRows === 1) {
             return   res.send({message:'修改成功',code:200})
        }
        return res.send({message:"修改失败，请重新修改",code:200})
    })
}

//修改用户信息
exports.updateInfo = function(req,res){
    const sql = `update user set username=?,phonenumber=? where id=?`
    db.query(sql,[req.body.username,req.body.phonenumber,req.body.id],(err,result)=>{
        console.log(result);
        if(err) return res.send({message:'未知错误，请重新修改',code:201})
        if(result.affectedRows !== 1 ){
            return   res.send({message:"修改失败，请重新修改",code:201})
        }
        return res.send({
            code:200,
            message:"修改成功"
        })
        // console.log(result);
        // return res.cc('修改成功')
    })
}