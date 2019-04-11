<template>
  <div class="container" id="header">
      <!--右侧工具栏-->
      <ul class="top-nav-info clear">
        <li>
          <el-dropdown>
        <span class="el-dropdown-link">
          <svg class="icon nav-bar-icon"><use xlink:href="#icon-wode"></use></svg>
        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>我的收藏</el-dropdown-item>
              <el-dropdown-item>我的影评</el-dropdown-item>
              <el-dropdown-item divided>修改个人信息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li><svg class="icon nav-bar-icon"><use xlink:href="#icon-unie62c"></use></svg></li>
      </ul>
      <!--导航菜单-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">选电影</template>
          <el-menu-item index="2-1">猜你喜欢</el-menu-item>
          <el-menu-item index="2-2">热门推荐</el-menu-item>
          <el-menu-item index="2-3">最近上映</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">排行榜</el-menu-item>
        <el-menu-item index="4">分类</el-menu-item>
        <el-menu-item index="5">影评</el-menu-item>
      </el-menu>
      <!--&lt;!&ndash;面包屑&ndash;&gt;-->
      <!--<el-breadcrumb separator="/" class="breadcrumb">-->
      <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
      <!--</el-breadcrumb>-->
    </div>
</template>

<script>
export default {
  name: 'header-nav',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
  #header {
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 9999
  }
  .top-nav-info {
    position: absolute;
    z-index: 100;
    right: 10%;
    top: 20px;
  }
  .top-nav-info li {
    list-style: none;
    float: left;
    margin-right: 20px;
  }
  .key-search {
    width: 100%;
    margin-top: 20px;
  }
  .breadcrumb {
    margin-top: 10px;
    margin-left: 20px;
  }
</style>
