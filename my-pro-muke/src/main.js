// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
// import router from './router'
import Apple from './components/apple'
import Banana from './components/banana'
import redApple from  './components/redapple'


Vue.use(VRouter);

Vue.use(Vuex);

let store=new Vuex.Store({ //注意这里是大写
   state:{
     totalPrice:0
   },
  mutations:{
     increment(state,price){
       state.totalPrice+=price
     },
      decrement(state,price){
        state.totalPrice= state.totalPrice<=0?0:state.totalPrice-price
      }
  }
})

let router=new VRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/apple'
    },
    {
      path:'/apple',
      component:Apple,
      children:[
        {
          path:'red',
          component:redApple
        }
      ]
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
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
