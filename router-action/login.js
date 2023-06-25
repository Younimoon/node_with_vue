const db =  require('../db/index')
const bcrypt = require('bcryptjs')
const crypto = require("crypto")
const jwt = require('jsonwebtoken')
const config = require('../config')
//注册列表
exports.regester = (req,res)=>{

    const userinfo = req.body
    //定义sql语句，查询用户名是否被占用
    const sqlstr  = 'select * from  user where username=?'
    //定义sql语句,插入新用户
    const sql = 'insert into user set ?'
    db.query(sqlstr,userinfo.username,function(err,results){
        //查询失败
        if(err){
            return  res.send(err)
        }
        // //判断用户名是否被占用,length>0就代表被占用
        if(results.length>0){
            return res.send({message:'用户名被占用，请重新写用户名'})
        }
        // // 用户名可以使用,对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password,10)
        //添加用户信息
        db.query(sql,{...userinfo},function(err,result){
            if(err) res.send ({
                code:201,
                message:"出现未知错误，请重新的登录"
            })
            if(result.affectedRows!==1) return res.send({message:'注册用户失败，请稍后再试'})
            res.send({
                code:200,
                message:"注册成功，请重新登录"
            })
            })
        })
    }


    //用户登录
exports.login = (req,res)=>{
    const userinfo = req.body
    const sql = 'select * from user where username = ?'
    db.query(sql,userinfo.username,function(err,result){
        
        //存在该用户
        if(result.length>0){
        //     //校验密码
            const compareResult = bcrypt.compareSync(userinfo.password,result[0].password)
            if(!compareResult){
                return res.send('密码错误，请重新登录')
            }
            //登陆成功后设置token
            const user = {...result[0], password: ''}
            const tokenStr = jwt.sign(user, config.jwtSecretKey, {
                expiresIn: '10h', // token 有效期为 10 个小时
            })
            res.send({
                code:200,
                token:'Bearer ' + tokenStr,
                message:"登陆成功"
            })

        }
        else{
            return   res.send('该用户名未注册，请重新输入用户名')
        }
        
    })
}
