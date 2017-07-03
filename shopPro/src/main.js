// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VRouter from "vue-router";
import VueResource from 'vue-resource'
import Layout from "./components/layout";
import IndexPage from './pages/index'
Vue.use(VRouter)
Vue.use(VueResource)
let router = new VRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]

})
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  template: '<Layout/>',
  components: {Layout}
})

