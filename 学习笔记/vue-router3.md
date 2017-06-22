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
 

** 注意:三个要素**
   
   1. 一定要有一份map，映射关系，什么样的地址跳转到什么样的页面上
   2. 页面中的link
  