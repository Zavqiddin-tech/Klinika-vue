<template>
  <div class="header-bottom">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item v-for="item, index of menuLink" :index="item.path" :key="index">
      {{ item.title }}
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')

import { menuLink } from "@/router/menu.js";
</script>

<style lang="scss">
.header {
  &-bottom {
    padding: 0px 17px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    
    .el-menu {
      width: 100%;
      justify-content: space-between;
      border: 0;
      .el-menu-item {
        &:hover {
          background-color: #F9FAFF;
          color: #86827b;
        }
        &.is-active {
          border-bottom: 2px solid #cac6c6;
          color: #546272 !important;
          background-color: #F9FAFF;
         
        }
      }
    }
    a {
      color: #546272;
    }
  }
}
</style>
