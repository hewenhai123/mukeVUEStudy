<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>数量总和：{{totalPrice}}</h2>
    <router-view></router-view>
    <router-link :to="{path:'/apple'}">to apple</router-link>
    <router-link :to="{path:'/banana'}">to banana</router-link>
    <router-link to="apple/red">to redApple</router-link>
    <!--<apple></apple>-->
    <banana></banana>
  </div>
</template>

<script>
  import apple from './components/apple.vue'
  import banana from './components/banana.vue'
export default {
  name: 'app',
  components:{apple,banana},
  computed:{
      totalPrice(){
          return this.$store.state.totalPrice
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
