<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!--<button @click="getParams"> get params</button>-->

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ' 我是apple的子组件'
    }
  },
  methods:{
//      getParams(){
//          console.log(this.$route.params)
//      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
