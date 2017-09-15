<template>
  <div>
    详情页

    <div>{{idInfo}}</div>
  </div>


</template>

<style>

</style>

<script>
  export default{
    data(){
      return {
        idInfo: ''
      }
    },
    beforeMount(){
      const routerId = this.$router.params.id;
      this.idInfo = routerId;
      console.log(routerId)

    }


  }


</script>
