## 一、webpack打包
1. 创建main.js作为程序入口并导入MathUtil.js中的函数,在项目中创建webpack.config.js  
2. 在webpack.config.js中设置打包的文件入口和出口
    ```
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
4. 运行`npm init`生成package.json文件
    ```
        {
          "name": "meetwebpack",        //名称
          "version": "1.0.0",           //版本
          "description": "",    
          "main": "webpack.config.js",  //配置入口
          "dependencies": {},           //运行时需要的依赖
          "devDependencies": {          //开发室需要的依赖
            "less": "^3.11.1",
            "less-loader": "^5.0.0",
            "webpack": "^3.6.0"
          },
          "scripts": {                  //运行的脚本
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack"          //这里是后添加的,再运行npm run build时会走到这里
          },
          "author": "",
          "license": "ISC"
        }
    
    ```
5. 运行`npm run build`,此时会将main.js中的全部依赖项整合到一起并打包到bundle.js中

6. 在index.html中引入bundle.js即可调用相关函数;

## 二、引入css文件
1. 由于webpack不支持对css的转换，所以这里需要使用loader
2. 在src目录下创建css目录并添加css文件
3. 在main.js中引入css文件`require("./css/main.css");`
4. 安装css-loader 在命令行窗口运行`npm install --save-dev css-loader`
5. 在webpack.config.js中配置loader
    ```
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
            ]
        }
    ```
6. 再次运行`npm run build`css即可生效

## 三、引入less文件
1. 由于webpack不支持对less的转换，所以这里需要使用less-loader
2. 在src目录下创建css目录并添加less文件
3. 在main.js中引入css文件`require("./css/less.less");`
4. 安装css-loader 在命令行窗口运行`npm install --save-dev less-loader less`
5. 在webpack.config.js中配置less-loader,在rules中添加一个rule用于处理less
    ```
        module: {
            rules: [
                // css-loader
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                //  less-loader
                {
                  test: /\.less$/,
                  use: [
                    {
                      loader: "style-loader",
                    }, {
                      loader: "css-loader",
                    }, {
                      loader: "less-loader",
                    }
                  ]
                }
            ]
        }
    ```
6. 再次运行`npm run build`less文件即可生效

## 四、引入图片文件
1. 在css中添加图片样式
2. 安装url-loader `npm install --save-dev url-loader`
3. 安装file-loader `npm install --save-dev file-loader`
4. 修改webpack.config.js中的配置
```
{
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
```
5. 此时再运行 `npm run build` 即可编译
6. 默认情况下,webpack会将生成的路径直接返回给使用者,但是，我们整个程序是打包在dist文件夹下的，所以这里我们需要在输出路径下再添加一个`dist/`
```
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
```
7. webpack生成的打包图片文件使用的时随机的hash值,如果要设置打包到指定文件夹再跟上原来的文件名并且防止重复,此时需要修改option选项
```
options: {
    limit: 13000,
    name: 'img/[name].[hash:8].[ext]',
},
```

## 五、ES6转换为ES5
1. 在webpack中要将ES6转换为ES5需要使用babel
2. 安装babel `npm install --save-dev babel-loader@7 babel-core babel-preset-es2015`
3. 配置webpack.config.js
```
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
        }
    }
```
4. 解释:
> test: 要转换的内容
> exclude: 要排除的内容
> use-loader: 使用的loader
> use-option: 转换配置,可以指定文件也可以直接写 

