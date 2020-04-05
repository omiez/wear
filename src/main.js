import Vue from 'vue'
import Wear from './WearApp.vue'
import router from './router'
import VueGtag from "vue-gtag"

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_GA_MEASUREMENT_ID }
});

new Vue({
  router,
  render: h => h(Wear)
}).$mount('#app')
