<template>
    <div>
        <Mheader :back="false" :set="true"></Mheader>
        <div class="content">
            <div class="person">
                <img src="../assets/1.jpg" alt="">
                <p>
                    徐志摩（1897年1月15日—1931年11月19日），浙江海宁硖石人，现代诗人、散文家。原名章垿，字槱森，留学英国时改名志摩。曾经用过的笔名：南湖、诗哲、海谷、谷、大兵、云中鹤、仙鹤、删我、心手、黄狗、谔谔等。徐志摩是新月派代表诗人，新月诗社成员 。</p>
                <button>我要写诗</button>
            </div>
            <div  class="list">
                <List link="/home" dir="消息通知" :news="true"></List>
            </div>
            <div  class="list">
                <List link="/home" dir="我的朗诵"></List>
                <List link="/home" dir="我的诗歌"></List>
                <List link="/home" dir="草稿箱"></List>
            </div>
            <div  class="list">
                <List link="/home" dir="我的订阅"></List>
                <List link="/home" dir="我的收藏"></List>
            </div>
        </div>
    </div>
</template>
<script>
  import Mheader from '../base/Mheader.vue'
  import List from '../base/List.vue'
  export default{
    data(){
      return {}
    },
    methods: {},
    computed: {},
    components: {
      Mheader, List
    }
  }
</script>
<style scoped lang="less">
    .person {
        margin-top: -0.2rem;
        font-size: 0.2rem;
        text-align: center;
        background: #fff;
        img {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            margin: 0 auto;
            display: block;
        }
        p {
            line-height: 1.5em;
            color: #555;
            padding: 0.2rem 0.3rem;
            max-height: 7em;
            overflow: hidden
        }
        button {
            margin: 0.3rem 0 0.4rem;
            width: 2rem;
            line-height: 0.6rem;
            color: #fff;
            background: #000;
            border: none;
            border-radius: 20px;
        }
    }

    .list {
        margin: 0.15rem 0;
        div{
            background: #fff;
            font-size: 0.28rem;
        }
    }


</style>