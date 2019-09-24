import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'english',
      component: () => import('./views/English.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/privacypolicy',
      name: 'PrivacyPolicy',
      component: () => import('./views/privacypolicy.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('./views/Feedback.vue')
    },
    {
      path: '/french',
      name: 'french',
      component: () => import('./views/French.vue')
    },
    {
      path: '/german',
      name: 'german',
      component: () => import('./views/German.vue')
    },
  ]
})
