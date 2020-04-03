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
    > inline : 开启实时监听,开启后修改代码时服务会自动发布
    > port : 在指定端口号开启服务
3. 此时再运行webpack-dev-server,由于cmd和终端默认是查找全局文件,所以这里会运行失败
4. 在package.json中的script下添加配置 `"dev": "webpack-dev-server"`
5. 此时再运行 `npm run dev` ,此时项目会运行在localhost:1888上
6. 要想执行 `npm run dev`之后自动打开浏览器显示,只需要修改script配置 ` "dev": "webpack-dev-server --open"`即可
