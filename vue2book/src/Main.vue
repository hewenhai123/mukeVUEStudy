<template>
  <div>
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
<style>

</style>
<script>

</script>
