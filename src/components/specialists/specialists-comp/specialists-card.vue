<template>
  <div class="specialists-card">
    <img :src="img" alt="" />
    <div class="specialists-info">
      <div class="specialists-title">{{ title }}</div>
      <div class="specialists-text">{{ text }}</div>
    </div>
  </div>
</template>
<script setup>
defineProps(["img", "title", "text"]);
</script>
<style lang="scss">
.specialists-card {
  position: relative;
  background-color: #f8ece9;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}
.specialists-info {
  margin-left: 32px;
  position: absolute;
  bottom: 30px;
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
}
</style>
