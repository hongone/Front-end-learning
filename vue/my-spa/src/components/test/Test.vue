<style src="./Test.css"></style>
<template>
    <div class="test">
       <h1>Test component</h1>
    </div>
</template>
<script>
export default {
  mounted () {
    import('./Test.js').then(res => {
      res.default()
    })
  }
}
</script>
