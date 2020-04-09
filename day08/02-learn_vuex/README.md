## VueX相关

### 一、单一状态树(Single Source of Truth)
1. 为了方便管理数据，Vue把我们的数据及状态信息都保存在一个store中，避免了后期维护和管理的困难
2. 单一状态树能让我们以最直接的方式找到某个代码片段并且在之后的维护管理中也十分简单；

### 二、Getters的使用
#### (一)基本使用
1. Getters简单理解为一个需要手动调用的拦截器
2. 在这里面我们可以直接对返回的数据进行一些处理
    ```js
    const store = new Vuex.Store({
      state: {
        age: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
      },
      mutations: {},
      actions: {},
      getters: {
        getAdult(state) {
          return state.age.filter(a => a >= 18)
        }
      },
      modules: {}
    });
    ```
3. 如上,在 `state`中有一个 `age`数组,我们可以再`getters`中添加一个`getAdult`属性
4. 以后当我们需要获取数组里的成年人的年龄时,直接调用 `$store.getters.getAdult`即可

#### (二)getters作为参数传递
1. 参考代码即可
```js
    const store = new Vuex.Store({
      state: {
        students: [
          {id: 110, name: 'why', age: 18},
          {id: 111, name: 'kobe', age: 24},
          {id: 112, name: 'james', age: 30},
          {id: 113, name: 'curry', age: 10}
        ],
      },
      mutations: {},
      actions: {},
      getters: {
        getAdult(state) {
          return state.age.filter(a => a >= 18)
        },
        getAdultStudent(state) {
          return state.students.filter(stu => stu.age >= 18)
        },
        getAdultStudentCount(state,getter){
          return getter.getAdultStudent.length;
        }
      },
      modules: {}
    });
```
#### (三)getters接收参数
1. 有时候我们想要在 `getters`中接收参数,比如说获取年龄大于 18 的学生信息
2. 实现: 创建对应的`getters`属性,返回一个函数,并且在函数中接收参数即可
    ```js
        const store = new Vuex.Store({
          state: {
            students: [
              {id: 110, name: 'why', age: 18},
              {id: 111, name: 'kobe', age: 24},
              {id: 112, name: 'james', age: 30},
              {id: 113, name: 'curry', age: 10}
            ],
          },
          mutations: {},
          actions: {},
          getters: {
            getMoreAge(state) {
              return (age) => {
                 state.students.filter(stu => stu.age > age)
              }
            }
          },
          modules: {}
        });
    ```
4. 调用:
    ```html
       <h2>{{$store.getters.getMoreAge(18)}}</h2>
    ```

### 三、Mutation使用
#### (一)基本使用
1. 在 `Vuex`中更新数据的唯一方式: 提交Mutation
2. Mutation主要包含两部分 `事件类型(type)` `回调函数(handle)`
3. 创建
    ```js
        const store = new Vuex.Store({
          state: {
            counter:0
          },
          mutations: {
            increment(state) {
              state.counter++;
            },
            decrement(state) {
              state.counter--;
            }
          },
          actions: {},
          getters: {},
          modules: {}
        });
    ```
4. 调用 ` this.$store.commit('increment') `

#### (二)传递参数
1. 调用:
    ```
        this.$store.commit('incrementCount',count)
    ```
2. 接收:
    ```
        incrementCount(state, count) {
          state.counter += count
        },
    ```

#### (三)提交风格
1. 除上述方式外,Vue还提供了另外一种风格, 它是一个包含type属性的对象
2. 提交:
    ```js
       this.$store.commit({
         type:'incrementCount',
         count
       })
    ```
3. 接收:
    ```
       incrementCount(state, payload){
         state.counter += payload.count
       }
    ```
4. 相当于提交的count变成了一个对象

#### (四)响应式修改页面数据
```js
    const store = new Vuex.Store({
      state: {
        info: {
          name: 'kobe',
          age: 40,
          height: 1.98
        }
      },
      mutations: {
        updateInfo(state){
          //修改姓名 响应式
          state.info.name = '金同学'

          //添加一个addr属性
          //这里如果直接添加属性,则不是响应式,即页面信息不会刷新,需要使用Vue.set(...)
          Vue.set(state.info,'addr','首都')

          //删除属性
          //同样的,直接删除也不是响应式,需使用Vue.delete(...)
          Vue.delete(state.info,'age')
        }
      },
      actions: {},
      getters: {},
      modules: {}
    });
```
1. 响应式为`info`添加属性 `state.info['address'] = '首都'`=>失败,不是响应式
2. 需要使用`Vue.set(...)`
3. 响应式删除`info`中的`age` `delete state.info.age`=>失败,不是响应式
4. 修改为 `Vue.delete(...)`

