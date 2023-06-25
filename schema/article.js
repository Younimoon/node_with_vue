const joi = require('joi')
//定义参数
const title = joi.string().required()
const cate_id = joi.number().required().min(1).integer()
const content = joi.string().required().allow("")
const state = joi.string().valid("已发布","草稿").required()


//校验规则对象，发布文章，返回的body值
exports.add_article = {
    body:{
        title,
        cate_id,
        content,
        state,
    }
}