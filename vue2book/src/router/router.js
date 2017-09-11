/**
 * Created by User on 2017/9/11.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home'
import Explorer from '../Explorer'
import Cart from '../Cart'
import Me from '../Me'

Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/home',component:Home},
    {path:'/explorer',component:Explorer},
    {path:'/cart',component:Cart},
    {path:'/me',component:Me}
  ]
})



