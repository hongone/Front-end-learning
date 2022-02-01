<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<!-- vue3在这定义组件名 -->
<script>
  export default {
    name: 'HoButton',
    inheritAttrs: false,
    customOptions: {}
  }
</script>
<template>
  <div >
    <button><slot></slot></button>
  </div>
</template>