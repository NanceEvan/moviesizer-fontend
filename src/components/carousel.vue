<template>
  <div id="carousel">
    <!--banner-->
    <el-row>
      <el-col :span="20" :offset="2">
        <el-carousel trigger="click" height="500px">
          <el-carousel-item v-for="(item,index) in banners" :key="index">
            <img :src="item.img" :alt="item.title" class="banner-img">
            <span class="title">{{item.title}}</span>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <!--热门搜索-->
    <el-row class="clear">
      <el-col :span="20" :offset="2">
        <el-autocomplete
          v-model="keySearch"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          placement="bottom-start"
          suffix-icon="el-icon-search"
          class="key-search"
        ></el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getBanners, getHotSearch} from '../api/api'
export default {
  name: 'carousel',
  data () {
    return {
      banners: [],
      // 搜索框变量
      restaurants: [],
      keySearch: '',
      timeout: null
    }
  },
  created () {
    this.getBanners()
  },
  mounted () {
    this.loadAll()
  },
  computed: {
  },
  methods: {
    getBanners () {
      // 获取banners
      getBanners().then((response) => {
        this.banners = response.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    querySearchAsync (queryString, cb) {
      // 同步获取搜索热词
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        console.log(state)
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      getHotSearch().then((response) => {
        this.restaurants = response.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style >
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .banner-img {
    width: 100%;
    height: 100%;
  }
  .title {
    display: block;
    position: relative;
    top: -100px;
    right: -150px;
    z-index: 100;
    font-size: 30px;
    color: whitesmoke;
    width: 500px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .el-input--suffix .el-input__inner{
    height: 60px;
    font-size: 20px;
  }
  .el-icon-search:before {
    font-size: 30px;
  }
  .el-input__icon {
    line-height: 60px;
    margin-right: 20px;
  }

</style>
