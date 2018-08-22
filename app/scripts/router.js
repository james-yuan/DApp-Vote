import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import RankingList from '../components/rankingList.vue'
import CreateApp from '../components/createApp.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

// 构建选项 https://router.vuejs.org/zh/api/#routes
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: RankingList
    },
    {
      path: '/createApp',
      component: CreateApp
    }
  ]
})

export default router
