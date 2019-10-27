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
    {
      path: '/acholi',
      name: 'acholi',
      component: () => import('./views/languages/Acholi.vue')
    },
    {
      path: '/akan',
      name: 'akan',
      component: () => import('./views/languages/Akan.vue')
    },
    {
      path: '/albanian',
      name: 'albanian',
      component: () => import('./views/languages/Albanian.vue')
    },
    {
      path: '/alur',
      name: 'alur',
      component: () => import('./views/languages/Alur.vue')
    },
    {
      path: '/amharic',
      name: 'amharic',
      component: () => import('./views/languages/Amharic.vue')
    },
    {
      path: '/aragonese',
      name: 'aragonese',
      component: () => import('./views/languages/Aragonese.vue')
    },
    {
      path: '/armenian',
      name: 'armenian',
      component: () => import('./views/languages/Armenian.vue')
    },
    {
      path: '/assamese',
      name: 'assamese',
      component: () => import('./views/languages/Assamese.vue')
    },
    {
      path: '/azerbaijani',
      name: 'azerbaijani',
      component: () => import('./views/languages/Azerbaijani.vue')
    },
    {
      path: '/bengali',
      name: 'bengali',
      component: () => import('./views/languages/Bengali.vue')
    },
    {
      path: '/breton',
      name: 'breton',
      component: () => import('./views/languages/Breton.vue')
    },
    {
      path: '/emilian',
      name: 'emilian',
      component: () => import('./views/languages/Emilian.vue')
    },
    {
      path: '/esperanto',
      name: 'esperanto',
      component: () => import('./views/languages/Esperanto.vue')
    },

    {
      path: '/estonian',
      name: 'estonian',
      component: () => import('./views/languages/Estonian.vue')
    },
    {
      path: '/frisian',
      name: 'frisian',
      component: () => import('./views/languages/Frisian.vue')
    },
    {
      path: '/fulah',
      name: 'fulah',
      component: () => import('./views/languages/Fulah.vue')
    },
    {
      path: '/ga',
      name: 'ga',
      component: () => import('./views/languages/Ga.vue')
    },
    {
      path: '/galician',
      name: 'galician',
      component: () => import('./views/languages/Galician.vue')
    },
    {
      path: '/ganda',
      name: 'ganda',
      component: () => import('./views/languages/Ganda.vue')
    },
    {
      path: '/guarani',
      name: 'guarani',
      component: () => import('./views/languages/Guarani.vue')
    },
    {
      path: '/gujarati',
      name: 'gujarati',
      component: () => import('./views/languages/Gujarati.vue')
    },
    {
      path: '/hausa',
      name: 'hausa',
      component: () => import('./views/languages/Hausa.vue')
    },
    {
      path: '/hawaiian',
      name: 'hawaiian',
      component: () => import('./views/languages/Hawaiian.vue')
    },
    {
      path: '/ibanag',
      name: 'ibanag',
      component: () => import('./views/languages/Ibanag.vue')
    },
    {
      path: '/icelandic',
      name: 'icelandic',
      component: () => import('./views/languages/Icelandic.vue')
    },
    {
      path: '/igbo',
      name: 'igbo',
      component: () => import('./views/languages/Igbo.vue')
    },

    {
      path: '/javanese',
      name: 'javanese',
      component: () => import('./views/languages/Javanese.vue')
    },
    {
      path: '/kannada',
      name: 'kannada',
      component: () => import('./views/languages/Kannada.vue')
    },
    {
      path: '/kikuyu',
      name: 'kikuyu',
      component: () => import('./views/languages/Kikuyu.vue')
    },
    {
      path: '/kurdish',
      name: 'kurdish',
      component: () => import('./views/languages/Kurdish.vue')
    },
    {
      path: '/latvian',
      name: 'latvian',
      component: () => import('./views/languages/Latvian.vue')
    },
    {
      path: '/letzeburgesch',
      name: 'letzeburgesch',
      component: () => import('./views/languages/Letzeburgesch.vue')
    },
    {
      path: '/lithuanian',
      name: 'lithuanian',
      component: () => import('./views/languages/Lithuanian.vue')
    },

    {
      path: '/loglan',
      name: 'loglan',
      component: () => import('./views/languages/Loglan.vue')
    },
    {
      path: '/lombard',
      name: 'lombard',
      component: () => import('./views/languages/Lombard.vue')
    },
    {
      path: '/luo',
      name: 'luo',
      component: () => import('./views/languages/Luo.vue')
    },
    {
      path: '/madurese',
      name: 'madurese',
      component: () => import('./views/languages/Madurese.vue')
    },
    {
      path: '/malay',
      name: 'malay',
      component: () => import('./views/languages/Malay.vue')
    },
    {
      path: '/malayalam',
      name: 'malayalam',
      component: () => import('./views/languages/Malayalam.vue')
    },
    {
      path: '/maltese',
      name: 'maltese',
      component: () => import('./views/languages/Maltese.vue')
    },
    {
      path: '/maori',
      name: 'maori',
      component: () => import('./views/languages/Maori.vue')
    },
    {
      path: '/marathi',
      name: 'marathi',
      component: () => import('./views/languages/Marathi.vue')
    },
    {
      path: '/mizo',
      name: 'mizo',
      component: () => import('./views/languages/Mizo.vue')
    },
    {
      path: '/mongolian',
      name: 'mongolian',
      component: () => import('./views/languages/Mongolian.vue')
    },
    {
      path: '/occitan',
      name: 'occitan',
      component: () => import('./views/languages/Occitan.vue')
    },
    {
      path: '/panjabi',
      name: 'panjabi',
      component: () => import('./views/languages/Panjabi.vue')
    },
    {
      path: '/pashto',
      name: 'pashto',
      component: () => import('./views/languages/Pashto.vue')
    },
    {
      path: '/persian',
      name: 'persian',
      component: () => import('./views/languages/Persian.vue')
    },
    {
      path: '/rhaeto',
      name: 'rhaeto',
      component: () => import('./views/languages/Rhaeto.vue')
    },
    {
      path: '/romanian',
      name: 'romanian',
      component: () => import('./views/languages/Romanian.vue')
    },
    {
      path: '/rwanda',
      name: 'rwanda',
      component: () => import('./views/languages/Rwanda.vue')
    },
    {
      path: '/sardinian',
      name: 'sardinian',
      component: () => import('./views/languages/Sardinian.vue')
    },
    {
      path: '/scots',
      name: 'scots',
      component: () => import('./views/languages/Scots.vue')
    },
    {
      path: '/scottish',
      name: 'scottish',
      component: () => import('./views/languages/Scottish.vue')
    },
    {
      path: '/shona',
      name: 'shona',
      component: () => import('./views/languages/Shona.vue')
    },
    {
      path: '/sicilian',
      name: 'sicilian',
      component: () => import('./views/languages/Sicilian.vue')
    },

    {
      path: '/slovenian',
      name: 'slovenian',
      component: () => import('./views/languages/Slovenian.vue')
    },
    {
      path: '/soga',
      name: 'soga',
      component: () => import('./views/languages/Soga.vue')
    },
    {
      path: '/somali',
      name: 'somali',
      component: () => import('./views/languages/Somali.vue')
    },
    {
      path: '/sukuma',
      name: 'sukuma',
      component: () => import('./views/languages/Sukuma.vue')
    },
    {
      path: '/swahili',
      name: 'swahili',
      component: () => import('./views/languages/Swahili.vue')
    },
    {
      path: '/telugu',
      name: 'telugu',
      component: () => import('./views/languages/Telugu.vue')
    },
    {
      path: '/thai',
      name: 'thai',
      component: () => import('./views/languages/Thai.vue')
    },
    {
      path: '/tibetan',
      name: 'tibetan',
      component: () => import('./views/languages/Tibetan.vue')
    },
    {
      path: '/visayan',
      name: 'visayan',
      component: () => import('./views/languages/Visayan.vue')
    },
    {
      path: '/welsh',
      name: 'welsh',
      component: () => import('./views/languages/Welsh.vue')
    },
    {
      path: '/wolof',
      name: 'wolof',
      component: () => import('./views/languages/Wolof.vue')
    },
    {
      path: '/xhosa',
      name: 'xhosa',
      component: () => import('./views/languages/Xhosa.vue')
    },
    {
      path: '/yiddish',
      name: 'yiddish',
      component: () => import('./views/languages/Yiddish.vue')
    },
    {
      path: '/yoruba',
      name: 'yoruba',
      component: () => import('./views/languages/Yoruba.vue')
    },
    {
      path: '/zulu',
      name: 'zulu',
      component: () => import('./views/languages/Zulu.vue')
    },
  ]
})