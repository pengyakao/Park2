import axios from 'axios'
import { url } from './url'

// 設定 baseUrl
const reqObj = axios.create({
    // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
    baseURL: url,
    header: {
        'Content-Type': 'application/json',
    },
})

// 建立 promise函式
function handleReq(e) {
    return new Promise((resolve, reject) => {
        e.then((res) => resolve(res.data)).catch((err) => reject(err))
    })
}

// api function
export function getActivity() {
    return handleReq(reqObj.get('/activity/all/get'))
}
