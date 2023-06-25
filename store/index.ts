import {defineStore} from 'pinia'

export const useInfotStore = defineStore('userinfo', {
    state: () => {
        return {
			//用户信息持久化存储
            token:uni.getStorageSync('token')||"",
			username:uni.getStorageSync("name")||"",
			avatar:uni.getStorageSync('avatar')|| null,
			list:[]||null
        }
    },
    actions: {
        login(data:string) {
			uni.setStorageSync("user",data)
        },
		savename(data:string){
			uni.setStorageSync("name",data)
		},
		saveavatar(data:string){
			uni.setStorageSync('avatar',data)
		},
		touserinfo(){
			console.log(this.userinfo);
			// return this.userinfo
		}
    }
})
