export function showerror({message,image="/static/error.png"}){
	uni.showToast({
		title:message,
		icon:'none',
		image
	})
}

export function showSuccess({message,image='/static/success.png'}){
	uni.showToast({
		title:message,
		icon:'none',
		image
	})
}
export function showmsg(msginfo,isshow){
	msginfo.dec,
	msginfo.title, 
	msginfo.type,
	isshow.value = true
	setTimeout(()=>{
		isshow.value = false
	},1990)
}