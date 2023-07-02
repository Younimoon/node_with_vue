<script lang="ts" setup>
	const newslist = [
		{
			
		},
		{
			
		},
		{
			
		},
		{
			
		},
		{
			
		},
		{
			
		},
		{
			
		},
		{
			
		},
		{
			
		}
	]
	function toDetail(index:number){
		console.log(123);
		uni.navigateTo({
			// url:'/pages//newsdetail/newsdetail'
			url:`/pages/newsdetail/newsdetail?id= ${index}`
		})
	}
</script>
<template>
	<view class="container">
		<view class="ranking" v-for="(item,index) in newslist" @click="toDetail(index)">
			<view class="ranking_num" >
				{{index+1}}
			</view>
			<span class ="ranking_news">
				
			</span>		
		</view>
		
	</view>
</template>
<style lang="scss">  
	.container{
		width: 100%;
		height: 99vh;
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		
		.ranking{
			flex: 1;
			width:100%;
			border: 1px solid red;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.ranking_num{
				// width: 30%;
				font-size: 40rpx;
			}
			.ranking_news{
				width: 60%;
				overflow: hidden;
			}
		}
		.ranking:nth-child(1),.ranking:nth-child(2),.ranking:nth-child(3){
			.ranking_num{
				color: red;
				font-size: 50rpx;
				font-style: oblique;
			}
		}
	}
	
</style>