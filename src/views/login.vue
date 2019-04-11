<template>
  <div id="login">
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="loginHandle" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '../api/api'
import cookie from '../assets/js/cookie'
export default {
  name: 'login',
  data () {
    return {
      logining: false,
      account: {
        username: '',
        pwd: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'}
          // { validator: validaePass }
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'blur'}
          // { validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  created () {
    // 清除缓存
    cookie.delCookie('token')
    cookie.delCookie('name')
    // 重新触发store
    // 更新store数据
    this.$store.dispatch('setInfo')
  },
  methods: {
    loginHandle () {
      let that = this
      this.$refs.AccountFrom.validate((valid) => {
        if (valid) {
          this.logining = true
          let loginParams = {
            'username': this.account.username,
            'password': this.account.pwd
          }
          login(loginParams).then(res => res.data).then(res => {
            console.log(res)
            // 本地存储用户信息
            cookie.setCookie('name', this.account.username, 7)
            cookie.setCookie('token', res.token, 7)
            // 存储在store
            that.$store.dispatch('setInfo')
            this.$router.push({'name': 'Index'})
          }).catch(function (error) {
            if ('non_field_errors' in error) {
              that.error = error.non_field_errors[0]
            }
            if ('username' in error) {
              that.userNameError = error.username[0]
            }
            if ('password' in error) {
              that.parseWordError = error.password[0]
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-container {
    width: 350px;
    margin-left: 35%;
  }
</style>
