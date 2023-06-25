const express = require('express')

const router = express.Router()
const routeractions  = require('../router-action/helplist')
const bodyparser = require("body-parser")
const jsonparser = bodyparser.json()
//发布信息
router.post('/addlist',jsonparser,routeractions.help)
///获取信息
router.get('/getlist',routeractions.getlists)
//获取所有评价
router.get('/getallappraise',routeractions.getallappraise)
//获取某个帮助的评价
router.get('/getappraise',routeractions.getappraise)
//发布评论
router.post('/addappraise',jsonparser,routeractions.addappraise)
//更新某个评论的喜欢
router.post("/updatesblike",jsonparser,routeractions.updatesblike)
//插入喜欢某个帮助的列表
router.post('/insertfavorite',jsonparser,routeractions.insertsbFavorite)
//获取本地用户的喜欢列表
router.get('/getmyfavorite',routeractions.getmyfavorite)

module.exports = router