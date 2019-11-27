<template>
  <div>
    <banner></banner>
    <foot />
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Foot from './components/Foot.vue';
// import Bar from './components/Bar.vue';

export default {
  components: {
    Banner, Foot
  }
}
</script>