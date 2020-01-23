import Vue from 'vue'
import Wear from './WearApp.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Wear)
}).$mount('#app')
