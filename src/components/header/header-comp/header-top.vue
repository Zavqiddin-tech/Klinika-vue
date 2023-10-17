<template>
  <div class="header-top">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Клиника</el-menu-item>
      <el-menu-item index="2">Косметология</el-menu-item>
      <el-menu-item index="3">Роддом</el-menu-item>
      <el-menu-item index="4">Репродукция</el-menu-item>
      <el-menu-item index="5">Стоматология</el-menu-item>
      <el-menu-item index="6">Детский стационар</el-menu-item>
      <el-menu-item index="7">Пластическая хирургия</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup></script>

<style lang="scss">
.header-top {
  display: flex;
  justify-content: center;
  background-color: #ebebeb;
  .el-menu {
    width: 100%;
    height: 22px;
    background-color: #ebebeb;
    max-width: 1140px;
    justify-content: center;
    border-bottom: unset;
    .el-sub-menu {
      border-bottom: unset;
      div {
        padding: 0;
      }
      &.is-active {
        .el-sub-menu__title {
            border-bottom: 2px solid #546272;
            .el-icon {
                color: #546272 !important;
            }
        } 
      }
    }
    &-item {
      padding: 5px 26px;
      font-size: 13px;
      color: #546272;
      white-space: nowrap;
      &:hover {
        background-color: #fefefe !important;
        color: #546272 !important;
      }
      &:focus {
        background-color: #fefefe !important;
        color: #546272 !important;
      }
      &.is-active {
        border-bottom: unset;
        color: #546272 !important;
      }
    }
  }

  a {
  }
}
</style>
