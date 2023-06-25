//发布求助信息
const db = require('../db/index')
const uuid = require('node-uuid')

exports.help = (req,res)=>{
    const id = uuid.v1()
    //将图片数组改编成一个字符串，需要的返回时在弄成数组
    const imgs = req.body.fileList1.join(",")
    const helpinfo = {
        helpid:id,
        title:req.body.type,
        content:req.body.content,
        username:req.body.username,
        favorite:0,
        imgs,
        date:new Date()
    }
    const sql = "insert into helplist set ?"
    db.query(sql,helpinfo,(err,result)=>{
        if(err) return res.send({
            code:201,
            message:'未知错误请重新发起请求'}
            )
        else if(result.affectedRows !== 1) return res.send({
            code:201,
            message:"发布失败，请重新发布"
        })
        return res.send({
            code:200,
            message:"恭喜您，发布成功"
        })
        
    })
}

//获取所有帮助信息
exports.getlists = (req,res)=>{
    const sql =  `SELECT * FROM helplist join user on user.username = helplist.username  order by date desc `
    db.query(sql,(err,result)=>{
        if(err) return res.send(err)
        res.send(result)
    })
}
// 获取指定帮助信息的评论
exports.getappraise=(req,res)=>{
    const sql =  `select * from helplist join appraise on helplist.helpid = appraise.helpid where helplist.helpid=？ order by appraise.date desc
    `
    db.query(sql,req.query.helpid,(err,result)=>{
        if(err) return res.send(err)
        res.send(result)
    })
}
//获取所有评论
exports.getallappraise=(req,res)=>{
    const sql = 'select * from appraise order by date desc'
    db.query(sql,(err,result)=>{
        if(err){
            return res.send('未知错误')
        }
        res.send(result)
    })
}

//发布评论
exports.addappraise=(req,res)=>{
    const info ={
        helpid:req.body.helpid,
        content:req.body.content,
        appraise_username:req.body.username,
        date:new Date()

    }
    const sql = 'insert into appraise set ?'
    db.query(sql,info,function(err,result){
    if(err)return res.send({
        code:201,
        message:"未知错误，请重新评论"
    })
    if(result.affectedRows !== 1)res.send({
        code:201,
        message:"评论失败，请重新评论"
    })
    return res.send({
        code:200,
        message:"评论成功"})
  })
}

//添加点赞
    exports.updatesblike=(req,res)=>{
        const sql = 'update helplist set favorite=?  where helpid =?'
        db.query(sql,[req.body.favorite,req.body.helpid],(err,result)=>{
            if(err)return res.send({
                code:201,
                message:"点赞失败"
            })
            if(result.affectedRows !== 1)res.send({
                code:201,
                message:"点赞失败"
            })
        })
    }
//更新被用户喜欢的list
exports.insertsbFavorite = (req,res)=>{
    // res.send(req.body)
    const sql = 'insert into favorite_list set ?'
    db.query(sql,req.body,(err,result)=>{
        if(err)return res.send({
            code:201,
            message:"点赞失败"
        })
        if(result.affectedRows !== 1)
        return res.send({
            code:201,
            message:"点赞失败"
        })
    })
}
//获取登录用户喜欢list
// exports.getmyfavorite = (req,res)=>{
//     const sql = 'select * from favorite_list where username = ?'
//     db.query(sql,req.query.username,(err,result)=>{
//         if(err)return res.send({
//             code:201,
//             message:"喜欢我的获取失败"
//         })
//         return res.send(result)
        
//     })
// }
// //展示登录用户的喜欢
exports.getmyfavorite = (req,res)=>{
    console.log(req.query);
    const sql =  "SELECT * FROM helplist join user on user.username = helplist.username join favorite_list on helplist.helpid = favorite_list.helpid where favorite_list.username = ? order by date desc  "

    db.query(sql,req.query.username,(err,result)=>{
        console.log(result);
        if(err)return res.send({
            code:201,
            message:"喜欢我的获取失败"
        })
        return res.send(result)
        
    })
}