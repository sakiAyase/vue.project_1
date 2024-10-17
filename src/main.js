import Vue from 'vue'
import App from './App.vue'
import router from './router'//这里已经导入了路由信息了
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/LoginView.css';

import  axios  from 'axios';
axios.interceptors.request.use(config=>{
  config.headers.token=sessionStorage.getItem("token")
  return config;
})//这里添加了全局的请求头的token头


Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,//这里也写了所以可以用路由了，路由想到于一个xml文件吧，我猜
  render: h => h(App)
}).$mount('#app')

