const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()
const routeractions = require('../router-action/userinfo')
//获取信息
router.get('/getInfo',jsonparser,routeractions.getUserinfo)
//修改信息
router.post('/updateInfo',jsonparser,routeractions.updateInfo)
//更新头像
router.post('/updateAvatar',jsonparser,routeractions.updateAvatar)
module.exports = router