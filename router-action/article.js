//发布添加文章
const db = require('../db/index')
const path = require('path')

exports.addArticle = function(req,res){
    // console.log(req.file.fieldname);
    
    // res.send(req.file)
    // const msg =JSON.stringify(req.file) 
    // res.send(msg)
    // console.log(req.file);
    // res.send('heh')
    if(!req.file || req.file.fieldname !== 'cover_img'){
        res.send('文章封面未填')
    }
    // const id =parseInt(Math.random()) 
    const articleinfo ={
        ...req.body,
        cover_img:path.join('/uploads'+req.file.filename),
        pub_date:new Date(),
        author_id:req.user.id,
        id:1
    }
    // res.send(articleinfo)
    const sql = `insert into ev_articles set ?`
    db.query(sql,articleinfo,(err,result)=>{
        if(err){
            return res.send('请正确填写发布信息')
        }
        // res.send(result)
        if(result.affectedRows === 1){
            return res.send('恭喜你，文章发布成功了')
        }
        return res.send('文章发布失败,请重新发布')
    })
}
