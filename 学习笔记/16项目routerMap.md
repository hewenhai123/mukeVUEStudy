##　项目的routerMap 和视图 view


1. 访问根目录

```

let router = new VRouter({
   mode:'history',
   routes:[
       {
           path:'/',
           component:IndexPage  //首页组件
       }
   ]
})

new Vue({
  el:'#layout', //指向index.html
  router,
  component:<Layout/>, //跟组件，这里面包括了，header，content，footer  
  template:{Layout}
 
})


```

> 有了map就需要视图view，应该向上一级寻找 插入 <router-view></router-view>


