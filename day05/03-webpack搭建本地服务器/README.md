## 一、webpack搭建本地服务器

1. 安装webpack服务器模块 `npm install --save-dev webpack-dev-server@2.9.1`
2. 配置webpack.config.js,添加devServer项
    ```
     devServer: {
        contentBase: './dist',
        inline: true,
        port:1888
     }    
    ```
   
    > contentBase: 要服务的目录 该服务器会把目录加载到内存并运行      
      inline : 开启实时监听,开启后修改代码时服务会自动发布       
      port : 在指定端口号开启服务         
3. 此时再运行webpack-dev-server,由于cmd和终端默认是查找全局文件,所以这里会运行失败
4. 在package.json中的script下添加配置 `"dev": "webpack-dev-server"`
5. 此时再运行 `npm run dev` ,此时项目会运行在localhost:1888上
6. 要想执行 `npm run dev`之后自动打开浏览器显示,只需要修改script配置 ` "dev": "webpack-dev-server --open"`即可

## 二、配置文件分离

1. 在src下创建build目录用于存放配置文件
2. 创建base.config.js并将webpack.config.js中的内容粘贴到此处
3. 创建prod.config.js和dev.config.js 分别对应生产和开发环境
4. 将生产和开发所需的配置抽离到对应文件
5. 安装配置文件管理组件 `npm install webpack-merge --save-dev` 
6. 修改prod.config.js配置为:
    ```
        const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
        const webpackMerge = require('webpack-merge')
        const baseConfig = require('./base.config')
        
        module.exports = webpackMerge(baseConfig, {
          plugins: [
            new UglifyjsWebpackPlugin()
          ]
        })
    ```
7. 修改dev.config.js配置为: 
    ```
        const webpackMerge = require('webpack-merge')
        const baseConfig = require('./base.config')
        
        module.exports = webpackMerge(baseConfig, {
          devServer: {
            contentBase: './dist',
            inline: true
          }
        })    
    ```
8. 此时可以删除webpack.config.js文件
9. 再次运行 `npm run build`时会报错找不到配置文件,此时需要配置package.json,在script下添加代码:
    ```
        "build": "webpack --config ./build/prod.config.js",
        "dev": "webpack-dev-server --open --config ./build/dev.config.js"
    ```   
10. 再次运行 `npm run build`,项目会把文件打包到build目录下,这是因为前面配置的输出目录是当前目录下的dist目录,需再次修改配置文件
    ```
        //path: path.resolve(__dirname, 'dist') 
        path: path.resolve(__dirname, '../dist'),
    ```
