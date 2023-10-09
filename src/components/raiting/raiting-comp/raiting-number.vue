<template>
  <div class="raiting-item">
    <img :src="bg" alt="">
    <div class="raiting-number">{{ number }}</div>
    <div class="raiting-info">
      <div class="raiting-title">{{ title }}</div>
      <div class="raiting-text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps([
    'number',
    'title',
    'text',
    'bg'
])
</script>
<style lang="scss"></style>
