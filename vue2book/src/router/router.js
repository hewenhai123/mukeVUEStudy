import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../Home"
import Explorer from "../Explorer"
import Cart from "../Cart"
import Me from "../Me"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {name:'Home',path: '/home', component: Home},
    {name:'Explorer',path: '/explorer', component: Explorer},
    {name:'Cart',path: '/cart', component: Cart},
    {name:'Me',path: '/me', component: Me}
  ]
})
