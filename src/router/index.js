import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/index.vue'),
    redirect: '/main/user',
    children: [
      {
        path: 'user',
        name: 'mainUser',
        component: () => import('../views/user/User.vue')
      },
      {
        path: 'echarts',
        name: 'mainEcharts',
        component: () => import('../views/echarts/Echarts.vue')
      },
      {
        path: 'account',
        name: 'mainAccount',
        component: () => import('../views/account/Account.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
