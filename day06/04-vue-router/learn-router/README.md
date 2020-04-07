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

## 二、动态路由跳转

>在项目中存在一个user页面,每次点击后在地址栏`/user`后面拼接userId
### (一)动态路由基本配置
1. 添加User组件并配置路由跳转及`<router-link>用户`标签
2. 此时点击`用户`链接后,地址栏显示为 `http://localhost:8080/user` 要求在 `/user`后面加入UserId
3. 修改 `/router/index.js`,将 `path:'/user'`修改为 `path:'/user/:userId'`
4. 修改`<router-link>`标签为 `<router-link to="/user/zhangsan">我的</router-link>`
5. 此时再点击`用户`链接后地址栏变为`http://localhost:8080/user/zhangsan`
6. 在实际开发中userId一般是从服务器获取,这里假设在`data(){}`中存在`userId:'xiaojintongxue'`属性,那么`<router-link>`可修改为如下样式
7. `<router-link v-bind:to="'/user/'+ userId">我的</router-link>` 通过 `v-bind`将userId拼接到url中
8. 再次点击 `用户`链接,地址栏显示为 `http://localhost:8080/user/xiaojintongxue`

### (二) 获取动态路由配置的userId
1. 前面我们可以把服务器获取的`userId`拼接到地址栏,这里实现从地址栏获取拼接的`userId`
2. 已知在`动态路由配置 -> 03`中我们给user的path拼接了 `:userId`属性
3. 在 `User`组件中添加计算属性 `userId(){return this.$route.params.userId}`
4. 调用计算属性即可获取
5. 也可以直接使用标签获取并展示 `<h2>UserId:{{$route.params.userId}} </h2>`

### (三) 路由的懒加载
> 在项目中,如果在用户打开页面时就把全部的页面请求到本地,那么页面加载时间会变得很长,导致用户打开页面后有相当长一段时间页面显示空白
> 要解决这个问题就需要用到懒加载,即在用户打开网页时只加载首页,当用户点击其他页面时再想服务器请求页面数据;
1. 懒加载三种方式:
```js
// 方式一: 结合Vue的异步组件和Webpack的代码分析.
const Home = resolve => { require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.vue')) })};
// 方式二: AMD写法
const About = resolve => require(['../components/About.vue'], resolve);
// 方式三: 在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.
const Home = () => import('../components/Home.vue')
```
2. 前面两种不考虑使用,这里我们主要使用方式三
3. 实现: 只需要将 `router/index.js`中的组件导入方式修改为上述方式三即可
4. 此时打包项目,发现 `dist/static/js`目录中除了原本的三个js文件外又多出了几个js文件
5. 这就是配置了路由懒加载后单独拆分出来的组件js,只有用户打开对应页面时才会向服务器请求该js文件

### (四) 嵌套路由
> 假设在home页面中有两个功能,分别是message和news,
> 我们希望能通过 `/home/message` 和 `/home/news`分别访问对应组件,此时就需要用到嵌套路由

1. 创建`Message`和`News`两个组件并添加相关内容
2. 在 `router/index.js`中导入`Message`和`News`组件
3. 在 `home`路由下添加 `children`的数组属性并配置字组件路由
    ```
        children: [
            {
               path: 'message',
               component: message
            },
            ...
        ]
    ```
4. 在`Home`组件中配置`Message`和`News`的 `<router-link>`及 `<router-news>`即可
5. 可为`home`路由配置默认打开的组件,方法同上

### (五)路由跳转参数传递
#### 方式一: 参考<获取动态路由配置的userId>
#### 方式二:
1. 添加Profile组件并添加相关信息
2. 在 `/router/index.js`中配置profile组件路由
3. 在 `App.vue`中添加 profile对应的 `<router-link>`并配置`query`
4. 配置信息:`<router-link :to="{path:'/profile',query:{name:'张三',age:'18'}}">档案</router-link>`
5. 可将query提取到 `data`中并从服务器获取数据
6. 在`Profile`组件接收传递的参数 `<h3>Name:{{this.$route.query.name}} - Age:{{this.$route.query.age}}</h3>`

### (六)导航守卫
#### 在我们切换组件时,默认显示的页面标题是项目的名称,需求:将标题修改为组件名称
1. 编辑 `router/index.js` ,在每个组件的路由下添加 `meta{title:'名称'}`属性
2. 在 `router/index.js`中创建完对象后添加如下代码
    ```
        router.beforeEach((to, from, next) => {
          window.document.title = to.matched[0].meta.title;
          next();
        })
    ```

### (七)keep-alive
#### 用于保证切换其他组件后当前组件不会被销毁
#### 属性:
1. `include` 默认添加的,不用管它
2. `exclude` 要排除的组件,即每次打开关闭都会重新创建销毁等
```html
<!-- 排除`name`属性为`profile`的组件 -->
<keep-alive exclude="profile">
  <router-view/>
</keep-alive>
```











## tip：
### (一) `$router` 和 `$route`的区别
> `this.$router` 获取的的是我们定义的路由对象 `const router = new VueRouter({...})`
> `this.$route` 获取的是当前活跃的路由信息
