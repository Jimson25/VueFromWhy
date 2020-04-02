1. 在项目中创建webpack.config.js
2. 在webpack.config.js中设置打包的文件入口和出口
    ```$json
        const path = require('path')//导入path路径

        entry:'./src/main.js',  //入口
          output:{              //出口 出口的path要求必须是绝对路径
            path:path.resolve(__dirname,'dist'),
            filename:'bundle.js'
          },
    ```
3. 由于我们本地安装了更高的webpack版本,这里使用默认是本地安装的,所以需要对该项目进行局部安装webpack
    ```
   //局部安装
    npm install webpack@3.6.0 --save-dev
   //全局安装
   npm install webpack@3.6.0 -g
    ```
4. 
