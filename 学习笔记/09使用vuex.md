## vuex 使用

> 安装

1. 安装
```
 npm isntall vuex --save

```

2. 入口文件引入vuex

```js
import Vue from 'vue'
import Vuex from 'vuex'


```

3. 注册vuex

```js
Vue.use(Vuex)

```

4. 实例化vuex
 
 ```
 let store=new Vuex.Store({ //注意这里是大写Store
      state:{ //数据中心
        totalPrice:0
      },
      mutations:{ //控制数据中心 ，动作
       fn1(state,price){
        state.totalPrice+=price
       },
       fn2(state,price){
        state.totalPrice-=price
       }    
     }
 })
```

5. 实例化之后再全局使用store

```js
    new Vue({
      el:'#app',
      router,
      store,
      component:'<App/>',
      template:{App}
    })

```





* state： 数据中心
* mutations:  控制数据，里面有的fn都有两个参数，state  、 price 获取的参数
* actions: 执行在mutations之前




