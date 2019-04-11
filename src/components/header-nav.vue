<template>
  <div class="container" id="header">
      <!--右侧工具栏-->
      <ul class="top-nav-info clear">
        <li>
          <el-dropdown>
              <span class="el-dropdown-link"><svg class="icon nav-bar-icon"><use xlink:href="#icon-wode"></use></svg></span>
              <el-dropdown-menu slot="dropdown" v-if="userInfo.name">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>我的收藏</el-dropdown-item>
                <el-dropdown-item>我的影评</el-dropdown-item>
                <el-dropdown-item divided>修改个人信息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided  @click.native.prevent="loginOut">退出</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu slot="dropdown" v-else>
                <el-dropdown-item @click.native.prevent="toLogin">登录</el-dropdown-item>
                <el-dropdown-item @click.native.prevent="toRegister">注册</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li><svg class="icon nav-bar-icon"><use xlink:href="#icon-unie62c"></use></svg></li>
      </ul>
      <!--导航菜单-->
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" route="true">
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">选电影</template>
          <el-menu-item index="/recommend">猜你喜欢</el-menu-item>
          <el-menu-item index="/hot-movie">热门推荐</el-menu-item>
          <el-menu-item index="/recent">最近上映</el-menu-item>
        </el-submenu>
        <el-menu-item index="/leader-board">排行榜</el-menu-item>
        <el-menu-item index="/genres">分类</el-menu-item>
        <el-menu-item index="/remark">影评</el-menu-item>
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
import cookie from '../assets/js/cookie'
import { mapGetters } from 'vuex'
export default {
  name: 'header-nav',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  },
  mounted () {
  },
  methods: {
    loginOut () {
      cookie.delCookie('token')
      cookie.delCookie('name')
      // 重新触发sotre
      this.$store.dispatch('setInfo')
      // 跳转到登录页面
      this.$router.push({'name': 'Login'})
    },
    toLogin () {
      this.$router.push({'name': 'Login'})
    },
    toRegister () {
      // TODO 注册功能
      console.log('register')
    }
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
