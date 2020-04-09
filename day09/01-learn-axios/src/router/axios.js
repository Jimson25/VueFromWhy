// 全局axios配置
import axios from 'axios'
import NProgress from 'nprogress'

axios.defaults.baseURL = 'http://localhost:10088';
axios.defaults.timeout = 10000;
//跨域请求，允许保存cookie
// axios.defaults.withCredentials = true;
// NProgress.configure({
//   showSpinner: false
// });

//HTTPrequest拦截
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

export default axios

