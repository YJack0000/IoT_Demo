
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './i18n/en.json'
import cn from './i18n/cn.json'
import jp from './i18n/jp.json'

Vue.use(VueI18n)

const locale = 'jp'

const messages = {
   'jp' : jp,
   'en' : en,
   'cn' : cn
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n

