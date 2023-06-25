
const express = require("express")

const router = express.Router()
const routeractions = require('../router-action/login')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()
//注册接口
router.post('/regester',jsonparser,routeractions.regester)
//登录接口
router.post('/login',jsonparser,routeractions.login)


module.exports = router  