<template>
  <div id="app">
    <router-link to="/">index</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-link to="/foo">Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  beforeCreate() {
    console.log('App.vue beforeCreate');
  },

  created() {
    console.log('App.vue created');
  },

  beforeMount() {
    console.log('App.vue beforeMount');
  },

  mounted() {
    console.log('App.vue mounted');
  }
}
</script>