import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Main.vue'
import Home from '../page/Home.vue'
import Explorer from '../page/Explorer.vue'
import Cart from '../page/Cart.vue'
import Me from  '../page/Me.vue'

import BookDetails from '../page/BookDetails.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  base:__dirname,
  linkActiveClass:'active',
  routes:[
    {name:'Main',
      path:'/',
      component:Main,
      children:[
        {name:'Home',path:'home',component:Home},
        {name:'Explorer',path:'explorer',component:Explorer},
        {name:'Cart',path:'cart',component:Cart},
        {name:'Me',path:'me',component:Me}
      ]
    },
    {name:'BookDetail',path:'/books/:id',component:BookDetails}
  ]
})
