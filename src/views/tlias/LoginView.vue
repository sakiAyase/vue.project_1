<template>
    <div>
        <el-container style="height: 1300px; border: 1px solid #eee">
            <el-header style="font-size:40px;background-color: rgb(200, 200, 200)">登录</el-header>
            <el-container>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="1150px" class="demo-ruleForm">

                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="密码" prop="password">
                        <el-input  v-model="ruleForm.password"></el-input>
                    </el-form-item>


                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>


                </el-form>
            </el-container>
        </el-container>
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {//validate为检验表单是否通过的一个方法，根据结果会返回某值
          if (valid) {
            //这里应该可以放异步请求来控制登录的controller的部分了（后端）
            axios.post("http://localhost:8044/login",this.ruleForm).then((res)=>{
              if(res.data.code==1){
                    this.$router.push({
                        path:'/emp',
                    })
                    window.sessionStorage.setItem("token",res.data.data);
                    //本地存储功能，setItem就是设置的方法，第一个位置写名称例如"token_access"
                    //第二个位置就是写传递过来的信息,如果是字符串格式的变量就可以直接写变量就行了
            }
            else if(res.data.code==0){
              this.$message.error("用户名或密码有误");
            }
          })
          } else{
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();//resetFields为对该表单重置的一个方法
      },
    }
  }
</script>
<style></style>