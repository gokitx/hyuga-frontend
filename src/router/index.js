import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:"/hello",
      name:"hello",
      component:HelloWorld
    },
  ]
})
