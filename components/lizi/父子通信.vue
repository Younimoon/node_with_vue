<script lang="ts" setup>
	import {defineProps,defineEmits, toRefs} from 'vue'
	//父传子
	const props = defineProps({
		money:Number
	})
  const data = toRefs(props) 
  console.log(data.money.value);
  
  //子传父
  const emit = defineEmits(['clickchild'])
  const submit = ()=>{
	  let obj = {
		  name:'我是子组件'
	  }
	   emit('clickchild',obj)
  }

</script>
<template>
	<view>
		子组件
		<button @click="submit">传输数据</button>
	</view>
</template>
<style lang="scss">
	
</style>

//父组件
<list @clickchild="fun" :money = a></list>
function fun(data){
	console.log(data);
}




	<view class="list">
			<view class="avatar">
				<image src="https://cdn.uviewui.com/uview/album/1.jpg"></image>
			</view>
			
			<view class="content">
				<!-- 名字点赞 -->
				<view class="header">
					<text class="name">admin</text>
					<view class="good">
						<text>22</text>
						<!-- <image src="../../static/good-noactive.png" mode=""></image> -->
					</view>
					<!-- 正文局部评论 -->
				</view>
			
			</view>
		</view>