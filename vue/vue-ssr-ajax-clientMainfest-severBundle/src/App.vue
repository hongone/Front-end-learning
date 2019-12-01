<template>
  <div id="app">
    <banner></banner>
    <foot></foot>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Foot from './components/Foot.vue';
// import Bar from './components/Bar.vue';

export default {
  components: {
    Banner, Foot
  },
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