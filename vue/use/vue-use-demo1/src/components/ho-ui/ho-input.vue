<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<!-- 在这定义组件名 -->
<script>
  export default {
    name: 'HoInput',
    inheritAttrs: false,
    customOptions: {}
  }
</script>


<template>
  <div >
    <input type="text" />
  </div>
</template>