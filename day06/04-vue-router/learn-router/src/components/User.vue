<template>
  <div>
    <h2>这是user页面</h2>
    <h2>UserId: {{$route.params.userId}} </h2>
    <h2>UserId: {{userId}} </h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userId;
      }
    }
  }
</script>

<style scoped>

</style>
