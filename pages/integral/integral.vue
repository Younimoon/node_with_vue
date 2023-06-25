<template>
	<view>
		123
		<view class="target">
			
		</view>
		<div id="box"></div>
	</view>
</template>
<script lang="ts" setup>
	import {onMounted} from 'vue'
	import { onLoad,onShow ,onReady} from "@dcloudio/uni-app"
	onReady(()=>{
		// getInfo()
	})
	onMounted(()=>{
		getInfo()
	})
	function	getInfo() {

		// 注意：想要拿到元素实例，需要在实例已经挂载到页面上才可以
		console.log(12312321);
		const query = uni.createSelectorQuery().in(this).select(".box");
		console.log(1231231);
		console.log(query);
		// query.select('#target').boundingClientRect(data => {
		//   console.log("得到布局位置信息" + JSON.stringify(data));
		//   // console.log("节点离页面顶部的距离为" + data.top);
		// }).exec();
		

	}

	
</script>