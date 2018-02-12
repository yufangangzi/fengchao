<template>
    <div>
        <Search></Search>
        <div class="content">
            <template v-if="load">
                <div class="author">
                    <h2 class="pomeTitle">秋天我去寻找秦人的足迹</h2>
                    <span>作者：远方的音符</span>/ <span>发布：博客中国</span>
                    <div class="area">
                        <img src="../assets/1.jpg" alt="">
                        <div><i v-if="true" class="iconfont icon-play_icon"></i><i v-else="false" class="iconfont icon-zanting"></i></div>
                    </div>
                </div>
            </template>
            <router-view v-else></router-view>
        </div>
    </div>
</template>
<script>
    import Search from '../base/Search.vue'
  export default{
    data(){
      return {load:true}
    },
    methods: {},
    computed: {},
    components: {
      Search
    },
    watch:{
      $route(val){
        if(val.path!='/Declaim'){
          this.load=false
        }else{
          this.load=true
        }
      }
    },

  }
</script>
<style scoped lang="less">
    .pomeTitle{font-size: 0.36rem}
    .author{
        padding-top: 0.5rem;
        height: 50%;
        font-size: 0.2rem;
        background: #fff;
        text-align: center;
        span{line-height: 3em;color: #999}
    }
    .area{
        position: relative;
        img{width: 100%};
        div{
            position: absolute;top: 50%;left: 50%; width: 1.2rem;height: 1.2rem;background: rgba(0,0,0,0.5);border-radius: 50%;transform: translate(-50%,-50%);
            display: flex;justify-content: center;align-items: center;
            i{font-size: 1rem;color: #fff}
        }
    }
</style>