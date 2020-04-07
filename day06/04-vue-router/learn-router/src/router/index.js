//配置项目路由
import VueRouter from 'vue-router'
import Vue from 'vue'
// import home from '../components/Home'
// import about from '../components/About'
// import user from '../components/User'

const home = () => import ('../components/Home')
const about = () => import ('../components/About')
const user = () => import ('../components/User')
const message = () => import('../components/Message')
const news = () => import('../components/News')
const profile = () => import('../components/Profile')

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);

//2. 创建VueRouter对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    meta:{
      title:'首页'
    },
    children: [
      {
        path: 'message',
        component: message
      }, {
        path: 'news',
        component: news
      },
      // {
      //   path: '',
      //   redirect: 'news'
      // }
    ]
  },
  {
    path: '/about',
    component: about,
    meta:{
      title:'关于'
    },
  },
  {
    path: '/user/:userId',
    component: user,
    meta:{
      title:'用户'
    },
  },
  {
    path: '/profile',
    component: profile,
    meta:{
      title:'档案'
    },
  }
];
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'isActive'
})

// 导航守卫相关
router.beforeEach((to, from, next) => {
  window.document.title = to.matched[0].meta.title;
  next();
})

//3. 将router对象传入Vue对象中
export default router
