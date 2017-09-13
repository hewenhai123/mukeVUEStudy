import Vue from 'vue'
import App from './App'
import router from './router/router'


Vue.config.productionTip=false

require('./assets/font/css/ionicons.css')
require('./assets/js/index.js')

new Vue({
  el:'#app',
  router,
  template:'<App/>',
  components:{App}
})
