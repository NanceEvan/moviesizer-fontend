<template>
  <el-container>
    <el-header>
      <header-nav></header-nav>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
import headerNav from './components/header-nav'
export default {
  name: 'App',
  components: {
    headerNav
  }
}
</script>

<style>

</style>
