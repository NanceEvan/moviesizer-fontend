<template>
<el-row id="footer">
  <el-col :span="3" :offset="6" class="footer-col" style="background-color: transparent;">
    <h3>THE BASICS</h3>
    <ul>
      <li><a href="javascript:void(0)">About MSizer</a></li>
      <li><a href="javascript:void(0)">API</a></li>
      <li><a href="javascript:void(0)">Blog</a></li>
    </ul>
  </el-col>
  <el-col :span="3" :offset="5" class="footer-col" style="background-color: transparent;">
    <h3>FEATURE</h3>
    <ul>
      <li><a href="javascript:void(0)">热门推荐</a></li>
      <li><a href="javascript:void(0)">近期上映</a></li>
      <li><a href="javascript:void(0)">猜你喜欢</a></li>
    </ul>
  </el-col>
  <el-col :span="3" :offset="1" class="footer-col" style="background-color: transparent;">
    <h3>ABOUT ME</h3>
    <ul>
      <li><a href="javascript:void(0)">PHONE</a></li>
      <li><a href="javascript:void(0)">QQ</a></li>
    </ul>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
  #footer {
    background: url(https://www.themoviedb.org/assets/2/v4/footers_v2/TheMartian-cef692c96b25ed627cb2cc6b2762858b6f047550f28916d17acb37f418a7ac0d.jpg), radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%);
    background-size: cover;
    height: 300px;
  }
  .footer-col {
    background-color: red;
  }
  .footer-col h3{
    font-weight: bold;
    font-size: 1.4em;
    line-height: 1.4em;
    text-transform: uppercase;
    color: #fff;
    white-space: nowrap;
  }
  .footer-col {
    margin-top: 80px;
  }
  .footer-col ul {
    margin-top: 20px;
  }
  .footer-col li {
    margin-top: 10px;
    list-style: none;
  }
  .footer-col li a {
    font-size: 1.2em;
    color: #fff;
  }
  .footer-col:first-child {
    font-size: 20px;
  }
  .footer-col:first-child li {
    font-size: 20px;
    margin-top: 10px;
  }
</style>
