<template>
  <div>
    <h2>这是档案组件</h2>
    <h3>Name:{{this.$route.query.name}}</h3>
    <h3>Age:{{this.$route.query.age}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
