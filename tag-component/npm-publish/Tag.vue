<template>
<span class="tag" :class="selectedTheme">
    <span class="content">{{ tag }}</span>
    <span class="close" @click="$emit('removeTagEvent',index)">X</span>
  </span>
</template>

<script>
export default {
  props: ['tag', 'index', 'color'],
  data() {
    return {
      selectedTheme: null
    }
  },
  created() {
    this.selectedTheme = this.color;
  }
}
</script>

<style scoped>
.tag {
  padding: 10px;
  cursor: default;
  font-size: 14px;
  margin-right: 10px;
}

.tag * {
  font-size: 14px;
}

.tag .close {
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
}

.success {
  background-color: #D5EDDB;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

</style>
