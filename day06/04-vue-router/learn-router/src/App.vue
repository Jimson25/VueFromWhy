<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!--  路由代码跳转  -->
    <button @click="routerLinkHome">这也是首页</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      routerLinkHome() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style>
  .isActive {
    color: red;
    background-color: black;
  }
</style>
