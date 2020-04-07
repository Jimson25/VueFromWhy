<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+ userId">我的</router-link>
    <!--    <router-link :to="{path:'/profile',query:{-->
    <!--      name:'张三',age:'18'-->
    <!--    }}">档案-->
    <!--    </router-link>-->
    <router-link :to="{path:'/profile',query:userMsg}">档案</router-link>
    <!--  路由代码跳转  -->
    <!--    <button @click="routerLinkHome">这也是首页</button>-->
    <hr>
    <keep-alive exclude="profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan',
        userMsg: {
          name: '张三',
          age: 18,
          addr: '北京'
        }
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
