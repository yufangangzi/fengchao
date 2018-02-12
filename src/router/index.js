import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Find from '../components/Find.vue'
import Rss from '../components/Ress.vue'
import Declaim from '../components/Declaim.vue'
import My from '../components/My.vue'
import tuijian from '../components/tuijian.vue'
import Langsong from '../components/Langsong.vue'
import Poem from '../components/Poem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},//默认访问home页面
    {path:'*',redirect:'/home'},//随便输入也走home
    {path:'/home',component:Home},
    {path:'/find',component:Find},
    {path:'/declaim',component:Declaim,
      children:[
        {path:'Langsong',component:Langsong},
        {path:'Poem',component:Poem}
      ]
    },
    {path:'/rss',component:Rss},
    {path:'/my',component:My}
  ]
})
