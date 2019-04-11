<template>
  <div id="pop-show">
    <h5>近期热点</h5>
    <ul class="pop clearfix" id="pop-list">
    </ul>
    <div class="button">
      <a href="javascript:void(0)" class="iconfont icon-left-circle pre mr10 disabled" id="pop-pre"></a>
      <a href="javascript:void(0)" class="iconfont icon-right-circle sub" id="pop-sub"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pop-show'
}
</script>

<style scoped>
  div[class$="pro"]{
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
  }
  div[class$="pro"] > h5{
    height: 60px;
    font-size: 19px;
    line-height: 3em;
    padding-left: 25px;
    color: rgb(102, 102, 102);
    border-bottom: 1px solid rgb(225, 225, 225);
  }
  .pop{
    position: relative;
    right: 0;
    /*right: 1220px;*/
    width: 2440px;
  }
  .pop-pro .button {
    position: absolute;
    right: 20px;
    top: 18px;
    font-size: 0;
  }

  .pop-pro .button .pre, .pop-pro .button .sub{
    font-size: 25px;
    color: rgb(124, 124, 124);
  }
  .pop-pro .button .disabled{
    color: rgb(213, 213, 213);
  }
  .pop-pro .button .disabled:hover{
    cursor: not-allowed;
  }
</style>
