## 嵌套路由

> 嵌套路由就是子路由

* 子路由组件只会渲染到父路由组件中，在父路由组件中需要插入<router-view></router-view>视图标签用来选择插入的地方

``` js

import Vue from 'vue'
import Vrouter from 'vue-router'
import RedApple from './components/redapple'
Vue.use(Vrouter)
let router=new Vrouter({
     mode:'history',
     routes:[
         {
            path:'/apple',
            component:'Apple',
            children:[  //子组件只渲染到自己父组件的位置
               {
                  path：'red',
                  component:ReApple
               }
            ]
        }
     ]
})

new Vue({
  el:'#app',
  router,
  template:<App/>,
  component:{App}
})

```