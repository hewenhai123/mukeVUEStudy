// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
// import router from './router'
import Apple from './components/apple'
import Banana from './components/banana'


Vue.use(VRouter);
let router=new VRouter({
  mode:'history',
  routes:[
    {
      path:'/apple',
      component:Apple
    },
    {
      path:'/apple/:color',
      component:Apple
    },
    {
      path:'/banana',
      component:Banana
    }
  ]
});
// Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  mode:'history',
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
