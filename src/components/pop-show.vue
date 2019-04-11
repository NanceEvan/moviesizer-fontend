<template>
  <div id="pop-show" style="width: 1150px;">
    <h5>近期热点</h5>
    <ul class="recent-hots clear" id="pop-list" style="width: 1150px;">
      <li v-for="(item,index) in movies" v-bind:key="index" class="fl"><item-collapse :item="item"></item-collapse></li>
    </ul>
    <div class="button">
      <a href="javascript:void(0)" class="iconfont icon-left-circle pre mr10 disabled" id="pop-pre"></a>
      <a href="javascript:void(0)" class="iconfont icon-right-circle sub" id="pop-sub"></a>
    </div>
  </div>
</template>

<script>
import itemCollapse from './item-collapse'
import {times} from 'number-precision'
export default {
  name: 'pop-show',
  components: {
    itemCollapse
  },
  props: {
    movies: {
      type: Array
    }
  },
  computed: {
    getWidth () {
      return times(2, 185)
    }
  }
}
</script>

<style scoped>
  h5{
    height: 60px;
    font-size: 19px;
    line-height: 3em;
    padding-left: 25px;
    color: rgb(102, 102, 102);
    border-bottom: 1px solid rgb(225, 225, 225);
  }
  #pop-show {
    margin: 0 auto;
    overflow: hidden;
  }
  #pop-list li{
    margin-left: 55px;
    margin-bottom: 10px;
  }
</style>
