<template>
  <div class="item-box">
    <div class="img_content">
      <img :src="prefix+item.poster_path" v-if="item.poster_path">
      <div class="non-img" v-else></div>
      <div class="hover">
        <svg class="icon icon-pulse" aria-hidden="true">
          <use xlink:href="#icon-pulse"></use>
        </svg>

        <div class="hover-wrap">
          <svg class="icon icon-xihuan" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
          </svg>
          <svg class="icon icon-shoucang" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info-wrap">
        <h3 class="item-title">{{item.title}}</h3>
        <span class="item-release_data">{{item.release_data}}</span>
        <div class="outer-rating">
          <el-progress :percentage="ratingPercent" :color="ratingColor"></el-progress>
        </div>
      </div>
      <p class="overview">{{overview}}</p>
      <div class="view-more">More Info</div>
    </div>
  </div>
</template>

<script>
import {times, divide} from 'number-precision'
export default {
  name: 'item-collapse',
  data () {
    return {
      prefix: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
      activeName: '1'
    }
  },
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    ratingPercent () {
      return Math.floor(times(divide(this.item.vote_average, 10), 100))
    },
    ratingColor () {
      if (this.item.vote_average < 3) {
        return '#FF0000'
      } else if (this.item.vote_average < 6) {
        return '#FF9900'
      } else if (this.item.vote_average < 8) {
        return '#8e71c7'
      } else {
        return '#33CC00'
      }
    },
    overview () {
      let ov = this.item.overview.split('\\').join('')
      if (ov.length > 220) {
        return ov.slice(0, 221) + '...'
      }
      return ov
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .item-box {
    /*width: 185px;*/
    position: relative;
    width: 400px;
    height: 275px;
    background-color: blue;
  }
  /*--start-- 左侧图片区域 --start--*/
  .img_content {
    position: relative;
    width: 185px;
    height: 275px;
    overflow: hidden;
  }
  .non-img {
    width: 185px;
    height: 275px;
    background-color: #ededed;
  }
  /*--start-- 图片区域悬浮窗口 --start--*/
  .hover {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    font-size: 0;
    background-color: rgba(255, 255, 255, .8);
  }
  .hover .hover-wrap {
    margin-left: 55px;
    display: inline-block;
  }
  .icon-pulse {
    display: inline-block;
    margin-left: 10px;
    font-size: 40px;
    color: black;
  }
  .icon-xihuan {
    font-size: 30px;
    color: red;
  }
  .icon-shoucang {
    margin-left: 10px;
    font-size: 30px;
    color: red;
  }
  .item-box:hover .hover{
    display: block;
  }
  .item-box:hover .info{
    display: block;
  }
  /*--end-- 图片区域悬浮窗口 --end--*/
  /*--end-- 左侧图片区域 --end--*/

  /*--start-- 右侧详情 --start--*/
  .info {
    display: none;
    width: 298px;
    height: 278px;
    position: absolute;
    top: 0;
    left: 185px;
    background-color: white;
    box-sizing: border-box;
    padding: 10px 16px 16px 16px;
    border: 1px solid #e3e3e3;
    overflow: hidden;
  }
  .item-title {
    width: 100%;
    display: block;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.1em;
  }
  .item-release_data {
    color: rgba(0,0,0,0.6);
    line-height: 1em;
  }
  .overview{
    word-wrap: break-word;
    white-space: normal;
    color: #4d4d4d;
    font-size: 0.9em;
    line-height: 1.2em;
    margin-top: 15px;
  }
  .view-more{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
    width: 100%;
    height: 20px;
    border-top: 1px solid #e3e3e3;
  }
  /*--end-- 右侧详情 --end--*/
</style>
