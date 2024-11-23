import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/log' // 访问根路径时重定向到 /log
  },
  {
    path:'/log',
    name:'login',
    component: ()=>import('../views/auth/LoginView.vue')
  },  
  {
    path:'/reg',
    name:'register',
    component: ()=>import('../views/auth/RegisterView.vue')
  },
  {
    path:'/find',
    name:'find',
    component: ()=>import('../views/auth/FindView.vue')
  },
  {
    path: '/emp',
    name: 'emp',
    component: ()=>import('../views/tlias/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    component: () => import('../views/tlias/deptView.vue')
  },
  {
    path: '/ClC',
    name: 'ClC',
    component: () => import('../views/tlias/ClassComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // 设置为 history 模式
  routes
})

export default router
