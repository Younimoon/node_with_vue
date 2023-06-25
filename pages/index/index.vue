<script lang="ts" setup>
	
import {reactive, ref} from 'vue'
// import {student,name} from '../../type/index'
// import {loginuser} from  '../../request/api'
import {Login,Loginuser} from '../../utils/api'
const num = ref<number>(111)
const user = reactive({
	username:'',
	password:''
	
})

interface num{
	token:String,
	tokenHead:String
}

interface data<T>{
	code:Number,
	data:T,
	message:String
}
async function login(){
	console.log(1);
	const {data:res} = await Login(user)
	console.log(res);
}

function loginuse() {
	console.log(123);
	Loginuser().then(()=>{
		console.log(1);
		// console.log(res);
	})
}

</script>



<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{num}}</text>
		</view>
		<input type="text" v-model="user.username">
		<input type="text" v-model="user.password">
		<button @click="login">登录</button>
		<button @click="loginuse">user</button>
	</view>
</template>


<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	input{
		border: 1px solid red;
	}
</style>
