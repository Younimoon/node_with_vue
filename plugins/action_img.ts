	function deletePic(event) {
				helpform.fileList.splice(event.index, 1)
			}
			// // 新增图片
		async function afterRead(event) {
					// console.log(fileList1);
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = helpform.fileList.length
				lists.map((item) => {
					helpform.fileList.push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					let item = helpform.fileList[fileListLen]
					helpform.fileList.splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
					}))
					fileListLen++
				}
			}

export {deletePic,afterRead}