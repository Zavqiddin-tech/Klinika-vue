<template>
  <div class="form-dash">
    <div class="form-dash__wrapper">
      <el-input
        v-model="navInput.search"
        placeholder="Searching..."
      />
      <div class="form-dash__search">
        <i class='bx bx-search-alt'></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navInput = ref({});
</script>

<style lang="scss">
.form-dash {
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #F0F4F8;
    border-radius: 30px;
  }
  &__search {
    position: absolute;
    right: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    i {
      font-size: 25px;
      color: #3197FF;
    }
  }
  .el-input__wrapper {
    padding: 10px;
    padding-left: 20px;
    width: 400px;
    max-width: 400px;
    background-color: unset;
    border-radius: 30px;
    ::placeholder {
      letter-spacing: 1px;
      font-family: 'Poppins', sans-serif;
      color: #8C909D;
    }
  }
}
</style>
