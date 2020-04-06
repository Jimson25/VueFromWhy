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
    name: "Home"
  }
</script>

<style scoped>

</style>
