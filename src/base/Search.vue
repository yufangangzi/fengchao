<template>
    <div class="search">
        <div>
        <router-link  to="/Declaim/Langsong">朗诵</router-link>|
        <router-link  to="/Declaim/Poem">诗歌</router-link>
        </div>
        <input type="text" placeholder="搜索朗诵、诗歌、感兴趣的人">
        <button class="iconfont icon-fangdajing"></button>
    </div>
</template>
<script>
  export default{
    data(){
      return {
      }
    },

    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    .search{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        background: #fff;
        color: #333;
        height: 8vh;
        line-height: 8vh;
        font-size: 0.3rem;
        padding: 0 0.3rem;
        display: flex;
        justify-content: space-between;
        a{
            margin-right: 0.15rem;
            color: #555;
        }
        a.router-link-active{
            color: #00aba9;
        }
        input{min-width: 15em;padding: 0 0.2rem;}
        input,button{    border: none;outline: none;background: transparent}
    }
    .search:after{
        position: absolute;
        content: '';
        height: 1px;
        background: #f1f1f1;
        right: 0.3rem;
        left: 0.3rem;
        bottom: 0.15rem;
    }
</style>