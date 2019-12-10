<template>
  <div class="hello-bem hello-bem--init">
    <h1>{{msg}}</h1>
    <button class="hello-bem__btn" @click="add()">加1 +1</button>
    <button class="hello-bem__btn" @click="minus()">减1 -1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to 海口'
    }
  },
  methods: {
    add: function (params) {
      alert('+1')
    },
    minus: function (params) {
      alert('-1')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --mainColor: yellowgreen;
}
.hello-bem {
  border: 1px solid var(--mainColor);
  border-radius: 5px;
}
.hello-bem__btn {
  background: #bcce59ab;
  border: 2px;
}
.hello-bem--init {
  padding: 1em;
}
</style>
