import axios from 'axios'

// 設定 baseUrl
const reqObj = axios.create({
    // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
    // <<<<<<< HEAD
    // baseURL: 'http://192.168.0.46:3001',
    // baseURL: 'http://10.0.102.113:3001',
    // baseURL: 'http://172.20.10.4:3001',
    baseURL: 'http://192.168.31.105:3001',
    // =======
    baseURL: 'http://192.168.100.11:3001',
    // baseURL: 'http://10.0.102.113:3001',
    // >>>>>>> 531cff1fd0b5b62c633324f8e3ddde00710de1ed
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
export function getStore() {
    return handleReq(reqObj.get('/store/all/get'))
}
export function getStoreImg(id) {
    console.log(
        reqObj.get('/admin/store/get/file/multiple', {
            params: {
                id,
            },
        })
    )
    return handleReq(
        reqObj.get('/admin/store/get/file/multiple', {
            params: {
                id,
            },
        })
    )
}
