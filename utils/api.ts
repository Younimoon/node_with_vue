import { login,addappraise } from '../type';
import {http} from './index'

 //请求拦截器
 http.interceptors.request.use((config)=>{
	 if(config.method === 'POST'&& config.data ){
		 
	 }
	 console.log(config);
	 return config
 })
 
 //响应拦截器
 http.interceptors.response.use((result=>{
	 return result.data
 }))
// GET
interface login{
	username:string,
	password:string|number
}
interface token{
	token:string,
	tokenHead:string
}
interface data<T>{
	code:number,
	data:T,
	message:string
}


export function getInformation(data) {
    return http.request({
        url: '/api/common/config',
        method: 'GET'
    })
}
 

// export function login(msg:login){
// 	return http.request({
// 		url:'http://localhost:3000/login',
// 		params:{
// 			name:'huang'
// 		},
// 		method:'POST',
// 		data:{
// 			...msg
// 		},
// 	})
// }

export const Loginuser = (data:any) => {
  return http.post('/user/login',{
	 ... data
	})
}

export const Regesteruser = (data:any):Promise<any>=>{
	return http.post('/user/regester',{
		...data
	})
}

//获取用户信息
export const userInfo = (data:any)=>{
	return http.get(`info/getInfo?username=${data.username}`)
}
//更新头像
export const updateInfo = (data:object)=>{
	return http.post("info/updateAvatar",{
		...data
	})
}
//更新信息
export const updateUser = (data:any)=>{
	return http.post("info/updateInfo",{
		...data
	})
}
//添加帮助请求
export const addHelp = (data:any)=>{
	return http.post("/help/addlist",{
		...data
	})
}

//获取帮助列表
export const getHelp = (data?:any)=>{
	return http.get(`/help/getlist`)
}

//添加评论
export const addAppraise =(data:addappraise)=>{
	return http.post('/help/addappraise',{
		...data
	})
}


//获取所有评论
export const getallappraise =()=>{
	return http.get('/help/getallappraise')
}

//获取某个帮助的评论
export const getSbappraise = (data:string)=>{
	return http.get(`/help/getappraise`,{
		params:{
			helpid:data
		}
	})
}

// //更新某个帮助的点赞
interface sblike{
	favorite:string|number,
	helpid:string
}
export const updateSblike = (data:sblike)=>{
	console.log(data);
	
	return http.post('/help/updatesblike',{
		...data
	})
}
//插入喜欢的help和username 
interface  insertsbFavorite{
	helpid:string,
	username:string
}
export const insertFavorite = (data:insertsbFavorite)=>{
	return http.post('/help/insertfavorite',{
		...data
	})
}
//获取该用户的喜欢列表
export const getMyfavorite = (username:string)=>{
	return http.get('/help/getmyfavorite',{
		params:{
			username
		}
	})
}