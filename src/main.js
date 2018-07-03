import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Select, Input, DatePicker, TimePicker } from 'element-ui';
import lang from './helpers/es'
import locale from 'element-ui/lib/locale'

import 'element-ui/lib/theme-chalk/index.css';

locale.use(lang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(TimePicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
