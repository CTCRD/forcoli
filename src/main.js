import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Select, Option, Input, DatePicker, TimePicker, Checkbox, InputNumber, CheckboxGroup } from 'element-ui';
import lang from './helpers/es'
import locale from 'element-ui/lib/locale'

import '@/assets/element-variables.scss'

locale.use(lang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(DatePicker)
Vue.use(TimePicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
