<script lang="ts" setup>
import {onShow } from "@dcloudio/uni-app"
import {getHelp,addAppraise,getallappraise,updateSblike,insertFavorite,getMyfavorite, userInfo} from '../../utils/api'
import {ref,reactive} from "vue"
import {showmsg} from '../../plugins/showToast'

let lists = ref([])
let image = ref("../../static/good-noactive.png")
const myfavoritelist = ref([])
const show = ref(false)
const msginfo = reactive({
	title:"恭喜",
	dec:"评论成功",
	type:"success"
})
const isshow = ref(false)
let appraiseindex= ref(null)
let  allappraise = ref({})

let appraise = reactive({
	helpid:null,
	username:uni.getStorageSync('name')||null,
	content:""
})

const 	popupData =  reactive({
	overlay: true,
	mode: 'bottom',
	borderRadius: '',
	closeable: true,
	closeOnClickOverlay: true,
	round:10
})
onShow(()=>{
	appraise.username = uni.getStorageSync('name')
	getlists()
	getAllappraise()
})


function getlists(){
	getHelp().then(res =>{
		res.forEach(item=>{
			if(item.imgs){
				const image = item.imgs.split(',');
				item.imgs = image
			}
		}) 
		lists.value = res	
		//代码不需要因为每次获取评论的时候都会先对有所有的list的评论进行赋空
		// lists.value.forEach(item=>{
		// 	item.Appraise = []
		// })		
	})
	
}

//获取评论和点赞情况
async function getAllappraise(){
	const res = await getallappraise()
	const data = await getMyfavorite(uni.getStorageSync('name'))
	
	myfavoritelist.value = data
	allappraise.value = res
	
	// 添加评论
	lists.value.forEach(item=>{
		item.src = '../../static/good-noactive.png'
		item.Appraise = []
		allappraise.value.forEach((i)=>{
			if(i.helpid === item.helpid && item.Appraise.length !== 2){
				item.Appraise.push(i)
			}
		})	

		//点赞修改图片
		myfavoritelist.value.forEach((i)=>{
			if(i.helpid === item.helpid){
				item.src = '../../static/good-active.png'
			}
		})
	})	
	
	
}
//跳转评论页面
function toappraise(i){
	uni.reLaunch({
		url:`/pages/appraise/appraise?helpid=${lists.value[i].helpid}`,
	})
}

//发表评论
function creAppraise(index){
	appraiseindex.value = index
	show.value = true
}
function close(){
	show.value = false
	appraiseindex.value = null
}
//确定评论
function confirmappraise(){
	appraise.helpid = lists.value[appraiseindex.value].helpid
	if(appraise.content.trim() === "")return
	addAppraise(appraise).then(res=>{
		if(res.code !== 200){
			return console.log(1)                                               
		}
		//这里赋值空数组会闪屏
		// lists.value.forEach(item=>{
		// 	item.Appraise = []	
		// })
	})
	getAllappraise()
	showmsg(msginfo,isshow)
		appraise.helpid = null
		appraise.content = ""
		appraiseindex.value = null
		show.value = false
		return
}
// 点赞评论
//两个请求1：更新helplist.like的数据
//2.更新favorite_list数据
function like(index:any){
	if(lists.value[index].src === '../../static/good-active.png') return
	lists.value[index].favorite = Number(lists.value[index].favorite) +1
	updateSblike({favorite:lists.value[index].favorite,helpid:lists.value[index].helpid}).then(res=>{	
	})
	insertFavorite({
		helpid:lists.value[index].helpid,
		username:uni.getStorageSync('name')
	}).then(res=>{
		console.log(res)
	})
	
	lists.value[index].src = '../../static/good-active.png'
}

