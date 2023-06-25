<script setup lang="ts">
	import {ref,reactive} from 'vue'
	let arr = reactive<Array<string>>([])
	let cont = ref<string>("")
	function send(){
		console.log(cont.value);
		uni.navigateTo({
			url: '/pages/wx/wx',
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
</script>
<template>
	<view class="content">
		<view class="show"></view>
		<view class="main">
			<input type="text" v-model="cont">
			<button @click="send" type="primary">提交</button>
		</view>
	</view>
</template>
<style>
	.content{
		height: 100vh;
	}	
	.show{
		margin-left: 2.5vw;c
		border-radius: 5px;
		height: 85vh;
		width: 95vw; 
		border:  1px solid red;
	}
	input{
		border: 1px solid red;
		border-radius: 5px;
		width: 90vw;
		height: 5vh;
		margin-left: 5vw;
		margin-bottom: 2vh;
	}
	button{
		margin-left: 25vw;
		width: 50vw; 
	}
	.main{
		position: fixed;
		bottom: 0;
	}

</style>