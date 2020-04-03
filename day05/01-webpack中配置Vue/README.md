## 一、引入Vue.js

1. 将Vue作为依赖项进行安装 `npm install vue --save`
2. 在main.js中导入Vue  `import Vue from 'vue'`
3. 按正常逻辑开发代码
4. 重新打包运行程序,此时功能无法实现并且会报错
5. 在webpack.config.js中module.export下添加配置项即可
```
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
```

## 二、el和template的区别

1. 在index中指定el用于指定Vue要管理的DOM, 如果Vue中同时指定了el和template, 那么在运行时template模板会替换掉el对应的模板内容;

## 三、Vue模板分离实现

1. 在src目录下创建vue目录,添加App.vue文件并添加相关代码
2. 在main.js中导入vue.app `import App from './vue/App.vue'`
3. 修改Vue实例,将App.vue注册为组件并添加到template中
    ```vue
        new Vue({
          el: '#app',
          template: '<App/>',
          components: {
            App
          }
        })
    ```
    > 同时存在el和template时,template中的内容会替换掉el中的内容
    > 这里将App注册为组件然后在template中使用,相当于替换后的`<div><App/><div/>`
4. 这里和前面加载css/less文件类似的,需要对应的loader `npm install vue-loader vue-template-compiler --save-dev`
    > vue-loader: 用于加载Vue文件
    > vue-template-compiler: 用于编译加载后的Vue模板
5. 安装对应loader后还需要修改webpack.config.js文件,添加rule
    ```
        {
            test: /\.vue$/,
            use: ['vue-loader']
        }
    ```
6. 此时再运行 `npm run build` ,此时还可能会报错,可能会输出vue-loader缺少一个插件
7. 这是由于在新版vue-loader中需要自行配置该插件,只需要将package.json中的vue-loader版本修改为低于14.0.0即可
    > "vue-loader": "^13.0.0"  这里版本号前面添加了 '^' 符号,此时node会自动在13.0.0 ~ 14.0.0之间查找版本号最低的版本导入
8. 此时再运行 `npm run build` 即可
9. 注: 在导入Vue文件时如果想要省略后缀名可以通过配置webpack.config.js实现,在resolve下配置extensions数组即可
    ```
        resolve: {
            extensions: ['.js', '.css', '.vue'],
        }
    ``` 