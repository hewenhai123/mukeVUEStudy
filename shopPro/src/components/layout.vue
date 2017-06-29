<!-- 这是我们设定好的一个布局-->

<template>
  <div id="layout">
    <div class="app-head">
      <div class="app-head-inner">
        <div class="app-head-logo">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="head-nav">
            <ul class="nav-list">
              <li>登录</li>
              <li class="nav-pile">|</li>
              <li>注册</li>
              <li class="nav-pile">|</li>
              <li>关于</li>
            </ul>
        </div>
      </div>
    </div>
    <div class="app-content">appContent</div>
    <div class="app-foot">
      © 2017 hewenhai
    </div>
  </div>
</template>
<script>

  export default{

  }

</script>
<style>
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

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
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }

.app-head{
  background:#363636;
  height:90px;
  line-height: 90px;
  width: 100%;
  color:#b2b2b2;
}
  .app-head-inner{
    width: 1200px;
    margin:0 auto;
  }
.app-head-logo{
  float: left;
  margin-top: 20px;
}
  .app-head-logo img{
    width: 50px;
  }
.head-nav{
  float: right;

}
  .head-nav ul{
    overflow: hidden;

  }
  .nav-list li{
  float: left;
  }
  .nav-pile{
    padding:0 10px;
  }
.app-foot{
  width:100%;
  height: 80px;
  line-height:80px;
  text-align: center;
  background: #e3e4e8;
}
.app-content{
  width:1200px;
  margin:0 auto;
}



</style>

