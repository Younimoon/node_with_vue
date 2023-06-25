<script lang="ts" setup>
import {onShow,onReady,onLoad } from "@dcloudio/uni-app"
import {getHelp,getallappraise,addAppraise} from '../../utils/api'
import {ref,reactive} from "vue"
import {showmsg} from '../../plugins/showToast'
const lists = ref([])
const onlylist =ref([])
const allparaise = ref([])

const show = ref(false)
const msginfo = reactive({
	title:"恭喜",
	dec:"评论成功",
	type:"success"
})
const isshow = ref(false)
let appraiseindex= ref(null)
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
onLoad(async (options)=>{
	lists.value = await getHelp()
	lists.value.forEach(item=>{
		if(item.imgs){
			const image = item.imgs.split(',');
			item.imgs = image
		}
		if(item.helpid === options.helpid){
			onlylist.value = item
			// onlylist.value.src = '../../static/good-noactive.png'
		}
	})
	getappraise()
})
//获取评论
async function getappraise(){
	onlylist.value.Appraise = []
	allparaise.value = await getallappraise()
	allparaise.value.forEach(item=>{
		if(item.helpid === onlylist.value.helpid){
			onlylist.value.Appraise.push(item)
		}
	})
	console.log(onlylist.value);
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
	appraise.helpid = onlylist.value.helpid
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
	// getAllappraise()
	getappraise()
	showmsg(msginfo,isshow)
		appraise.helpid = null
		appraise.content = ""
		appraiseindex.value = null
		show.value = false
		return
}
</script>
<template>
	<view class="list">
		<!-- {{ onlylist }} -->
		<!-- <view class="list" v-for="(item,index) in onlylist " :key="item.helpid"> -->
			<view class="avatar" >
				<image :src="onlylist.userpic"></image>
			</view>
			
			<view class="center">
		
				<!-- 名字点赞 -->
				<view class="header">
					<text class="name" style="color: aqua;font-size: large;">{{onlylist.username}}</text>
					<view class="good">
						<h1 class="type">{{onlylist.title}}</h1>
						<text >{{onlylist.favorite}}</text>
						<image  @click="like(index)" :src="onlylist.src" mode=""></image>
					</view>
				</view>
				
				<!-- 正文局部评论 -->
				<view class="helpcontent">
					<view class="help">
						{{onlylist.content}}
						<view class="helpimg" v-if="onlylist.imgs">
							   <u-album :urls="onlylist.imgs" keyName="src2"></u-album>
						</view>
					</view>

					<view class="allappraise" v-show="onlylist.Appraise">
						<view class="appraise" v-for="(i,index) in onlylist.Appraise" :key="index">
							<text>
								{{i.appraise_username}}
							</text>
							<view class="userappraise">
								{{i.content}}
							</view>
						</view>	
					</view> 
					
					<image @click="creAppraise(index)" src="../../static/appraise.png" mode=""></image>
				
				</view>
			</view>
			

	
			<view :class="{'show':isshow,'noshow':!isshow}" >
					<u-alert :title="msginfo.title" :type = "msginfo.type" :description = "msginfo.dec" :show-icon="true"></u-alert>
			</view>
		<!-- </view>  -->

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