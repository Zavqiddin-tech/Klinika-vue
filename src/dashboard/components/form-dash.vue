<template>
  <div class="form-dash">
    <el-input
      v-model="navInput.search"
      prefix-icon="search"
      size="large"
      placeholder="Search"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const navInput = ref({});
</script>

<style lang="scss">
.form-dash {
  .el-input__wrapper {
    width: 400px;
    max-width: 400px;
    border-radius: 15px;
    background-color: #f9fafb;
  }
}
</style>
