<template>
    <div class="footer">
        <router-link to="/home"><i class="iconfont icon-jingxuan"></i><span>精选</span></router-link>
        <router-link to="/Find"><i class="iconfont icon-faxian"></i><span>发现</span></router-link>
        <router-link to="/Declaim" class="declaim"><div><i class="iconfont icon-maikefeng-tianchong"></i><span></span></div></router-link>
        <router-link to="/Rss"><i class="iconfont icon-haofangtuo400iconfontxinpandingyue"></i><span>订阅</span></router-link>
        <router-link to="/My"> <i class="iconfont icon-wode"></i><span>我的</span></router-link>
    </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    .footer{
        position: fixed;
        left:0;
        bottom: 0;
        width: 100%;
        height: 8vh;
        display: flex;
        box-shadow: 0px 0px 9px rgba(0,0,0,0.15);
        a{
            font-size: 0.14rem;
            display: flex;
            flex-direction: column;
            flex: 1;
            color:#00aba9;
            justify-content: center;
            align-items: center;
        }
        a.router-link-active{
            color: #f0a30a;
        }
        a.declaim{
            position: relative;
            div{
                position: absolute;
                width: 18vw;
                height: 18vw;
                border-radius: 50%;
                background: #000;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                top: -4vw;
                border: 0.2rem solid #fff;
                box-shadow: 0px -7px 10px rgba(0,0,0,0.3);
            }
            i.iconfont{
                font-size: 0.3rem;
            }
            i{
                font-size: 0.5rem;
            }
        }
    }
</style>