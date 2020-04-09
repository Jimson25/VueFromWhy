## Axios基本使用
### 一、基本使用
1. 导入:安装组件后直接使用
2.发送请求:
    ```js
        axios({
          url: '/main/getName?page=10&size=8',
          method: 'Get'
        }).then(res => {
          console.log(res);
          console.log('http://localhost:10088/main/getName\n\n');
        })
    ```

### 二、全局配置
1. 搞个目录创建 `axios.js`,一般就直接放在 `router`目录下,新建一个network也行
2. 配置`axios`, 这里参考`java`的继承, 其他配置参数参考百度
    ```js
        // 全局axios配置

        //导入下载的axios
        import axios from 'axios'

        //配置url及超时时间
        axios.defaults.baseURL = 'http://localhost:10088';
        axios.defaults.timeout = 10000;

        //导出我们的axios
        export default axios
    ```
3. 使用:
> 我们可以创建一个 `api`目录,在里面写我们的网络请求,参考 `src/api/api.js`
> 在组件中导入并调用 `getName`即可

### 三、拦截器
```js
    axios.interceptors.request.use(config => {
      console.log('请求拦截器_success');
      console.log('在这里可以对请求做配置');
      return config;
    },error => {
      console.log('请求拦截器_error');
      return error;
    })

    axios.interceptors.response.use(res=>{
      console.log('相应拦截器');
      console.log('这里可以对响应数据做处理');
      console.log(res);
      return res;
    },error => {
      return Promise.reject(new Error('这里是错误信息'))
    })
```


