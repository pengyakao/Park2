import axios from 'axios';
import {url}  from '../url'

const reqObj = axios.create({
	baseURL: url,
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