<script lang="ts" setup>
	import {ref,reactive,computed} from 'vue'
	import {addhelp} from '../../type/index'
	import {addHelp} from '../../utils/api'
	const showtype = ref<boolean>(false)
	//提示信息
	const msginfo = reactive({
		title:"",
		dec:"",
		type:""
	})
	const helpform= reactive<addhelp>({
		type:"",
		money:null,
		content:"",
		fileList: [],
		fileList1:[],
		username:null
	})
	const isshow = ref<boolean>(false)
	const actions = reactive([
		{
			name:"求助"
		},
		{
			name:"吐槽"
		},
		{
			name:"交友"
		},
		{
			name:"求搭子"
		}
	])
						
	function typeSelect(e:any){
		helpform.type = e.name
		console.log(e.name);
		// console.log(actions[index]);
	}
	function fun(){
		uni.navigateTo({
			url:'/pages/integral/integral'
		})
	}
	
	//删除图片
	function deletePic(event) {
		helpform.fileList.splice(event.index, 1)
	}
			// // 新增图片
	async function afterRead(event) {
		// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
		let lists = [].concat(event.file)
		let fileListLen = helpform.fileList.length
		lists.map((item) => {
			helpform.fileList.unshift({
				...item,
				status: 'success',
				message: ''
			})
		})
		// console.log(lists);
		for (let i = 0; i < lists.length; i++) {
			let item = helpform.fileList[fileListLen]
			helpform.fileList.splice(fileListLen, 1, Object.assign(item, {
				status: 'success',
				message: '',
			}))
			fileListLen++
		}
	}
	//提交表单
	async	function submit(){
	// 	//判断用户是否登录
		if(uni.getStorageSync('name')){
			helpform.username = uni.getStorageSync('name')
			if(helpform.type === "" || helpform.content.trim() === ""){
				msginfo.dec = '请填写最基本的类别和内容'
				msginfo.title = "提示"
				msginfo.type="warning"
				isshow.value = true
				return	setTimeout(()=>{
					isshow.value = false
				},2990)
			}
			if(helpform.money){
				// /^：开始 $/：结束  *前面的出现1-n次!/^0+(\.\d{1,})$/.test(helpform.money) && !
				// 都不满足才会进入，前面判断是否是0开头，后面是判断金额是否非0开头
				if (!/^(0){1}(.){1}[0-9]+$/.test(helpform.money) &&! /^[1-9].?[0-9]*$/.test(helpform.money)){
					msginfo.dec = '请输入正确价格'
					msginfo.title = "提示"
					msginfo.type="warning"
					isshow.value = true
					return	setTimeout(()=>{
						isshow.value = false
					},2990)
				}
			}
			helpform.fileList.forEach(item=>{
				helpform.fileList1.push(item.url)
			})
			const res  = await addHelp(helpform)
			if(res.code === 200){
				msginfo.dec = res.message
				msginfo.title = "提示"
				msginfo.type="success"
				isshow.value = true
				helpform.type=helpform.content="",
				helpform.money= helpform.username= null,
				helpform.fileList = helpform.fileList1=[]
				return	setTimeout(()=>{
					isshow.value = false
				},2990)
			}
			
			else {
				msginfo.dec = res.message
				msginfo.title = "提示"
				msginfo.type="error"
				isshow.value = true
				return	setTimeout(()=>{
					isshow.value = false
				},2990)
			}
		}
		
		else{
			msginfo.dec = '请先进行登录'
			msginfo.title = "提示"
			msginfo.type="warning"
			isshow.value = true
			return	setTimeout(()=>{
				isshow.value = false
			},2990)
		}
	
		
		
		
	}
	
</script>
<template>
	<view style="overflow: hidden;">
		<view class="container">
			<text class="title">创建帮助</text>
			<!-- //类别 -->
			<u--form
				labelPosition="left"
				ref="form1"
			>
			<u-form-item
			label="请求类别:"
			prop="userInfo.sex"
			borderBottom
			@click="showtype = true"
			ref="item1"
			>
			<u--input
				v-model="helpform.type"
				disabled
				disabledColor="#ffffff"
				placeholder="请选择类别"
				border="none"
			></u--input>
		
			</u-form-item>
			<!-- //金额 -->
			<u-form-item
			label="金额:"
			prop="userInfo.sex"
			borderBottom
			ref="item1"
			>
			<u--input
				v-model="helpform.money"
				disabledColor="#ffffff"
				placeholder="请合理支付"
				border="none"
			></u--input>
			</u-form-item>
			
			<!-- 请求正文 -->
			<u-form-item
				label="帮助内容:"
				prop="userInfo.sex"
				ref="item1"
				style="display: block;"
			>
			
			</u-form-item>	
			<u--textarea v-model="helpform.content" placeholder="请输入内容" autoHeight ></u--textarea>
		</u--form>
		<u-upload
			:fileList="helpform.fileList"
			@afterRead="afterRead"
			@delete="deletePic"
			:previewFullImage="true"
			name="1"
			multiple
			:maxCount="10"
		></u-upload>
			
		<u-button @click="submit" type="primary" text="提交" :disabled="isshow"></u-button>
		
		<u-action-sheet
			:show="showtype"
			:actions="actions"
			title="请选择分类"
			@close="showtype = false"
			@select="typeSelect"
		>
		</u-action-sheet>
		<view :class="{'show':isshow,'noshow':!isshow}" >
				<u-alert :title="msginfo.title" :type = "msginfo.type" :description = "msginfo.dec" :show-icon="true"></u-alert>
		</view>
		</view>
	</view>
</template>
<style lang="scss">
	.container{
		width: 90%;
		margin: 2vh auto;
		height: 90vh;
		display: flex;
		flex-direction: column;
		.title{
			text-align: center;
			font-size: larger;
			letter-spacing: 2vw;
		}
		.u-form{
			text{
				width: 25vw;
			}
			.u-form-item__body__right{
				margin-left: 20vw;
				.u-input__content__field-wrapper__field{
					font-size: large !important;
				}
			}
			
			text{
				font-size: large;
				color: skyblue;
				font-weight: bold;
			}

		}
		.u-upload__wrap{
			margin-top: 3vh;
		}
		.u-form-item{
			margin-top: 2vh;
		}
		.u-button__text{
			letter-spacing: 2vw !important;
			font-size: large !important;
		}
	}
	.show{
		display: block;
		width: 90vw;
		position: absolute;
		top: 40vh;
		animation: myshow 3s linear 
	}
	@keyframes myshow
	{
		from {opacity:1;}
		to {opacity:0;}
	}
	.noshow{
		display: none;
	}
	.u-upload__status{
		display: none !important;
		color: #efefef;
	}
</style>