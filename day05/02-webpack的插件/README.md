# webpack的plugin使用
## 一、添加版权的插件BannerPlugin

1. 修改webpack.config.js文件,引入webpack `const webpack = require('webpack')`
2. 添加插件配置,在`module.export = {}`中添加如下代码
    ```
      plugins:[
          new webpack.BannerPlugin("版权归小金同学所有"),
      ]
    ```
3. 重新打包程序,查看bundle.js文件,出现版权说明

## 二、打包html的插件HtmlWebpackPlugin

1. 安装HtmlWebpackPlugin插件 `npm install html-webpack-plugin --save-dev`
2. 修改webpack.config.js文件
    > 导入插件 `const HtmlWebpackPlugin = require('html-webpack-plugin')`
    > 配置插件 `new HtmlWebpackPlugin()`
3. 再次编译项目,此时在dist目录下会自动生成index.html文件,但是存在如下问题
    > 1.引入的js文件是dist/bundle.js
    > 2.缺少Vue管理的根元素
4. 解决方案:
    > 在之前我们在输出位置配置了 `publicPath: 'dist/'`,将其注释掉即可解决(1)
    > 缺少的Vue根元素我们需要为生成的html指定模板 

## 三、压缩js的插件uglifyjs-webpack-plugin

1. 安装uglifyjs-webpack-plugin插件 `npm install uglifyjs-webpack-plugin@1.1.1 --save-dev`
2. 修改webpack.config.js文件,添加配置 
    > 导入插件 `const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')`
    > 在plugins中配置插件 `new UglifyjsWebpackPlugin()`
