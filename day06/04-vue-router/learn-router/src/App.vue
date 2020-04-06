<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+ userId">我的</router-link>
    <!--  路由代码跳转  -->
    <!--    <button @click="routerLinkHome">这也是首页</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan',
      }
    },
    methods: {
      routerLinkHome() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style>
  /*.isActive {*/
  /*  color: red;*/
  /*  background-color: black;*/
  /*}*/
</style>
