<template>
  <div class="banana">
    <h1>
      {{msg}}
    </h1>
    <button @click="addFifteen">加 15</button>
    <button @click="minusFifteen">减 15</button>
  </div>

</template>

<script>
  export default{
    name: 'banana',
    data(){
      return {
        msg: "我是banana组件",
        price: 15
      }
    },
    methods: {
      addFifteen(){
        this.$store.commit('increment', this.price)
      },
      minusFifteen(){
        this.$store.commit('decrement', this.price)
      }
    }
  }


</script>

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
