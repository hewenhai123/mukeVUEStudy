## vue-router

> 什么是路由

 - 路由就是根据不同的地址跳到不同的页面
 - 通过js来控制，只需要加载需要的资源即可
 
 
> 单页面应用

 - 视觉上感觉页面是在切换，但是实际上页面并没有刷新，url地址也会变化，
 
 > 服务端路由
 
 - 会把所有的资源全部重新加载
 
 ## 设置路由
  
   1. 安装路由
 ` npm install vie-reoutet --save`
    
   2. 在入口文件里引入vue-router
   
   ` import router from "vue-router" `
    
   3. 注册使用vue-router
   
   `` Vue.use(VRouter)``
 

** 注意:三个要素，关键点**
   
   1. 一定要有一份map，映射关系，什么样的地址跳转到什么样的页面上
   ``` js
   import VRouter from 'vue-router'
   import Apple from './components/apple'
   Vue.use(VRouter);
   let router=new Vrouter({ //在这里设置路由map
      routes:[ //注意这里不是routers
          {
              path:'/apple',
              component:Apple  //这里也不是components
          }
      ]
   });
   
   //根组件使用router
   new Vue({
    el:'#app',
    router,
    template:'<app/>',
    components:{app}
   })

   ```
   
   
   2. <router-view></router-view>
   
   
   *  命名视图
   
        可以给<router-view name="appl"></router-view>  name属性，
        实现多个router-view 根据不同的那么现实组件
   
   ``` js

   <template>
      <div id="app">
          <router-view name="viewA"></router-view>
          <router-view name="viewB"></router-view>
      </div>
   </template>
     
   <script>
       import Vue from 'vue'
       import VRouter from 'vue-router'
       import applePage from './components/applePage'
       import bananaPage from './components/bananaPage'
       
       Vue.use(VRouter)
       let router=new VRouter({
             mode:'hiustory',
             routes:[
               {
                 path:'apple',
                 component:{
                     viewA:applePage,
                     viewB:bananaPage
                   }
               }
             ]
      })
   
   </script>  

  ```

   
   3. 页面中的<router-linik>跳转
   ```apple html5
   <template>
      <div id="app">
        <img src="./assets/logo.png">
        <router-view></router-view>
        <router-link :to="{path:'apple'}">to apple</router-link>
        <router-link :to="{path:'banana'}">to banana</router-link>
        <router-link to="apple/red">to apple red </router-link> //如图a标签的href
        <router-link :to="{path:'apple/red'}" tag=""></router-link>
       </div>
   </template>
  
```

   4. 传递参数
   

      <router-link :to="{path:'apple/red',param:{color:'yellow'}}"></router-link>
 
     
   5. 具名路由
   
   * 具名路由需要在设定路由的时候给路由一个名字
   ```
      <router-link :to="{name:'applPage'}">to appPage</router-link>
   ```
   
   6. 修改默认的标签
    
   * router-link 默认是a标签，如果需要将它改变，只需要使用tag属性指定标签名即可   
    
```

 <router-link  :to={path:'apple/red'} tag="li"> to apple</router-link>
 
 
```



> 哈希

   ```
   http://localhost:8090/#/banana
     中间的#号，是vue来处理html5路由的一个方式，没有使用html5 history的功能
     在高级模式下，我们就可以讲当前的模式设置为history模式
   ```
   
   ``` js
   
   let router=new VRouter({
   mode:'history',
   routes:[
      { ....}
      ]
   })
   
```
   
   
   
   
  