#### (五)Mutations的类型常量
1. 在Vue组件中调用 `this.$store.commit('incrementCount')`的时候,传入的`type`是没有提示的,很容易写错
2. 解决方案为,抽取一个单独的文件,在里面将 `type`使用常量保存起来,定义和提交的时候直接使用该常量即可
3. 参考 `Mutations-type.js`,`/store/index.js`,`App.vue`

### 四、Action使用
#### (一)基本使用
1. Vuex规定所有异步请求必须有 `Action`提交,所以,异步请求需要在 `Action`中调用 `Mutations`的函数
2. 实现:
    ```
     //不带参数
     updateInfoInAction(context) {
       setTimeout(() => {
         context.commit(
           UPDATEINFO
         )
       },1000)
     }
    //带参数
     updateInfoInAction(context,payload) {
       setTimeout(() => {
         context.commit(UPDATEINFO);
         console.log(payload);
       },1000)
     }
    ```
3. 调用:
    ```js
     //不带参数
     this.$store.dispatch("updateInfoInAction");
     //带参数
     this.$store.dispatch("updateInfoInAction", '参数');
    ```

#### (二)异步调用高逼格使用
1. 需求: 在执行完异步调用后在执行某段代码
2. 实现:
    ```
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
    ```
3. 调用:
    ```js
    this.$store
       .dispatch("updateInfoInAction", '这是我传递的参数')
       .then(res => {
              console.log('---这里是回调函数的打印信息---');
              console.log(res);
       })
    ```
4. 输出:
    ```
        ---这是异步请求--- index.js:74
        这是我传递的参数 index.js:75
        ---这里是回调函数的打印信息--- App.vue:62
        提交已经完成了
    ```
5. 这里实现中返回的是一个 `Promise`对象,所以我们可以在调用的地方使用这个的 `.then((res)=>{...})`

### 五、Module的使用
#### (一)解决的问题
1. Vuex使用单一状态树时,即代表在项目中仅有一个store对象
2. 即,当我们应用变得很大时我们的store对象会变得很臃肿
3. 所以Vuex允许我我们将store拆分为模块(module),在module中同样可以使用state、mutations、getters、action

#### (二)实现
1. 创建`Module_A.js` 实现如下
```js
    import {UPDATENAME_A} from "../Mutations-type";

    export default {
      state: {
        name: '法外狂徒张三'
      },
      mutations: {
        [UPDATENAME_A](state, payload) {
          state.name = payload;
        }
      },
      getters: {
        getFullName(state) {
          return state.name + '_的'
        },
        getFullNamePlus(state, getters) {
          return getters.getFullName + '_英文名字是: '
        },
        getFullNamePlusRoot(state, getters, rootSate) {
          return getters.getFullNamePlus + rootSate.name;
        }
      },
      actions: {
        A_UpdateName(context) {
          console.log('context_moduleA');
          setTimeout(()=>{
            context.commit(UPDATENAME_A,'李四')
          },1000)
        }
      }
    }
```
2. 在 `store/index.js`中导入 `Module_A`并在module中添加对饮代码绑定
    ```
       modules: {
         a: ModuleA
       }
    ```
3. Vuex底层会把 `a`这个模块解析为根节点下的一个对象,即实际运行中的state如下:
    ```
        state: {
            a:{
                name: '法外狂徒张三'
            },
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
        }
    ```

#### (三)用法
##### state：
```js
const A_Name = $store.state.a.name;
```
> 调用的时候制定下模块即可

##### mutations：
> 不变

##### actions：
> 不变

##### getters：
> 直接调用: 不变
> 作为参数传递: 不变
> 调用根节点的getters:
>> 假设在Module_A的getters中要调用根节点的name属性
>> ```
>>  getFullNamePlusRoot(state, getters, rootSate) {
>>      return getters.getFullNamePlus + rootSate.name;
>>  }
>> ```
>> 即:在参数上传递rootState属性,再用rootState调用根节点的属性即可







