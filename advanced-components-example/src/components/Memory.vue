<template>
  <div>
    <slot name='heading'></slot>
    <slot name='content'></slot>
  </div>
</template>
<script>
export default {
  created() {
    console.log('Memory Created');
  },
}
</script>
<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
