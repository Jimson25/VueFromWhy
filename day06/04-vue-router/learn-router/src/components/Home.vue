<template>
  <div>
    <h2>这是首页</h2>
    <router-link to="/home/message">message</router-link>
    <router-link to="/home/news">news</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news',
      }
    },
    created() {

    },
    //页面处于活跃状态时调用
    activated() {
      console.log(this.path);
      this.$router.push(this.path)
    },
    //页面处于不活跃状态时调用
    deactivated() {
    },
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      console.log(this.path);
      next();
    }
  }
</script>

<style scoped>

</style>
