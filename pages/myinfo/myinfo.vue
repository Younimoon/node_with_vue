<script lang="ts" setup>
import {userInfo,updateUser} from '../../utils/api'
import {ref,reactive,onMounted,onBeforeMount,nextTick,getCurrentInstance} from 'vue'
import {showSuccess,showerror} from '../../plugins/showToast'
import {usermsg} from '../../type/index'
const instance = getCurrentInstance()
const username = ref<string>("") 
username.value= uni.getStorageSync('name')
let User = reactive({
	username:username.value 
})
let a = ""
//启动禁用input
const changeInput = ref<string>("disabled")
let  userinfo = reactive<usermsg>({
	username:username.value ? username.value :null,
	phonenumber:"不存在请登录",
	userid:"不存在请登录"
})
fun()
async function fun(){
	 userInfo(User).then(res=>{
		 Object.keys(res[0]).forEach(item=>{
			 if(userinfo[item]){
				userinfo[item] = res[0][item] 
			 }
		 })
		 // console.log(userinfo);
		 instance.proxy.$forceUpdate()
	 })
}
//修改信息
function changeinfo(){
	changeInput.value =  ""
}
//确定修改
async function confirminfo(){
	const res =  await updateUser(userinfo)
	// console.log(res.code);
	if(res.code === 200){
		changeInput.value = 'disabled'
		return	showSuccess({message:res.message})
	}
	return showerror({message:res.message})
}

//修改用户名
function changename(e:any){
	userinfo.username = e.detail.value
}
//修改电话
function changenumber(e:any){
	userinfo.phonenumber = e.detail.value
}
</script>
<template>
	<view>
		<view class="container">
			<text>
				信息列表
			</text>
			<view class="info">
				<view class="">
					姓名:
				</view> 
				<view >
					<input type="text"  :value="userinfo.username" :disabled="changeInput" @input="changename">
				</view>
			</view>
			<view class="info">
				<view>
					电话:
				</view> 
				<view >
					<input type="text" :value="userinfo.phonenumber" :disabled="changeInput" @input="changenumber">
				</view>
			</view>
			<view class="info">
				<view>
					用户ID:
				</view> 
				<view >
					<input type="text" :value="userinfo.userid" disabled="changeInput">
				</view>
			</view>
		</view>
		<view class="action">
			<button type="default" @click="changeinfo">修改信息</button>
			<button type="default" @click="confirminfo">确定修改</button>
		</view>
	</view>
</template>

<style lang="less">
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		width: 100vw;
		height: 50vh;
		text{
			font-size: larger;
		}
		.info{
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 90vw;
			height: 5vh;
			background-color: white;
			border-radius: 12px;
			view{
				font-size: larger;
				width: 50%;
				text-align: center;
				input{
					text-align: center;
				}
			}
		}
		
		
	}
	.action{
		display: flex;
	}
	button{
		width: 30vw;
	}
</style>
