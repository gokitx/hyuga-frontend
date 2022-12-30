import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import Login from '../components/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path: '/register',
      component: () =>
          import ('@/components/page/register'),
      name: 'register',
  }, 
  {
    path: '/forget',
    component: () =>
        import ('@/components/page/forgetPwd'),
    name: 'forget',
}, 
  ]
})
