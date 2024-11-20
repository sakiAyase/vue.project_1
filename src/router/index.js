import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    /* name: '',
    component: ()=>import('../views/tlias/EmpView.vue') */
    redirect:'/log'//这个就是值访问path为/时默认访问redirect里面的path！！！，其实和上面两行的效果是一样的
  },
  {
    path:'/log',
    name:'login',
    component:()=>import('../views/auth/LoginView.vue')
  },  
  {
    path:'/reg',
    name:'register',
    component:()=>import('../views/auth/RegisterView.vue')
  },
  {
    path: '/emp',
    name: 'emp',
    component: ()=>import('../views/tlias/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    component: () => import(/* webpackChunkName: "about" */ '../views/tlias/deptView.vue')
  },
  {
    path: '/ClC',
    name: 'ClC',
    component: () => import(/* webpackChunkName: "about" */ '../views/tlias/ClassComponent.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
