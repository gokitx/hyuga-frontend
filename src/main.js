// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/store";
import vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/aui.scss';
Vue.use(ElementUI);
Vue.use(vuex);
Vue.config.productionTip = false
import {WOW} from 'wowjs'
import '../node_modules/wowjs/css/libs/animate.css'
Vue.prototype.$wow=WOW;

// var store = new vuex.Store({//store对象
//   state:{
//       count:"main.js文件声明的state",
//       num:1,
//       count: 12
//   },
//   mutations: {
//     increment (state,payload) {
//       // state.count++
//       console.log(state.num+=payload.amount)
//     }
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
