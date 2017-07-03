##  indexPage 最新消息从后端获取信息vue-resource  (AJAX)

> vue-resource
 
 * vue插件，提供了使用XMLHttpRequest或者JSONP 进行web请求和响应服务AJAX
 
> 使用方法

1. 安装：

```
 npm install vue-resource --save
```

2. 引入vue-resource (入口文件)

```js
 import VResource from 'vue-resource'
```

3. 使用vue-resource
```
 Vue.use(VResource)
```

* 当我们使用了vue-resource之后，我们项目所有的地方都还可以使用this.$http功能


* 实例代码：
```js
  export default{
     created(){
         this.$http.get('getList').then(function(data) {
             console.log('成功后的回调')
         },function(err) {
             console.log('失败后的回调')
         });
         this.$http.post('getList',{data:"ddddd"}).then(function(data) {
             console.log('成功后的回调')
         },function(err) {
            console.log('失败后的回调')
         }) 
     }
  }
  
```







> indexPage使用Vue-resource


1. mian.js (入口文件片配置)

```
import Vue from 'vue'
import VRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VRouter) // 这里的vue-resource并不依赖于vue-router只是为了代码更加完整
Vue.use(VueResource)


```


2. index.vue

 * 生命周期：
   
    * created：在组件创建完成之后
   
   

```
  export default {
    created:function() {  //当组件创建完成只会请求数据。
      this.$http.get('getList')
      .then(function(rs) {
        this.newsList=rs.data  //按照常理来说这里的this并不是我们想要的this,我们可以使用箭头函数来解决，代码见111-1
      },function(err) {
        
      })
    },
    data(){
        newsList:[] //newsList原本是空数组，当created组件创建完成后请求到ajax数据后赋值给newsList 
    }
    
  }

```



* 111-1
  > 使用箭头函数来结局this问题
```
  export defautl{
    created(){
        this.$http.get('/api/getNewsList')
        .then((rs)=>{
            this.newsList=rs.data
        },(er)=>{
            console.log(er)
        })
    }
  }
 
```

