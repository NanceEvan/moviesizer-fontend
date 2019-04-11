<template>
  <el-container>
    <el-header>
      <header-nav></header-nav>
    </el-header>
    <el-main style="height: 700px">
      <router-view/>
    </el-main>
    <el-footer>
      <footer-nav></footer-nav>
    </el-footer>
  </el-container>
</template>

<script>
import headerNav from './components/header-nav'
import footerNav from './components/footer-nav'
export default {
  name: 'App',
  components: {
    headerNav,
    footerNav
  }
}
</script>

<style>

</style>
