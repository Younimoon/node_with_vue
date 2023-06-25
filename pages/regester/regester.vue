<script lang="ts" setup>
	import {Regesteruser}  from '../../utils/api'
	import {uuid} from '../../plugins/uuid'
	import {showerror,showSuccess} from '../../plugins/showToast'
	import {reactive} from'vue'
	import {regester} from '../../type/index'
	let Id = ""
	Id = uuid()
	const userinfo = reactive<regester>({
		username:"",
		password:"",
		phonenumber:null,
		userid:Id
	})
	function Regester(){
		if(!userinfo.username || !userinfo.password || !userinfo.phonenumber){
			showerror({
				message:'请输入所有信息',
				}		
			)
		}
		else{
			Regesteruser(userinfo).then(res=>{
				if(res.code !== 200){
				 return	showerror(res)
				}
				const data = {
					...res,
					image:""
				}
				return showSuccess(data)
			}).catch(err=>{
				uni.showToast({
					title:err
				})
			})
			
		}
	}
	function goback(){
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}
	
</script>
<template>
	<view>
		<image src="../../static/regester-bgm.jpg" mode=""></image>
		<div class="container">
			<h1 style="font-size: x-large;font-weight: bold;text-align: center;">注册页面</h1>
			<view class="regester">
				<h2>用户名：</h2><input type="text" v-model="userinfo.username" >
			</view>
			<view class="regester">
				<h2>密码：</h2><input type="password" v-model="userinfo.password">
			</view>
			<view class="regester">
				<h2>电话：</h2><input type="text" v-model="userinfo.phonenumber">
			</view>
			<view class="btns">
				<button @click="Regester" type="default">点击注册</button>
				<button @click="goback" type="default">返回登录</button>
			</view>
			
		</div>
	</view>
</template>
<style scoped lang="less">
.container{
		position: absolute;
		z-index: 999;
		top: 20vh;
		left: 10vw;
		input{
			border-bottom: 1px solid black;
			margin-top: 4vh;
			width: 70vw;
		}
		.regester{
			align-items: center;
			margin-top: 3vh;
			display: flex;
		}
	}
image{
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
}
	.btns{
		display: flex;
		margin-top: 3vh;
	}
	button{
		margin-left: 3vw;
		width: 30vw;
	}
	
</style>
