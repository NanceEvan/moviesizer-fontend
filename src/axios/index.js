// 引入vue
import axios from 'axios'

// 全局状态控制引入
import store from '../store/store'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log('interceptors')
    if (store.state.userInfo.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `JWT ${store.state.userInfo.token}`
    }
    console.log(config)
    return config
  },
  err => {
    return Promise.reject(err)
  })
//
// // http response 拦截器
axios.interceptors.response.use(
  undefined,
  error => {
    let res = error.response
    switch (res.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        console.log('未登录 或者token过期')
        break
      case 403:
        console.log('您没有该操作权限')
        break
      // alert('您没有该操作权限');
      case 500:
        console.log('服务器错误')
        break
      // alert('服务器错误');
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data)
  })

// // 封装axios的post请求
// export function fetch (url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params)
//       .then(response => {
//         resolve(response.data)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }
