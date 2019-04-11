import Vue from 'vue'
import VueI18n from 'vue-i18n'
import utils from '@/common/utils'
import customZhCn from './lang/zh-CN'
import customEnUs from './lang/en-US'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = localLang || utils.getStorage('LANG') || 'zh-CN'
Vue.config.lang = lang

const i18n = new VueI18n({
  locale: lang,    // 语言标识
  messages:{
    'zh-CN': customZhCn,
    'en-US': customEnUs
}
})
export default i18n


