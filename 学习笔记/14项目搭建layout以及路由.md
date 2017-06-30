##  项目搭建 layout 以及路由

![](img/323.png)



1. 整个网站的头部和底部是一样的，只有中间的内容改变，不同个页面有不同内容，但是头部底部是不变的
2. 设计头部底部的公用元素

> componets 目录中新建layout组件作为一个网站的布局
 包括header、content、footer
 
 
> 在layout中把网站是头部和底部写好
 
 * layout.vue 
  
```
   <template>
        <div id="layout">
            <div class="app-head">
                <div class="app-head-inner"> 
                    <div class="logo">
                      <img src="./ass/logo.png" alt="">                   
                    </div>
                    <div class="app-head-nav">
                       <ul class="nav-list">
                           <li>登录</li>
                           <li>|</li>
                           <li>注册</li>
                            <li>|</li>
                            <li>退出</li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="app-container">
                 
            </div>
            <div class="app-foot">
              <div class="app-foot-inner">
                 @hewenhai 2017-06-30
              </div> 
            </div>
       </div>
   </template>
   <script>
      export default{
          
      }
   </script>   
   <style>
   <!-- 样式reset -->
    <!-- 布局样式 -->
   <style>
```

*  main.js

```js

import Vue from 'vue'
import VRouter from 'vue-router'
import  Layout from 'layout'

new Vue({
  el:'#layout', //这里指向的是index.html
  components:<layout/>,
  template:{layout}
})


```
