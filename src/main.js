import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'
import toasted from 'vue-toasted'
Vue.config.productionTip = false


Vue.use(vuelidate)
Vue.use(toasted)

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')
