<!--Home.vue -->
<template>
  <div>
    <div class="section">
      <slider></slider>
    </div>
    <div class="section">
      <book-list></book-list>
    </div>
    <div class="section">
      <div>
        <!--编辑推荐-->
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
  import Slider from '../components/Slider.vue'
  import BookList from '../components/Booklist.vue'


  export default{
    components: {
      Slider,
      BookList
    }


  }
</script>
