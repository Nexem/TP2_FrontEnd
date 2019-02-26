import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false
// sd
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App)
}).$mount('#app')
