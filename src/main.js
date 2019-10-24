import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuewheel from 'vuewheel'

// Vue.use(vuewheel)

Vue.use(VueAxios, axios, vuewheel)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
