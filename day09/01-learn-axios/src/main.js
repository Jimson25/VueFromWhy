import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './router/axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'Get'
// }).then(res => {
//   console.log(res);
//   console.log('http://123.207.32.32:8000/home/multidata\n\n');
// })

axios({
  url: '/main/getName?page=10&size=8',
  method: 'Get'
}).then(res => {
  console.log(res);
  console.log('http://localhost:10088/main/getName\n\n');
})


//专门针对get请求做的参数优化
axios({
  url: 'http://localhost:10088/main/getName',
  method: 'Get',
  prams: {
    page: 10,
    size: 8
  }
}).then(res => {
  console.log(res);
  console.log('http://localhost:10088/main/getName\n\n');
})

//发送多个并发请求
axios.all([axios({
  url: 'http://localhost:10088/main/getAge',
}), axios({
  url: 'http://localhost:10088/main/getName',
  method: 'Get',
  prams: {
    page: 10,
    size: 8
  }
})]).then(
  axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
    console.log('axios.all\n\n');
  })
)


//创建实例调用
const instance1 = axios.create({
  baseURL: 'http://localhost:10088/main',
  timeout: 10000
});

instance1({
  url: '/getAge',
}).then(res => {
  console.log(res);
});

instance1({
  url: '/getName',
  prams: {
    page: 10,
    size: 8
  }
}).then(res => {
  console.log(res);
})

const instance2 = axios.create({
  baseURL: 'http://www.baidu.com',
  timeout: 10000
});




