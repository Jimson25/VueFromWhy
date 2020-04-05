//配置项目路由
import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/Home'
import about from '../components/About'

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);

//2. 创建VueRouter对象
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path:'/about',
    component: about
  }
];
const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'isActive'
})

//3. 将router对象传入Vue对象中
export default router

