<template>
  <div >
    <!-- <h1>{{ message }}</h1> -->
      <!--      <ElementView></ElementView> -->
    <!-- <emp-view></emp-view> -->
<router-view/>
  </div>
</template><!--模板部分，由他生成HTML代码-->



<script>
/* import ElementView from './views/element/ElementView.vue'; */

/* import router from './router'; */

/* import EmpView from './views/tlias/EmpView.vue'; */
export default{
    components: {} ,
    data() {
        return {
            
        };
    } //在这里定义data对象需要由一个函数来实现，这个对象的内容就是函数的返回值
}
</script>
<!---控制模板的数据来源和行为-->
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
