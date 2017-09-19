<template>
  <div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/timg1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/timg2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/timg3.jpg">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
  </div>


</template>
<style scoped>
  @import "../assets/css/swiper.min.css";

  .swiper-container {
    height: 120px;

  }

  .swiper-container img {
    height: 100%;
    width: 100%;
  }

</style>

<script>
  import Swiper from '../assets/js/swiper.min.js'
  import '../assets/css/swiper.min.css'

  export default{
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        speed: 2000,
        autoplay: 1500,//可选选项，自动滑动
        autoplayDisableOnInteraction: false,
        pagination: this.$refs.pagination,
        paginationClickable: true,
        effect: 'coverflow',
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      })
    }

  }

</script>

