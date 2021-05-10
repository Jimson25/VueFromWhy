### vuejs的学习笔记



#### 一、目录文件结构

```
├─day01
│  ├─01_Vue尝试
│  │      01-Helloworld.html
│  │      02-vue列表展示.html
│  │      03-vue计数器.html
│  │      04-vue的template.html
│  │      
│  ├─02-插值操作
│  │      01-Mustach语法.html
│  │      02-v-once使用.html
│  │      03-v-html使用.html
│  │      04-v-text使用.html
│  │      05-v-pre使用.html
│  │      06-v-cloak使用.html
│  │      
│  ├─03-动态绑定属性
│  │      01-v-bind基本使用.html
│  │      02-v-bind动态绑定class（对象语法）.html
│  │      03-v-bind动态绑定class（数组语法）.html
│  │      05-v-bind的弄台绑定class(对象语法).html
│  │      
│  ├─04-计算属性
│  │      01-计算属性基本使用.html
│  │      
│  └─js
│          vue.js
│          
├─day02
│  ├─01-事件监听
│  │      01-v-on基本使用.html
│  │      02-v-on的参数问题.html
│  │      03-v-on修饰符.html
│  │      
│  ├─02-条件判断
│  │      01-v-if使用.html
│  │      02-v-if-ese结合使用.html
│  │      03-v-else-if使用.html
│  │      04-登录方式切换案例.html
│  │      
│  ├─03-循环遍历
│  │      01-v-for遍历数组和对象.html
│  │      02-数组方法测试.html
│  │      
│  ├─04-购物车案例
│  │      index.html
│  │      main.js
│  │      style.css
│  │      
│  └─js
│          vue.js
│          
├─day03
│  ├─01-js高阶函数使用
│  │      01-数组函数.html
│  │      
│  ├─02-v-model使用
│  │      01-v-model的基本使用.html
│  │      02-v-model结合radio使用.html
│  │      03-v-model结合checkbox使用.html
│  │      04-v-model修饰符.html
│  │      
│  ├─03-组件化开发
│  │      01-组件化的基本使用.html
│  │      02_全局组件和局部组件.html
│  │      03-父组件和子组件.html
│  │      04-组件注册语法糖.html
│  │      05-组件模板分离写法.html
│  │      06-组件中的数据存放问题.html
│  │      07-组件中的data为什么必须是函数.html
│  │      08-组件通信_父组件向子组件传递数据.html
│  │      09-组件通信_父传子之驼峰相关问题.html
│  │      10-组件通信_子组件向父组件传数据(自定义事件).html
│  │      
│  └─js
│          vue.js
│          
├─day04
│  ├─01-组件化开发
│  │      01-组件访问-父访问子-children.html
│  │      02-组件访问-父访问子-refs.html
│  │      03-组件访问-子访问父-parent-root.html
│  │      
│  ├─02-组件化高级
│  │      01-slot-插槽基本使用.html
│  │      02-具名插槽的使用.html
│  │      03-作用域插槽使用.html
│  │      
│  └─03-webpack使用
│      ├─01-webpack起步
│      │  │  index.html
│      │  │  package-lock.json
│      │  │  
│      │  └─src
│      │          main.js
│      │          mathUtil.js
│      │          
│      ├─02-webpack配置
│      │  │  index.html
│      │  │  package-lock.json
│      │  │  package.json
│      │  │  webpack.config.js
│      │  │  
│      │  └─src
│      │          main.js
│      │          mathUtil.js
│      │          
│      └─03-webpack的loader
│          │  index.html
│          │  package-lock.json
│          │  package.json
│          │  README.md
│          │  webpack.config.js
│          │  
│          └─src
│              │  main.js
│              │  
│              ├─css
│              │      Less.less
│              │      main.css
│              │      
│              ├─img
│              │      log.jpg
│              │      
│              └─js
│                      mathUtil.js
│                      
├─day05
│  ├─01-webpack中配置Vue
│  │  │  index.html
│  │  │  package-lock.json
│  │  │  package.json
│  │  │  README.md
│  │  │  webpack.config.js
│  │  │  
│  │  ├─dist
│  │  │  │  bundle.js
│  │  │  │  
│  │  │  └─img
│  │  │          timg.32f55763.jpg
│  │  │          
│  │  └─src
│  │      │  main.js
│  │      │  
│  │      ├─css
│  │      │      normal.css
│  │      │      special.less
│  │      │      
│  │      ├─img
│  │      │      test.jpg
│  │      │      timg.jpg
│  │      │      
│  │      ├─js
│  │      │      info.js
│  │      │      mathUtils.js
│  │      │      
│  │      └─vue
│  │              app.js
│  │              App.vue
│  │              Cpn.vue
│  │              
│  ├─02-webpack的插件
│  │  │  index.html
│  │  │  package-lock.json
│  │  │  package.json
│  │  │  README.md
│  │  │  webpack.config.js
│  │  │  
│  │  ├─dist
│  │  │  │  bundle.js
│  │  │  │  
│  │  │  └─img
│  │  │          timg.32f55763.jpg
│  │  │          
│  │  └─src
│  │      │  main.js
│  │      │  
│  │      ├─css
│  │      │      normal.css
│  │      │      special.less
│  │      │      
│  │      ├─img
│  │      │      test.jpg
│  │      │      timg.jpg
│  │      │      
│  │      ├─js
│  │      │      info.js
│  │      │      mathUtils.js
│  │      │      
│  │      └─vue
│  │              app.js
│  │              App.vue
│  │              Cpn.vue
│  │              
│  ├─03-webpack搭建本地服务器
│  │  │  index.html
│  │  │  package-lock.json
│  │  │  package.json
│  │  │  README.md
│  │  │  webpack.config.js
│  │  │  
│  │  ├─build
│  │  │      base.config.js
│  │  │      dev.config.js
│  │  │      prod.config.js
│  │  │      
│  │  ├─dist
│  │  │  │  bundle.js
│  │  │  │  
│  │  │  └─img
│  │  │          timg.32f55763.jpg
│  │  │          
│  │  └─src
│  │      │  main.js
│  │      │  
│  │      ├─css
│  │      │      normal.css
│  │      │      special.less
│  │      │      
│  │      ├─img
│  │      │      test.jpg
│  │      │      timg.jpg
│  │      │      
│  │      ├─js
│  │      │      info.js
│  │      │      mathUtils.js
│  │      │      
│  │      └─vue
│  │              app.js
│  │              App.vue
│  │              Cpn.vue
│  │              
│  └─04-vuecli2test
│      │  .babelrc
│      │  .editorconfig
│      │  .eslintignore
│      │  .eslintrc.js
│      │  .gitignore
│      │  .postcssrc.js
│      │  index.html
│      │  package.json
│      │  README.md
│      │  yarn.lock
│      │  
│      ├─build
│      │      build.js
│      │      check-versions.js
│      │      logo.png
│      │      utils.js
│      │      vue-loader.conf.js
│      │      webpack.base.conf.js
│      │      webpack.dev.conf.js
│      │      webpack.prod.conf.js
│      │      
│      ├─config
│      │      dev.env.js
│      │      index.js
│      │      prod.env.js
│      │      
│      ├─src
│      │  │  App.vue
│      │  │  main.js
│      │  │  
│      │  ├─assets
│      │  │      logo.png
│      │  │      
│      │  └─components
│      │          HelloWorld.vue
│      │          
│      └─static
│              .gitkeep
│              
├─day06
│  ├─01-runtimeonly和runtimecompile的区别
│  │  │  README.md
│  │  │  
│  │  ├─01-runtimecompiler
│  │  │  │  .babelrc
│  │  │  │  .editorconfig
│  │  │  │  .eslintignore
│  │  │  │  .eslintrc.js
│  │  │  │  .gitignore
│  │  │  │  .postcssrc.js
│  │  │  │  index.html
│  │  │  │  package.json
│  │  │  │  README.md
│  │  │  │  yarn.lock
│  │  │  │  
│  │  │  ├─build
│  │  │  │      build.js
│  │  │  │      check-versions.js
│  │  │  │      logo.png
│  │  │  │      utils.js
│  │  │  │      vue-loader.conf.js
│  │  │  │      webpack.base.conf.js
│  │  │  │      webpack.dev.conf.js
│  │  │  │      webpack.prod.conf.js
│  │  │  │      
│  │  │  ├─config
│  │  │  │      dev.env.js
│  │  │  │      index.js
│  │  │  │      prod.env.js
│  │  │  │      
│  │  │  ├─src
│  │  │  │  │  App.vue
│  │  │  │  │  main.js
│  │  │  │  │  
│  │  │  │  ├─assets
│  │  │  │  │      logo.png
│  │  │  │  │      
│  │  │  │  └─components
│  │  │  │          HelloWorld.vue
│  │  │  │          
│  │  │  └─static
│  │  │          .gitkeep
│  │  │          
│  │  └─02-runtimeonly
│  │      │  .babelrc
│  │      │  .editorconfig
│  │      │  .gitignore
│  │      │  .postcssrc.js
│  │      │  index.html
│  │      │  package.json
│  │      │  README.md
│  │      │  yarn.lock
│  │      │  
│  │      ├─build
│  │      │      build.js
│  │      │      check-versions.js
│  │      │      logo.png
│  │      │      utils.js
│  │      │      vue-loader.conf.js
│  │      │      webpack.base.conf.js
│  │      │      webpack.dev.conf.js
│  │      │      webpack.prod.conf.js
│  │      │      
│  │      ├─config
│  │      │      dev.env.js
│  │      │      index.js
│  │      │      prod.env.js
│  │      │      
│  │      ├─src
│  │      │  │  App.vue
│  │      │  │  main.js
│  │      │  │  
│  │      │  ├─assets
│  │      │  │      logo.png
│  │      │  │      
│  │      │  └─components
│  │      │          HelloWorld.vue
│  │      │          
│  │      └─static
│  │              .gitkeep
│  │              
│  ├─02-vuecli3test
│  │  │  .browserslistrc
│  │  │  .gitignore
│  │  │  babel.config.js
│  │  │  package.json
│  │  │  README.md
│  │  │  yarn.lock
│  │  │  
│  │  ├─public
│  │  │      favicon.ico
│  │  │      index.html
│  │  │      
│  │  └─src
│  │      │  App.vue
│  │      │  main.js
│  │      │  
│  │      ├─assets
│  │      │      logo.png
│  │      │      
│  │      └─components
│  │              HelloWorld.vue
│  │              
│  ├─03-箭头函数
│  │      01-箭头函数使用.js
│  │      02-箭头函数带参数.js
│  │      
│  └─04-vue-router
│      └─learn-router
│          │  .babelrc
│          │  .editorconfig
│          │  .gitignore
│          │  .postcssrc.js
│          │  index.html
│          │  package.json
│          │  README.md
│          │  yarn.lock
│          │  
│          ├─build
│          │      build.js
│          │      check-versions.js
│          │      logo.png
│          │      utils.js
│          │      vue-loader.conf.js
│          │      webpack.base.conf.js
│          │      webpack.dev.conf.js
│          │      webpack.prod.conf.js
│          │      
│          ├─config
│          │      dev.env.js
│          │      index.js
│          │      prod.env.js
│          │      
│          ├─src
│          │  │  App.vue
│          │  │  main.js
│          │  │  
│          │  ├─assets
│          │  │      logo.png
│          │  │      
│          │  ├─components
│          │  │      About.vue
│          │  │      Home.vue
│          │  │      Message.vue
│          │  │      News.vue
│          │  │      Profile.vue
│          │  │      User.vue
│          │  │      
│          │  └─router
│          │          index.js
│          │          
│          └─static
│                  .gitkeep
│                  
├─day07
│  └─01-tabbar
│      │  .babelrc
│      │  .editorconfig
│      │  .gitignore
│      │  .postcssrc.js
│      │  index.html
│      │  package.json
│      │  README.md
│      │  yarn.lock
│      │  
│      ├─build
│      │      build.js
│      │      check-versions.js
│      │      logo.png
│      │      utils.js
│      │      vue-loader.conf.js
│      │      webpack.base.conf.js
│      │      webpack.dev.conf.js
│      │      webpack.prod.conf.js
│      │      
│      ├─config
│      │      dev.env.js
│      │      index.js
│      │      prod.env.js
│      │      
│      ├─src
│      │  │  App.vue
│      │  │  main.js
│      │  │  
│      │  ├─assets
│      │  │  ├─css
│      │  │  │      base.css
│      │  │  │      
│      │  │  └─img
│      │  │      └─tabbar
│      │  │              category.svg
│      │  │              category_active.svg
│      │  │              home.svg
│      │  │              home_active.svg
│      │  │              profile.svg
│      │  │              profile_active.svg
│      │  │              shopcart.svg
│      │  │              shopcart_active.svg
│      │  │              
│      │  ├─components
│      │  │  └─tabbar
│      │  │          MainTabBar.vue
│      │  │          Tabbar.vue
│      │  │          TabBarItem.vue
│      │  │          
│      │  ├─router
│      │  │      index.js
│      │  │      
│      │  └─views
│      │      ├─cart
│      │      │      ShopCart.vue
│      │      │      
│      │      ├─category
│      │      │      Category.vue
│      │      │      
│      │      ├─home
│      │      │      Home.vue
│      │      │      
│      │      └─profile
│      │              Profile.vue
│      │              
│      └─static
│              .gitkeep
│              
├─day08
│  ├─01-Promise的使用
│  │      01-Promise的基本使用.js
│  │      
│  └─02-learn_vuex
│      │  .babelrc
│      │  .editorconfig
│      │  .gitignore
│      │  .postcssrc.js
│      │  index.html
│      │  package.json
│      │  README.md
│      │  yarn.lock
│      │  
│      ├─build
│      │      build.js
│      │      check-versions.js
│      │      logo.png
│      │      utils.js
│      │      vue-loader.conf.js
│      │      webpack.base.conf.js
│      │      webpack.dev.conf.js
│      │      webpack.prod.conf.js
│      │      
│      ├─config
│      │      dev.env.js
│      │      index.js
│      │      prod.env.js
│      │      
│      ├─src
│      │  │  App.vue
│      │  │  main.js
│      │  │  
│      │  ├─assets
│      │  │      logo.png
│      │  │      
│      │  ├─components
│      │  │      HelloVuex.vue
│      │  │      
│      │  ├─router
│      │  │      index.js
│      │  │      
│      │  └─store
│      │      │  index.js
│      │      │  Mutations-type.js
│      │      │  
│      │      └─modules
│      │              ModuleA.js
│      │              
│      └─static
│              .gitkeep
│              
├─day09
│  └─01-learn-axios
│      │  .babelrc
│      │  .editorconfig
│      │  .gitignore
│      │  .postcssrc.js
│      │  index.html
│      │  package.json
│      │  README.md
│      │  yarn.lock
│      │  
│      ├─build
│      │      build.js
│      │      check-versions.js
│      │      logo.png
│      │      utils.js
│      │      vue-loader.conf.js
│      │      webpack.base.conf.js
│      │      webpack.dev.conf.js
│      │      webpack.prod.conf.js
│      │      
│      ├─config
│      │      dev.env.js
│      │      index.js
│      │      prod.env.js
│      │      
│      ├─src
│      │  │  App.vue
│      │  │  main.js
│      │  │  
│      │  ├─api
│      │  │      api.js
│      │  │      
│      │  ├─assets
│      │  │      logo.png
│      │  │      
│      │  └─router
│      │          axios.js
│      │          index.js
│      │          
│      └─static
│              .gitkeep
│              
└─js
        vue.js
```

