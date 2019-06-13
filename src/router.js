import Vue from 'vue'
import Router from 'vue-router'

import English from './views/English.vue'
import About from './views/About.vue'
import Feedback from './views/Feedback.vue'
import French from './views/French.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'english',
      component: English
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/french',
      name: 'french',
      component: French
    }
  ]
})
