<template>
  <div class="box">
    <div class="left"></div>
    <div class="right">
      <h4> 登  录 </h4>
      <form @submit.prevent="handleSubmit">
        <input class="acc" type="text" v-model="username" placeholder="用户名" />
        <input class="acc" type="password" v-model="password" placeholder="密码" />
        <input class="submit" type="submit" value="登录" />
      </form>
      <div class="fn">
        <a href="javascript:;" @click="goToRegister">注册账号</a>
        <a href="javascript:;" @click="recoverPassword">找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      resetForm() {
        this.username = '';
        this.password = '';
      },
      async handleSubmit() {
        try {
          const response = await axios.post('http://localhost:8044/login', {
            username: this.username,
            password: this.password,
          });
          // 处理成功响应
          console.log('登录成功:', response.data);
          // 存储 token
          if (response.data.token) {
            sessionStorage.setItem('token', response.data.token);
          }
          // 页面跳转
          //this.$router.push('/dashboard'); // 假设登录成功后跳转到仪表板页面
        } catch (error) {
          // 处理错误
          this.resetForm();
          console.error('登录失败:', error.response ? error.response.data : error.message);
          alert('登录失败，请检查用户名和密码');
        }
      },
      goToRegister() {
          this.$router.push('/reg');
      },
      recoverPassword() {
        // 处理找回密码逻辑
        console.log('跳转到找回密码页面')
      }
    }
  }
</script>

<style scoped>
@import '@/assets/css/LoginView.css';
</style>