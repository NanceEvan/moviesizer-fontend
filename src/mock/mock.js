const Mock = require('mockjs') // 获取mock对象
// const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
// const code = 200 // 返回的状态码

const postBanners = req => {
  return require('./mocker/banners')
}

// 获取banners
Mock.mock(`/banners/`, 'get', postBanners)
