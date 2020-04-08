<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name="item-icon"/>
    </div>
    <div v-else>
      <slot name="item-active-icon"/>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"/>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: {
        type: String,
        require: true
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1;
      },
      activeStyle() {
        return this.isActive ? {'color': this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        console.log(this.link);
        this.$router.push(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }

  /*.active {*/
  /*  color: red;*/
  /*}*/
</style>
