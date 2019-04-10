import axios from 'axios'

// let host = 'http://mockjs.com/api'

// 获取banners
export const getBanners = params => {
  let url = `/banners/`
  return axios.get(url)
}
