<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo" :router="true">
      <el-menu-item v-for="item of dashMenuLink" :index="item.path">
        <el-icon
          ><span class="material-symbols-outlined">
            {{ item.icon }}
          </span></el-icon
        >
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
    <div class="sidebar-bottom">
      <span class="material-symbols-outlined"> support_agent </span>
      <span class="material-symbols-outlined"> settings </span>
      <span class="material-symbols-outlined"> logout </span>
    </div>
  </div>
</template>

<script setup>
import { dashMenuLink } from "../../../router/menu";
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid #e5e7eb;
  .el-menu {
    border-right: 0;
    &-item {
      font-size: 16px;
      font-family: 'Inter', sans-serif;
    }
  }
  &-bottom {
    height: 200px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
    clip-path: polygon(0 25%, 100% 80%, 100% 100%, 0 100%);
    background-color: rgb(53, 53, 53);
    span {
      font-size: 25px;
      font-weight: 400;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
