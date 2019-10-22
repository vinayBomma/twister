import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'english',
      component: () => import('./views/languages/English.vue')
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
      component: () => import('./views/languages/French.vue')
    },
    {
      path: '/german',
      name: 'german',
      component: () => import('./views/languages/German.vue')
    },
    {
      path: '/spanish',
      name: 'spanish',
      component: () => import('./views/languages/Spanish.vue')
    },
    {
      path: '/dutch',
      name: 'dutch',
      component: () => import('./views/languages/Dutch.vue')
    },
    {
      path: '/portuguese',
      name: 'portuguese',
      component: () => import('./views/languages/Portuguese.vue')
    },
    {
      path: '/italian',
      name: 'italian',
      component: () => import('./views/languages/Italian.vue')
    },
    {
      path: '/finnish',
      name: 'finnish',
      component: () => import('./views/languages/Finnish.vue')
    },
    {
      path: '/catalan',
      name: 'catalan',
      component: () => import('./views/languages/Catalan.vue')
    },
    {
      path: '/czech',
      name: 'czech',
      component: () => import('./views/languages/Czech.vue')
    },
    {
      path: '/norwegian',
      name: 'norwegian',
      component: () => import('./views/languages/Norwegian.vue')
    },
    {
      path: '/hungarian',
      name: 'hungarian',
      component: () => import('./views/languages/Hungarian.vue')
    },
    {
      path: '/uzbek',
      name: 'uzbek',
      component: () => import('./views/languages/Uzbek.vue')
    },
    {
      path: '/afrikaans',
      name: 'afrikaans',
      component: () => import('./views/languages/Afrikaans.vue')
    },
    {
      path: '/arabic',
      name: 'arabic',
      component: () => import('./views/languages/Arabic.vue')
    },
    {
      path: '/basque',
      name: 'basque',
      component: () => import('./views/languages/Basque.vue')
    },
    {
      path: '/croatian',
      name: 'croatian',
      component: () => import('./views/languages/Croatian.vue')
    },
    {
      path: '/danish',
      name: 'danish',
      component: () => import('./views/languages/Danish.vue')
    },
    {
      path: '/hebrew',
      name: 'hebrew',
      component: () => import('./views/languages/Hebrew.vue')
    },

    {
      path: '/hindi',
      name: 'hindi',
      component: () => import('./views/languages/Hindi.vue')
    },
    {
      path: '/indonesian',
      name: 'indonesian',
      component: () => import('./views/languages/Indonesian.vue')
    },

    {
      path: '/irish',
      name: 'irish',
      component: () => import('./views/languages/Irish.vue')
    },
    {
      path: '/japanese',
      name: 'japanese',
      component: () => import('./views/languages/Japanese.vue')
    },
    {
      path: '/jersey',
      name: 'jersey',
      component: () => import('./views/languages/Jersey.vue')
    },

    {
      path: '/latin',
      name: 'latin',
      component: () => import('./views/languages/Latin.vue')
    },
    {
      path: '/polish',
      name: 'polish',
      component: () => import('./views/languages/Polish.vue')
    },
    {
      path: '/slovak',
      name: 'slovak',
      component: () => import('./views/languages/Slovak.vue')
    },

    {
      path: '/swedish',
      name: 'swedish',
      component: () => import('./views/languages/Swedish.vue')
    },
    {
      path: '/tagalog',
      name: 'tagalog',
      component: () => import('./views/languages/Tagalog.vue')
    },
    {
      path: '/tamil',
      name: 'tamil',
      component: () => import('./views/languages/Tamil.vue')
    },
    {
      path: '/turkish',
      name: 'turkish',
      component: () => import('./views/languages/Turkish.vue')
    },
    {
      path: '/urdu',
      name: 'urdu',
      component: () => import('./views/languages/Urdu.vue')
    },
  ]
})
