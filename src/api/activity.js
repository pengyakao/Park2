import axios from 'axios'

// 設定 baseUrl
const reqObj = axios.create({
    // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
    // baseURL: 'http://10.0.102.122:3001',
    // baseURL: 'http://172.20.10.6:3001',
    // baseURL: 'http://192.168.31.195:3001',
    // baseURL: 'http://172.20.10.4:3001',
    baseURL: 'http://192.168.31.105:3001',

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
