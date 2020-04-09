<template>
  <div id="app">
    <button @click="init()">nnn</button>
  </div>
</template>

<script>
  import {getName} from './api/api'
  export default {
    name: 'App',
    methods:{
      init(){
        getName(10,8).then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style>

</style>
