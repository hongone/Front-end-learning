<template>
  <div>
    <banner></banner>
    <dragging />
    <foot />
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Foot from './components/Foot.vue';
import Dragging from './components/Dragging.vue';
// import Bar from './components/Bar.vue';

export default {
  components: {
    Banner, Foot, Dragging
  }
}
</script>