import Request, {HttpResponse, HttpRequestConfig, HttpError} from 'luch-request'
const http = new Request({
    //超时时长5分钟
    timeout: 300000,
	baseURL:"http://127.0.0.1:3007",
    header: {
        // 'Content-Type': 'application/json',
		"Content-Type": "application/json;charset=UTF-8",
		// "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":uni.getStorageSync("user") 
    }
})

export {http}
