import axios from 'axios'
const instance = axios.create({
    timeout:3000
})
// 请求拦截器

// 响应拦截器
instance.interceptors.response.use(result => {
    console.log(result.data);
    
    return result.data
},err=>{
    return Promise.reject(err)
})

export default instance