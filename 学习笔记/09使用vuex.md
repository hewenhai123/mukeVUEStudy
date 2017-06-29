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
      getters：{
         getTotal(state){
         return state.totalPrice
         
         }
      },
      mutations:{ //控制数据中心 ，动作
       fn1(state,price){
        state.totalPrice+=price
       },
       fn2(state,price){
        state.totalPrice-=price
       }    
     },
     actions:{
        increment( conrtext,price){
           context.commit('increment',price)        
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
* actions:(异步) 执行在mutations之前的动作，只能调用mutations不能直接更改state，
           actions有两个参数，context：当前的store，通过store.commit调用mutations
           
* getters：用来获取状态集里的数据

           
 > mutations  和 actions 的区别
  
  * actions ：
     可以在actions里面执行异步的操作，然后再去触发mutations，跟后端的API接口都是必须放在actions里面
  * mutations ：
      必须是同步的操作数据方式      
           
> 模板调用 

 * actions
```
  export default{
    name:'apple',
    data(){
     return{
      price:5
     }
    },
    methods:{
      addOne(){
       this.$store.dispatch('increment',this.price)
      }
    
    }
  }
  
```

* mutations

```
  export default{
    name:'apple',
    dadta(){
      return{
        price:15
      }
     },
     methods:{
       addOne(){
         this.$store.commit('increment',this.price)
       }
     }
  }
```

* getters
```
export default{
  name:'apple',
  data(){
    return {
     price:16
    }
  },
  methods:{
     addOne(){
       return this.$store.getters.getTotal
     }
  
  }
 
}


```

* moudules

```
 可以把状态集分成模型，每一个模型都有自己的mutations，actions，getters等，最后所有的状态集都合成到一个接口
 
 
 例如：cart \user  可以放在不同状态集中，

```

