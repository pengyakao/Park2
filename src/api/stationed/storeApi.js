import axios from 'axios';
const reqObj = axios.create({
	// baseURL: 'http://10.0.102.59:3001',
    baseURL: 'http://192.168.0.161:3001',
    header: {
        'Content-Type': 'application/json'
		// 'Content-Type': 'multipart/form-data'
    }
})

function handleReq(e) {
	return new Promise((resolve, reject) => {
		e
			.then((res) => resolve(res.data))
			.catch((err) => reject(err))
	})
}

// 取得店家資料
export function getStore() {
	return handleReq(reqObj.get('/apply/store/all/get'))
}

// 取得店家申請資料
export function getStoreApply() {
	return handleReq(reqObj.get('/apply/store/apply/all/get'))
}

export function postStoreApply(data) {
	return handleReq(reqObj.post('/apply/store/form/post', data))
}