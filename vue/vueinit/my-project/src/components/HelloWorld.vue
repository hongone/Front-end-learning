<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <input type="text" placeholder="测试Keepalive" name="" />
   <router-link to="/testKeep">跳到测试页</router-link> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to 海口'
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
