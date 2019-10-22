import { requestURL } from './config'
let user = {
	user_type: 3,
	customer_id: ''
}
function getType(data, method) { // 获取请求方式
	let type = {}
	if (!method) {
		method = 'POST'
		type = {
			method,
			data: {
				...data
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			sslVerify:false
		}
	} else {
		method = 'GET'
		type = {
			method,
			data: {
				...data
			}
		}
	}
	return type
}

function Request(data, url, method) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: requestURL + url,
			...getType( data, method),
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		})
	}).catch(err => console.log(err))
}


export default function(data, url, method) {
	return Request(data, url, method)
}