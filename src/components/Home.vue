<template>
    <div>
    <Mheader :back="false" :set="false">为您推荐</Mheader>
        <div class="content">
            <swiper :options="swiperOption" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in poems">
                    <div class="author">
                        <h2 class="pomeTitle">{{item.poemTitle}}</h2>
                        <span>作者：远方的音符</span>/ <span>发布：博客中国</span>
                        <i>1236 人诵读</i>
                        <button @click="showPoem">&plus;</button>
                        <i>点击+关注本首诗歌的所有诵读内容</i>
                    </div>
                    <div class="img">
                        <img src="../assets/1.jpg" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="author">
                        <h2 class="pomeTitle">秋天我去寻找秦人的足迹</h2>
                        <span>作者：远方的音符</span>/ <span>发布：博客中国</span>
                        <i>1236 人诵读</i>
                        <button>&plus;</button>
                        <i>点击+关注本首诗歌的所有诵读内容</i>
                    </div>
                    <div class="img">
                        <img src="../assets/1.jpg" alt="">
                    </div>
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>
<script>
    import Mheader from '../base/Mheader.vue'
    import getHome from '../api'
    export default {
      name: 'carousel',
      data() {
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay:3500,
            setWrapperSize:true,
            observeParents:true,
          },poems:[]
        }
      },
      created(){
      },
      methods:{
        showPoem(){
          console.log(getHome())
        }
      },
      components:{
        Mheader
      }
    }
</script>
<style scoped lang="less">
    .swiper-container{margin: 0 0.2rem;background: #fff;height: 100%;text-align: center}
    .pomeTitle{font-size: 0.36rem}
    .author{
        padding-top: 1.2rem;
        height: 50%;
        font-size: 0.2rem;
        span{line-height: 5em;color: #999}
        i{display: block;font-style: normal;color: #999}
        button{
            margin: 0.4rem 0 0.2rem;
            width: 2rem;
            line-height: 0.6rem;
            color: #fff;
            background: #000;
            border: none;
            border-radius: 20px;
        }
    }
    .img{
        img{width: 100%}
    }

</style>