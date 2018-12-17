<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <router-link to="/">跳到首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'TestKeep',
  data () {
    return {
      msg: '测试Keepalive'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:#42b983
}

</style>
