import Vue from 'vue'
import Router from 'vue-router'

// import English from './views/English.vue'
// import About from './views/About.vue'
// import Feedback from './views/Feedback.vue'
// import French from './views/French.vue'
// import German from './views/German.vue'

const English = () => import('./views/English.vue')
const About = () => import('./views/About.vue')
const Feedback = () => import('./views/Feedback.vue')
const French = () => import('./views/French.vue')
const German = () => import('./views/German.vue')

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
    },
    {
      path: '/german',
      name: 'german',
      component: German
    },
  ]
})
