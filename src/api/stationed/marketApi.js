import axios from 'axios';
import {url}  from '../url'

const reqObj = axios.create({
    // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
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

// 取得市集資料
export function getMarket() {
	return handleReq(reqObj.get('/apply/market/all/get/'))
}

// 取得市集申請資料
export function getMarketApply() {
	return handleReq(reqObj.get('/apply/market/apply/all/get'))
}

// 取得單筆市集申請
export function getMarketSearch(id, tel) {
	return handleReq(reqObj.get('/apply/market/search/get',{
		params: {
			id, tel
		}
	}))
}

// 重送申請企劃書
export function editMarketApplyProposal(data) {
	return handleReq(reqObj.put('/apply/market/form/proposal/edit', data))
}

// 填寫後5碼資料
export function editMarketApplyPay(data) {
	return handleReq(reqObj.put('/apply/market/form/pay/edit', data))
}

// 送出市集申請
export function uploadFile(data) {
	return handleReq(reqObj.post('/apply/market/form/post', data))
}

// export function updateFile(data) {
// 	return handleReq(reqObj.put('/upload/market/form/edit', data))
// }

// export function test(data) {
// 	return handleReq(reqObj.post('/upload/test', data))
// }




