import Vue from 'vue'
import Layout from './views/Layout/index.vue';
import router from './router/index';
import store from './store/index';
import iView from 'iview';
Vue.use(iView);
import 'iview/dist/styles/iview.css';
import '@/assets/icomoon/style.css';
import Highlight from '@/components/Hightlight.js'
Vue.use(Highlight)
import i18n from '@/locale'
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.prototype.$config = {
  
}
new Vue({
  router,
  store,
  i18n,
  render: h => h(Layout)
}).$mount('#app')
