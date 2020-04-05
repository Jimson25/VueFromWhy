## 一、Vue cli3配置文件修改：
### 方法一:
1. 在项目目录下运行命令行窗口输入 `vue ui` 通过浏览器进入到图形管理页面修改;

### 方法二:
1. 打开 `node_modules/@vue/cli-service/webpack.config.js`
2. 查看配置文件,发现导入了 `./lib/Service`
3. 在里面有个 `configPath` 指向 `config` 目录就是webpack的配置文件

### 方法三:
1. 在项目根目录下创建 `vue.config.js` 文件
2. 添加配置
    ```
    module.export={
        //配置信息
    }
    ```
3. 在vue执行时会把这个文件里面的配置和初始化时的配置合并

