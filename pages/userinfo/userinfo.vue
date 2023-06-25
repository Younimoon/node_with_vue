<script lang="ts" setup>
import {onShow,onLoad } from "@dcloudio/uni-app"
import {userInfo} from '../../utils/api'
onLoad((options)=>{
	console.log(options.username);
	userInfo({username:options.username}).then(res=>{
		console.log(res);
		
	})
})

</script>
<template>
	<view>
		userinfo
	</view>
</template>
<style lang="scss">

</style>
