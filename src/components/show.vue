<template>
  <div>
    <h1>这是show组件</h1>
  <mt-progress :value="60">
    <div slot="start">0%</div>
    <div slot="end">100%</div>
  </mt-progress>
  </div>
</template>

<script>
    export default {
        name: "show"
    }
</script>

<style scoped>

</style>
