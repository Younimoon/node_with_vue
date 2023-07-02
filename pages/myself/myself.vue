<script setup lang="ts">
import {reactive,ref,onMounted,getCurrentInstance} from 'vue'
import {useInfotStore} from '../../store/index'
import {updateInfo,userInfo} from '../../utils/api'
import { onLoad,onShow } from "@dcloudio/uni-app"
import {showSuccess,showerror} from '../../plugins/showToast'


const instance =getCurrentInstance()
const store = useInfotStore()
const Istoken= ref<boolean>(false) 
const userpic = ref('')
let userinfo = reactive({
	username:'',
	userpic:"",
	id:""
})
const info = reactive<Array<object>>([
	{
		name:"订单详情",
		img:"../../static/order.png"
	},
	{
		name:"用户积分",
		img:"../../static/integration.png"
	},
	{
		name:"个人中心",
		img:"../../static/myinfo.png"
	},
	{
		name:"反馈中心",
		img:"../../static/callback_center.png"
	}
])

onShow(()=>{
	showinfo()
	getinfo()
})

function showinfo(){
	if(uni.getStorageSync('user') !== ""){
	userinfo.username = uni.getStorageSync('name')
	getinfo()
	Istoken.value = true
	}
	else{
		Istoken.value = false
	}
}

function Tologin(){
	uni.navigateTo({
		url:'/pages/login/login'
	})
}


//用户信息获取
function getinfo(){
	userInfo({username:userinfo.username}).then(res=>{
			userinfo.userpic = res[0].userpic
			instance.proxy.$forceUpdate()
			Object.keys(res[0]).forEach(item=>{
				userinfo[item ] =res[0][item]
			})
	})
}


//跳转到功能详情
function Toinfo(index:number){
	if(index === 0){
		uni.navigateTo({
			url:'/pages/orders/orders'
		})
	}
	if(index ===1){
		uni.navigateTo({
			url:'/pages/integral/integral'
		})
	}
	if(index ===2){
		uni.navigateTo({
			url:'/pages/myinfo/myinfo'
		})
	}
	if(index ===3){
		uni.navigateTo({
			url:'/pages/feedback/feedback'
		})
	}
}

let avatar =ref("") 
const infoimg = ref("")
//修改头像
function changeavatar(){
	    uni.chooseImage({// 选择图片
	        count: 1,
	        success: (res) => {// 图片选择成功的回调（必传），会返回一个对象
	            avatar.value= res.tempFilePaths[0] // 用于更新视图
				infoimg.value = avatar.value
				console.log(infoimg);
				//修改用户头像，发送请求
				updateInfo({
					userpic:avatar.value,
					username:userinfo.username
				}).then(res=>{
					getinfo()
					if(res.code === 200){
						// store.saveavatar(avatar.value)
						return showSuccess({message:res.message})
					}
					return showerror({message:res.message})
					
				})
	        }
	    })
}
//退出登录
function gooutinfo(){
	uni.showModal({
		title:'提示',
		content:"您确定要退出吗",
		confirmColor:"red",
		//点击确定成功回调
		success(res) {
			if(res.confirm){
				uni.removeStorageSync("user")
				uni.removeStorageSync("name")	
				showinfo()
			}
			else{
				return
			}
		}
	})
}
</script>
<template>
	<view>
		<view class="container">
			<view class="userinfo" v-if="Istoken">
				<image src="../../static/flower.jpg" mode="" class="bgm"></image>
				<view class="userimg" @click="changeavatar">
					<image :src="userinfo.userpic" mode=""></image>
				</view>
				<view class="login" style="display: flex;align-items: center;">
					昵称：<h1 style="font-size: larger;margin-bottom: 1vh;">{{userinfo.username}}</h1>
					<!-- <span>用户ID:{{userinfo.userid}}</span> -->
				</view>
			</view>
			<view class="userinfo" v-if="!Istoken">
				<view class="userimg">
					<image src="/static/myself-noactive.png" mode="">
						
					</image>
				</view>
				<view class="login">
					<h1 style="font-size: larger;margin-bottom: 1vh;" @click="Tologin">立即登录</h1>
					<span style="color: burlywood;">登录后享用所有功能</span>
				</view>
			</view>
			
			<h1 style="font-size: large;">我的功能</h1>
			<view class="user">
				<view @click="Toinfo(index)" class="box_one" v-for="(item,index) in info" :key="index" >
					<image :src="item.img" mode=""></image>
					<h1 class="dingdan">{{item.name}}</h1>
				</view>
			</view>
			<button v-if="Istoken" @click="gooutinfo ">退出登录</button>
		</view>
		
	</view>
</template>
<style lang="less">
.container{
	width: 100%;
	height:100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	.userinfo{
		width: 90%;
		height: 25%;
		margin: 3vh ;
		border-radius: 5%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		.bgm{
			width: 90%;
			height: 25%;
			opacity: 0.7;
			position: absolute;
			z-index: -1;
		}
	}
	.userimg{
		image{
			width: 22vw;
			height: 13vh;
			border-radius: 50%;
		}
	}
	.user{
			width: 95%;
			height: 70%;
			margin: 5%;
			display: flex;
			flex-wrap: wrap;
			align-content: flex-start;
			.box_one{
				width: 30%;
				height: 20%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin:2vh 1.5vw;
				border-radius: 5%;
				background-color: whitesmoke;
				image{
					width: 60%;
					height: 70%;
				}
				.dingdan{
					color: red;
					display: flex;
					justify-content: space-around;
				}
			}
		}
		button{
			width: 80%;
			height: 8%;
			margin-bottom: 2vh;
		}
}		

</style>