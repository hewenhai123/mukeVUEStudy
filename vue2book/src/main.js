import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

require('./assets/font/css/ionicons.min.css')
require('./assets/js/index.js')
new Vue({
  el:'#app',
  router,
  template:'<App/>',
  components:{App}
})
