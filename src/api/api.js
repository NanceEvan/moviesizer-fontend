import axios from 'axios'

let host = ''

// 获取banners
export const getBanners = params => {
  let url = `${host}/banners/`
  return axios.get(url)
}

// 获取热搜词
export const getHotSearch = params => {
  let url = `${host}/hot-search/`
  return axios.get(url)
}

// 获取热门电影
export const getHotMovies = params => {
  let url = `${host}/hot-movies/`
  return axios.get(url)
}
