<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue';
  export default {
    name: 'App',
    components:{
      Tab
    }
  }
</script>

<style>
  *{margin: 0;padding: 0;list-style: none;    box-sizing: border-box;font-family: "Helvetica Neue", Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif}
  a{text-decoration: none}
  input,button{ -webkit-appearance: none;}
  .content{position: fixed;top:8vh;left: 0;bottom:8vh;overflow:auto;width: 100%;padding: 0.2rem 0;background: #F7F8FC;}
</style>
