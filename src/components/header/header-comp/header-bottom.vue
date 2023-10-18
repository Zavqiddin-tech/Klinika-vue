<template>
  <div class="header-bottom">
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item 
      :class="item.active ? 'el-menu-item store-active' : 'el-menu-item'"
      v-for="item of menuLinkStore" 
      @click="pressedItem(item.id)" 
      :index="item.path" 
      :key="index"
      >
      {{ item.title }}
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import {useMenuStore} from '../../../router/menu'
const {menuLinkStore} = storeToRefs(useMenuStore())
const {setMenuLinkStore} = useMenuStore()



const pressedItem = (index)=> {
  setMenuLinkStore(index)
}
</script>

<style lang="scss">
.header {
  &-bottom {
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
          border-bottom: 0;
          color: #000 !important;
          background-color: unset;
        }
        &.store-active {
          border-bottom: 2px solid #cac6c6;
          color: #546272 !important;
          background-color: #F9FAFF;
        }
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
      }
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
    }
    a {
      color: #546272;
    }
  }
}
</style>
