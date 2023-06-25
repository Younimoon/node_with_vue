<script setup lang="ts">
import lists from '../../components/list/list.vue'


//添加帮助列表
function addlist(){
	uni.navigateTo({
		url:'/pages/createlist/createlist'
	})
}
//跳转用户喜欢列表
function myfavorite(){
	// console.log(123);
	
	uni.navigateTo({
			url:'/pages/myfavorite/myfavorite'
		})
}
</script>

<template>
	<view>
		
		<view class="container">
			
			<view class="box">
				<view class="Box">
					<view class="head">
						<image @click="addlist" src="../../static/addlist.png" mode=""></image>
						<image @click="myfavorite" src="/static/like.png" mode=""></image>
					</view>
				</view>
				
			</view>
			<view class="content">
				<lists class=".lists"></lists>
			</view>

				
		
		</view>
		
	</view>
</template>
<style lang="less">
	.container{
		width: 100%;
		height: 100vh;
		.box{
			display: block;

			border-bottom: 1px solid #f2f2f2;
			height: 6vh;
			.Box{
				width: 100%;
				margin-top: 1vh;
				position: fixed;
				.head{
					display: flex;
					justify-content: space-between;
				}
				image{
					width: 8vw;
					height: 4vh;
					background-color: aliceblue;
					border-radius: 50%;
					text-align: center;
				}
			}
		
		}
		.content{
			width: 100vw; 
			height: 92vh;
			overflow-y:auto;
		}
		

	}

	
</style>