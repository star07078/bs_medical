import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css';
import './core/lazy_use'
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth == true) {
//     // 去首页 判断登录
//     // token
//     if (window.localStorage.getItem('token')) {
//       // 存在就放行
//       next()
//     } else {
//       // new一个实例出来
//       // new Vue().$message.error('不想登录就想查看，滚犊子！！！')
//       // router.push('/signin')
//     }
//   } else {
//     // 放过去
//     next()
//   }
// })

Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


export default vm;