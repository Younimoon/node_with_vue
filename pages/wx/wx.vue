
<template>
     <view>
         <!-- <view class="input-wrap">金额：<input type="text" placeholder="请输入金额" v-model="price"></view> -->
         <view><button @click="gopay">支付</button></view>
		 <button @click="getuserinfo">获取用户信息</button>
     </view>
 </template>
 
 <script>
     export default {
         name: "payment",
         data(){
             return {
                 price:0.01
             }
         },
         methods:{
			 getuserinfo(){
						   uni.login({
						       provider: 'weixin',
						       success: (loginRes)=> {
								   console.log(loginRes.code);
								   uni.request({
								   	url:"http://127.0.0.1:3000/login",
									data:{
										code:loginRes.code
		
									}
								   }).then(res=>{
									   console.log(res.data);
									   uni.setStorageSync("openid",res.data)
								   })
						   		}
						   	})

			 },
			//提交支付
			gopay(){
				let openid = uni.getStorageSync('openid')
				console.log(openid);
				uni.request({
		
					url:"http://127.0.0.1:3000/pay",
					data:{
						money:1,
						openid:openid
					}
					// success:res=>{
					// 	//里面传的参数后端传入
					// 	//pakege就是后端传入prepayid  
					// 	uni.requestPayment({
					// 		  timeStamp: '',
					// 		  nonceStr: '',
					// 		  package: '',
					// 		  paySign: ''
					// 	}).then(res=>{
					// 		console.log(res);
					// 	})
					// }
				})

			},
     
             getOrdernum(){
                 return new Date().getTime();
             }
         }
     }
 </script>
 
 <style scoped>
     .input-wrap{display:flex;}
 </style>

