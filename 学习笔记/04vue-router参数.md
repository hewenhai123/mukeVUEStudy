## vue-router路由参数

> 参数
```text
 
 - 带参数路由：localhost:8090/apple?type=1&code=10
  type和code就是我们访问页面的参数
  
```

> 前端路由参数

``` js
let router=new VRouter({
   mode:'history',
   routes:[
      {
       path:'/apple/:color',  // 当访问的时候参数会传递给页面
       component:Apple
      },
      {
       path:'/banana/:ok',
       component:Banana
      }
   ]
})

```

> 组件内部获取参数的方法

```js
   //apple.vue
   
   export default{
    data(){
        return{
            msg:'i am apple'
        }
    },
    methods:{
        getParam(){//这有用于获取url参数
            console.log(this.$route.params)
        }
    }
   }

```