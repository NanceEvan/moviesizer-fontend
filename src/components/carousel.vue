<template>
  <el-carousel :interval="4000" type="card" height="450px" class="carousel">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <img :src="item.img" :alt="item.title" class="banner-img">
      <span class="title">{{item.title}}</span>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {getBanners} from '../api/api'
export default {
  name: 'carousel',
  data () {
    return {
      banners: []
    }
  },
  created () {
    this.getBanners()
  },
  computed: {
  },
  methods: {
    getBanners () {
      // console.log(this.$store.state.banners)
      // return this.$store.state.banners
      getBanners().then((response) => {
        this.banners = response.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
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
  .carousel{
    margin-top: 45px;
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
</style>
