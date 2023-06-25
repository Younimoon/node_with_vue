
import axios from './index'
export interface user{
    username:string,
    password:string
}

interface Login<T>{
    code:number,
    data:T
    message:string
}

interface Loginapi{
    token:string,
    tokenHead:string
}
interface LoginInfo{
    data:{
        menu:Array<Object>
    }
}

//登录返回token
 export function loginuser(){
    return axios.get('http://127.0.0.1:3000/login')
}

//泛型中嵌套泛型
export function Logininfo():Promise<Login<LoginInfo>>{
    return axios.post("http://toutiao.itheima.net/v1_0/authorizations")
}

export function getUserinfo():Promise<any>{
	return axios.get("htt")
}