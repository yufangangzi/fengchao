// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
//使用轮播图组件
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
