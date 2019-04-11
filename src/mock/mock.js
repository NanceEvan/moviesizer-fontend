const Mock = require('mockjs') // 获取mock对象
// const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
// const code = 200 // 返回的状态码

// Banners 数据
const postBanners = req => {
  return require('./mocker/banners')
}
// 热搜
const postHotSearch = req => {
  return require('./mocker/hot-search')
}
// 近期热门
const postHotMovie = req => {
  return require('./mocker/hot-movies')
}

// 登录
const login = req => {
  return require('./mocker/login')
}

// 获取banners
Mock.mock(`/banners/`, 'get', postBanners)
// 获取热搜词
Mock.mock('/hot-search/', 'get', postHotSearch)
// 获取近期热门
Mock.mock('/hot-movies/', 'get', postHotMovie)
// 登录
Mock.mock('/login/', 'post', login)
