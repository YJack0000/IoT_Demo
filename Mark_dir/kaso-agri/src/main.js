import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/ja'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang/lang'
import echarts from 'echarts'
// 画像拡大
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import JQuery from 'jquery'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/font.css'
import axios from 'axios'

import fullCalendar from 'vue-fullcalendar'
//import 'fullcalendar/dist/fullcalendar.css'

import 'fullcalendar/dist/fullcalendar.min.css'
import 'moment'
import 'fullcalendar'
import 'fullcalendar/dist/locale/ja.js'

import VueSession from 'vue-session'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.component('full-calendar', fullCalendar)
Vue.prototype.$echarts = echarts
Vue.prototype.$ = JQuery
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(fullscreen)
Vue.use(preview)

Vue.use(VueSession)

Vue.use(VueAwesomeSwiper)

import 'swiper/dist/css/swiper.css'


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
