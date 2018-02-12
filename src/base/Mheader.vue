<template>
    <div class="header">
        <slot></slot>
        <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
        <i class="iconfont icon-setting" v-if="set" @click="goSet"></i>
    </div>
</template>
<script>
  export default{
    props:{
      back:{
        type:Boolean,
        default:false
      },
      set:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {}
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      goSet(){
        alert('跳转页面')
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    .header{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        background: #fff;
        color: #333;
        height: 8vh;
        line-height: 8vh;
        font-size: 0.36rem;
        text-align: center;
        font-weight: bold;

    i{
        position: absolute;
        left:20px;
        font-size: 20px;
    }
    }
</style>