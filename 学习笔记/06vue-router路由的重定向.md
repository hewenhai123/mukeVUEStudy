## vue路由的重定向

> 重定向

```js

import Vue from 'vue'
import VRouter from 'vue-router'
import App from 'app'
import Apple from './components/apple'

Vue.use(VRouter)

let router=new VRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/apple'
             /*在这里使用了路由的重定向功能，当访问根目录的时候回自动重定向
              * 到apple路由
              */
        },
        {
            path:'/apple',
            component:Apple
        }
    ]
});

new Vue({
   el:'#app',
   router,
   component:'</App>',
   template:{app}
})





```