<template>
  <div class="box">
    <div class="left"></div>
    <div class="right">
      <h4>学生管理系统</h4>
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
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {//validate为检验表单是否通过的一个方法，根据结果会返回某值
      //     if (valid) {
      //       //这里应该可以放异步请求来控制登录的controller的部分了（后端）
      //       axios.post("http://localhost:8044/login",this.ruleForm).then((res)=>{
      //         if(res.data.code==1){
      //               this.$router.push({
      //                   path:'/emp',
      //               })
      //               window.sessionStorage.setItem("token",res.data.data);
      //               //本地存储功能，setItem就是设置的方法，第一个位置写名称例如"token_access"
      //               //第二个位置就是写传递过来的信息,如果是字符串格式的变量就可以直接写变量就行了
      //       }
      //       else if(res.data.code==0){
      //         this.$message.error("用户名或密码有误");
      //       }
      //     })
      //     } else{
      //       return false;
      //     }
      //   });
      // },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();//resetFields为对该表单重置的一个方法
      // },
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
// export default {
//   name: 'LoginView',
//   data() {
//     return {
//       username: '',
//       password: ''
//     }
//   },
//   methods: {
//     handleSubmit() {
//       // 处理登录逻辑
//       console.log('登录', this.username, this.password)
//     },
//     goToRegister() {
//         this.$router.push('/reg');
//     },
//     recoverPassword() {
//       // 处理找回密码逻辑
//       console.log('跳转到找回密码页面')
//     }
//   }
// }
</script>

<style scoped>
@import '@/assets/css/LoginView.css';
</style>