import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Explorer from '../page/Explorer.vue'
import Cart from '../page/Cart.vue'
import Me from  '../page/Me.vue'

import BookDetails from '../page/BookDetails.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {name:'Home',path:'/home',component:Home},
    {name:'Explorer',path:'/explorer',component:Explorer},
    {name:'Cart',path:'/Cart',component:Cart},
    {name:'Me',path:'/Me',component:Me},
    {name:'BookDetail',path:'/books',component:BookDetails}
  ]
})