function myinfo(name){
	uni.navigateTo({
			url:`/pages/userinfo/userinfo?username=${name}`
		})
	
}
</script>
<template>
	<view>
		
		<view class="list" v-for="(item,index) in lists " :key="item.helpid">
			<view class="avatar" @click="myinfo(item.username)" >
				<image :src="item.userpic"></image>
			</view>
			
			<view class="center">
		
				<!-- 名字点赞 -->
				<view class="header">
					<text class="name" style="color: aqua;font-size: large;">{{item.username}}</text>
					<view class="good">
						<h1 class="type">{{item.title}}</h1>
						<text >{{item.favorite}}</text>
						<image  @click="like(index)" :src="item.src" mode=""></image>
					</view>
				</view>
				
				<!-- 正文局部评论 -->
				<view class="helpcontent">
					<view class="help">
						{{item.content}}
						<view class="helpimg" v-if="item.imgs">
							   <u-album :urls="item.imgs" keyName="src2"></u-album>
						</view>
					</view>

					<view class="allappraise" v-show="item.Appraise">
						<view class="appraise" v-for="(i,index) in item.Appraise" :key="index">
							<text>
								{{i.appraise_username}}
							</text>
							<view class="userappraise">
								{{i.content}}
							</view>
						</view>
						<view @click="toappraise(index)" class="checkmore" v-if="item.Appraise.length===2">
								点击查看更多>
						</view>
						
					</view> 
					
					<image @click="creAppraise(index)" src="../../static/appraise.png" mode=""></image>
				
				</view>
			</view>
			

	
			<view :class="{'show':isshow,'noshow':!isshow}" >
					<u-alert :title="msginfo.title" :type = "msginfo.type" :description = "msginfo.dec" :show-icon="true"></u-alert>
			</view>
		</view> 

		<u-popup
			:safeAreaInsetTop="true"
			:mode="popupData.mode"
			:show="show"
			:round="popupData.round"
			:overlay="popupData.overlay"
			:borderRadius="popupData.borderRadius"
			:closeable="popupData.closeable"
			:closeOnClickOverlay="popupData.closeOnClickOverlay"
			@close="close"
		>
			 <u--textarea v-model="appraise.content" placeholder="请输入内容" autoHeight ></u--textarea>
			 <view style="width: 100%;">
				 <view class="" style="width: 30vw; float: right;margin-top: 1vh;">
					<u-button @click="confirmappraise" type="primary" :plain="true" text="确定"></u-button>
				 </view>
			 </view>
		</u-popup>
	</view>
</template>



<style lang="scss">

	.list{
		width: 100%;
		display: flex;
		justify-content: space-around;
		.avatar{
			width: 12%;
			height: 6.5vh;
			image{
				width: 90%;
				height: 90%;
				margin-top: 2vh;
				border-radius: 50%;
			}
		}
		.center{
			width: 80%;
			// border: 1px solid red;
			.header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.good{
					width: 44%;
					display: flex;
					align-items: center;
					justify-content: space-around;
					.type{
						   font: large "微软雅黑";/*设置字体和字体大小*/
						   // margin:50px auto; /*设置元素外边距*/
						   
						   letter-spacing: 2vw;
						   font-style:oblique;
						   font-weight: bold; /*设置字体粗细*/
						   text-align: center; /*设置文字居中*/
						   color: #f35626; /*设置文字颜色*/
						   animation:swing 2s infinite;/*设置动画*/
					}
					@keyframes swing{/*创建动画*/
					   20%{
						  transform:rotate(15deg);
					   }40%{
						  transform:rotate(-15deg);
					   }60%{
						  transform:rotate(5deg);
					   }80%{
						  transform:rotate(-5deg);
					   }100%{
						  transform:rotate(0deg);
					   }
					}
					image{
						width: 9vw;
						height: 6vh;
					}
				}
			}
			.helpcontent{
				.help{
					font-size: 1rem;
					margin-bottom: 1vw;
				}
				.allappraise{
					// font-size: large;
					font-family: serif;
					background-color: #f2f2f2;
					border-radius: 5%;
					
					.appraise{
					padding-left: 2vw;
					padding-bottom: 0.5vh;
					border-bottom: 1px solid #cccccc;
					text{
						color: #756f71;
					}
					.userappraise{
							margin-top: 0.5vh;
							font-size: small;
						}
					}
					.checkmore{
						padding-left: 2vw;
						padding-top: 1vh;
						padding-bottom: 1vh;
						color: #5677fc;
					}
				}
				image{
					width: 5vw;
					height: 3vh;
					float: right;
					margin-bottom: 1vh;
				}
			}
		}
		.show{
			display: block;
			width: 90vw;
			position: absolute;
			top: 40vh;
			animation: myshow 2s linear 
		}
		@keyframes myshow
		{
			from {opacity:1;}
			to {opacity:0;}
		}
		.noshow{
			display: none;
		}
	
	}
	.none{
			width: 100%;
			display: none;

		}
	.block{
		width: 100%;
		display: block;
	}
</style>