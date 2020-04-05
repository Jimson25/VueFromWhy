## 一、Vue-Router基本使用

### (一) 安装Vue-Router
方式一: 通过脚手架构建项目时添加vue-router插件
方式二: 命令行安装 `npm install vue-router --save`

### (二) 使用vue-router
1. 在 `src`目录下创建 `router`目录,添加并编辑`index.js`文件
2. 导入 `VueRouter` `Vue` 及要添加的路由跳转组件 eg:`Home,About`
    ```js
        import VueRouter from 'vue-router'
        import Vue from 'vue'
        import home from '../components/Home'
        import about from '../components/About'
    ```
3. 通过VUe.use()安装插件 `Vue.use(VueRouter)`
4. 创建 `VueRouter` 对象,传入routes数组 `const router = new VueRouter({routes:[]})`
5. 在`routes`数组添加路由跳转关系
    ```js
        const routes = [
          {
            path: '/home',
            component: home
          },
          {
            path:'/about',
            component: about
          }
        ];
    ```
6. 导出路由对象 `export default router`
7. 在展示的 `App.vue`中添加路由跳转配置 `router-link` `router-view`
    > <router-link to="/home">首页</router-link> 添加首页链接,点击后跳转到 `/home`页面

    > <router-view></router-view> 跳转后的页面展示位置,相当于一个占位符

### (三) 路由默认值设置
1. 设置根路径并重定向到要设置的页面
```
  {
    path:'/',
    redirect:'/home'
  },
```

### (四) 设置为history模式
1. vue-router默认路由模式为hash,在地址栏上会有 '#'
2. 要修改为history只需要在router对象中添加 `mode : 'history' `即可

### (五) <router-link></router-link>标签
#### 1. tag属性
1. `<router-link to="/home" tag="button">首页</router-link>` 此时`首页`会渲染为按钮

#### 2. replace属性
1. `<router-link to="/home" tag="button" replace>首页</router-link>`
2. `<router-link to="/about" tag="button" replace>关于</router-link>`
3. 此时 `首页` `关于`在被渲染为按钮的同时,点击跳转时浏览器的返回前进按钮会失效;

#### 3. active-class属性
1. 当<router-link>对应的路由匹配成功时,会自动给当前元素添加一个 `router-link-active` 的class属性,可以对此class添加样式
2. 可以在`router/index.js`中配置class名称,即在router对象中添加 `linkActiveClass:'class-name'`即可

