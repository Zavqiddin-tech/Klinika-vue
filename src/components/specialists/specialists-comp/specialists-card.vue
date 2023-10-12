<template>
  <div class="specialists-card">
    <img :src="img" alt="" />
    <div class="specialists-info">
      <div class="specialists-title">{{ title }}</div>
      <div class="specialists-text">{{ text }}</div>
      <div v-show="profession" class="profession">{{ profession }}</div>
    </div>
  </div>
</template>
<script setup>
defineProps(["img", "title", "text", "profession"]);
</script>
<style lang="scss">
.specialists-card {
  position: relative;
  background-color: #f8ece9;
  border-radius: 24px;
  
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    transform: translateY(-5px);
  }
}
.specialists-info {
  margin-left: 32px;
  position: absolute;
  bottom: 30px;
  .profession {
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 24px;
    font-size: 13px;
    font-weight: 200;
    border: 1px solid #C9BABA;
    color: #C9BABA;
    display: inline-block;
  }
}

.specialists-title {
  width: 250px;
  padding-bottom: 12px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #546272;
}
.specialists-text {
  font-weight: 200;
  line-height: 24px;
}


@media (max-width: 768px) {
  .specialists-card {
    display: flex;
    justify-content: center;
    &.consul {
      display: block;
    }
  }
  .specialists-info {
    margin-left: 0;
  }
}
</style>
