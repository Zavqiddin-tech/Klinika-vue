<template>
  <div class="service-top">
    <div class="service-title">{{ title }}</div>
    <div>
      <el-button round class="btn-white">{{ text }}</el-button>
    </div>
  </div>
</template>
<script setup>
defineProps([
  'title', 'text'
])
</script>
<style lang="scss">
.service {
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-title {
    font-size: 32px;
    font-weight: 600;
    color: #546272;
  }
}



@media (max-width: 900px) {
  .service-top  {
    padding-bottom: 30px;
  }
  .service-title {
    font-size: 28px;
  }
}
@media (max-width: 768px) {
  .service-top  {
    padding-bottom: 0px;
  }
  .service-title {
    font-size: 22px;
  }
}
@media (max-width: 375px) {
  .service-title {
    font-size: 16px;
  }
}


</style>
