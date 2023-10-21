<template>
  <div class="sidebar">
    <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :router="true"
  >
    <el-menu-item
      v-for="item of dashMenuLink"
      :index="item.path">
      <el-icon><component :is="item.icon"></component></el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
    
  </el-menu>
  </div>
</template>

<script setup>
import { dashMenuLink } from '../../../router/menu';
</script>

<style lang="scss">
.sidebar {
  background-color: #fff;
  border-right: 2px solid #E5E7EB;
}
</style>
