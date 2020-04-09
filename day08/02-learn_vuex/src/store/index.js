import Vue from "vue";
import Vuex from 'vuex'
import {
  INCREMENT, DECREMENT, INCREMENTCOUNT, ADDSTUDENT, UPDATEINFO
} from './Mutations-type'
import ModuleA from "./modules/ModuleA";


//1.安装插件
Vue.use(Vuex)

//2. 创建对象
const store = new Vuex.Store({
  state: {
    name: 'kangkang',
    counter: 100,
    age: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++;
    },
    [DECREMENT](state) {
      state.counter--;
    },
    [INCREMENTCOUNT](state, count) {
      state.counter += count
    },
    [ADDSTUDENT](state, student) {
      state.students.push(student)
    },
    [UPDATEINFO](state) {
      //修改姓名 响应式
      state.info.name = '金同学'

      //添加一个addr属性
      //这里如果直接添加属性,则不是响应式,即页面信息不会刷新,需要使用Vue.set(...)
      Vue.set(state.info, 'addr', '首都')

      //删除属性
      //同样的,直接删除也不是响应式,需使用Vue.delete(...)
      Vue.delete(state.info, 'age')
    }
  },
  actions: {
    //不带参数
    // updateInfoInAction(context) {
    //   setTimeout(() => {
    //     context.commit(
    //       UPDATEINFO
    //     )
    //   },1000)
    // }
    //带参数
    // updateInfoInAction(context,payload) {
    //   setTimeout(() => {
    //     context.commit(UPDATEINFO);
    //     console.log(payload);
    //   },1000)
    // }
    //在异步请求完成后打印成功信息
    updateInfoInAction(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(UPDATEINFO);
          console.log('---这是异步请求---');
          console.log(payload);
          resolve('提交已经完成了')
        }, 1000)
      });
    }
  },
  getters: {
    getAdult(state) {
      return state.age.filter(a => a >= 18)
    },
    getAdultStudent(state) {
      return state.students.filter(stu => stu.age >= 18)
    },
    getAdultStudentCount(state, getter) {
      return getter.getAdultStudent.length;
    },
    getMoreAge(state) {
      return (age) => {
        state.students.filter(stu => stu.age > age)
      }
    }
  },
  modules: {
    a: ModuleA
  }
});

//导出对象
export default store;
