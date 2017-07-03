##　课外，JSON-server后端服务器，用来为ajax测试

>> guithub地址

https://github.com/typicode/json-server

> 使用

 1. 安装
```
 npm install json-server 
``` 
 
 2. 引入json-server 
 ```js
 //因为是在测试环境，所以我们放在项目目录  build---》 dev-server.js中 
 // 注意不要和项目中原有的变量名冲突
 
const jsonServer = require('json-server')
const jsserver = jsonServer.create()
const jsrouter = jsonServer.router('db.json')
const jsmiddlewares = jsonServer.defaults()

jsserver.use(jsmiddlewares)
jsserver.use(jsrouter)
jsserver.listen(port+1, () => { //这里port是dev-server.js的端口，我们把它加一
  console.log('JSON Server is running')
})

```
 3. 因为和dev-server.js服务器端口不一样，所以需要使用代理端口，在config--》index.js
 
 ```
  dev: {
      env: require('./dev.env'),
      port: 8090,
      autoOpenBrowser: true,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxyTable: {  //为json-server设置代理端口,默认是空的
        '/api':'http://localhost:8091/'
  
      },


```

4. 在dev-server.js  使用时添加 '/api'

```
const jsonServer = require('json-server')
const jsserver = jsonServer.create()
const jsrouter = jsonServer.router('db.json')
const jsmiddlewares = jsonServer.defaults()

jsserver.use(jsmiddlewares)
jsserver.use('/api',jsrouter)
jsserver.listen(port+1, () => { //这里port是dev-server.js的端口，我们把它加一
  console.log('JSON Server is running')
})

```


* 配置完后的访问路径变成了  例：localhost:8091/api/getNewsList