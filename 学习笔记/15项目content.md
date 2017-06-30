## 项目中间部分处理

> 通过使用router-view 来处理content部分
 ```
 <div class='content'>
   <keep-alive>
      <router-view></router-view> 
   </keep-alive>
 </div>
```

> keep-alive 组件缓存,缓存组件，下次访问的时候回直接从缓存中渲染，而不是重新渲染


1. 安装vue-router

`` npm install vue-router --save``

2. main.js 引入router

`` import VRouter from ' vue-router' ``

3. main.js 使用vue-router

`` Vue.use(VRouter)``

4. 实例化路由

```js
   let router=new VRouter({
      mode:'history'
   })

```

5. main.js根组件引入

 ```
  new Vue({
    el:'#app',
    router,
    components:<Layout/>,
    template:{Layout}
  })

```





