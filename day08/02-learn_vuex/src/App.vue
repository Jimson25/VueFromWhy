<template>
  <div id="app">
    <h2>----------App内容: modules中的内容----------</h2>
    <h2>ModuleA_Name : {{$store.state.a.name}}</h2>
    <button @click="updateNameForA()">修改A模块name</button>
    <h2>fullName : {{$store.getters.getFullName}}</h2>
    <h2>fullNamePlus : {{$store.getters.getFullNamePlus}}</h2>
    <h2>fullNamePlusEnglish : {{$store.getters.getFullNamePlusRoot}}</h2>
    <button @click="asyncUpdateName()">修改名字_A</button>



    <h2>----------App内容----------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="addition()">+</button>
    <button @click="subtraction()">-</button>
    <button @click="additionCount(5)">+5</button>
    <button @click="additionStudent">添加学生</button>
    <button @click="updateInfo()">修改信息</button>
    <hr>


    <h2>------ App-vuex ------</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.getAdult}}</h2>
    <h2>{{$store.getters.getAdultStudent}}</h2>
    <h2>{{$store.getters.getAdultStudentCount}}</h2>
    <h2>{{$store.getters.getMoreAge(18)}}</h2>

    <hr>


    <h2>------hello-vuex------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {
    INCREMENT, DECREMENT, INCREMENTCOUNT, ADDSTUDENT, UPDATEINFO,UPDATENAME_A
  } from './store/Mutations-type'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: 'app组件',
      }
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit(DECREMENT)
      },
      additionCount(count) {
        this.$store.commit(INCREMENTCOUNT, count)
      },
      additionStudent() {
        const stu = {id: 114, name: '张三', age: 25}
        this.$store.commit(ADDSTUDENT, stu)
      },
      updateInfo() {
        // this.$store.commit(UPDATEINFO);
        this.$store.dispatch("updateInfoInAction", '这是我传递的参数').then(res => {
          console.log('---这里是回调函数的打印信息---');
          console.log(res);
        })
      },
      updateNameForA(){
        this.$store.commit(UPDATENAME_A,'李四')
      },
      asyncUpdateName(){
        this.$store.dispatch('A_UpdateName')
      }
    }
  }
</script>

<style>

</style>
