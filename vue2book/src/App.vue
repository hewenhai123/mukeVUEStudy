<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="tab">
      <ul>

          <router-link :to="{name:'Home'}" tag="li">
            <div><i class="ion ion-android-home"></i></div>
            <div>首页</div>
          </router-link>
        </li>

          <router-link :to="{name:'Explorer'}" tag="li">
            <div><i class="ion ion-social-buffer"></i></div>
            <div>分类</div>
          </router-link>


          <router-link :to="{name:'Cart'}" tag="li">
            <div><i class="ion ion-android-cart"></i></div>
            <div>购物车</div>
          </router-link>


          <router-link :to="{name:'Me'}" tag="li">
            <div><i class="ion ion-ios-person"></i></div>
            <div>我</div>
          </router-link>

      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  /*@import "assets/font/css/ionicons.css";*/

  /*reset-s*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #444;
  }

  /*reset-e*/
  html{
    height: 100%;
  }
  body{
    /*height: 100%;*/
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .tab{
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: #ffffff;
  }
  .tab ul{
    overflow: hidden;
  }
  .tab ul li{
   float: left;
   width: 25%;
    padding: 10px 0;
  }
  .tab ul li i{
    font-size: 2rem;
  }
</style>
