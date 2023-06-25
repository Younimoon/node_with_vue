<script lang="ts" setup>
import {ref,reactive} from 'vue'
import {login} from '../../type/index'
import {log,Loginuser} from '../../utils/api'
import {useInfotStore} from '../../store/index'
import {showerror, showSuccess} from '../../plugins/showToast'
const Info = useInfotStore()
const userinfo = reactive<login>({
	username:"admin",
	password:"000000"
})
async function Login(){
	Loginuser(userinfo).then(res=>{
		if(res.code === 200){
			uni.showToast({
				title:res.message,
				duration:1000
			})
			Info.login(res.token)
			Info.savename(userinfo.username)
			showSuccess({message:res.message})
			uni.switchTab({
				url:'/pages/myself/myself'
			})
			
		}
		else{
			return showerror({message:res})
		}
	}).catch(err=>{
		console.log(err);
	})
	
	return
}
function regester(){
	uni.navigateTo({
		url:'/pages/regester/regester'
	})
}


</script>

<template>
	<view>
		<view class="container">
			<image src="../../static/logo.png" mode=""></image>
			<view class="table">
				<view class="login">
					<h2>账号：</h2><input type="text" v-model="userinfo.username">
				</view>
				<view class="login">
					<h2>密码：</h2><input type="text" v-model="userinfo.password">
				</view>
				<view class="btns">
					<button @click="Login" type="default">登录</button>
					<button @click="regester" type="default">注册</button>
				</view>
				
			</view>
		</view>
		
		
		<image class="image-bg" src="../../static/bgi.png" mode=""></image>
	</view>
</template>



<style scoped lang="less">
.container{
	z-index: 999;
	margin-top: 30%;
	margin-left: 10vw;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	image{
		width: 40vw;
		height: 20vh;
	}
	.table{   
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.login{
		align-items: center;
		display: flex;
		align-items: center;
	}
	input{
		border-bottom: 1px solid black;
		margin-top: 4vh;
		width: 70vw;
	}
	button{
		margin-left: 3vw;
		width: 30vw;
	}
	.btns{
		margin-top: 3vh;
		display: flex;
	}
}
.image-bg {
    position: absolute;
    z-index: -1;
	opacity: 0.6;
    width: 100%;
    height: 100%;
}


</style>
