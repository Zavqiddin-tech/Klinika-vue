<template>
  <div :class="menuToggle ? 'menu-wrapper open' : 'menu-wrapper'">
    <el-icon @click="menuOpen()"><Close /></el-icon>
    <div class="menu-header">
      <div class="logo" @click="pressLogo()">
        <router-link to="/main">
          <img src="@/assets/logo/nav-logo.png" alt="logo" />
        </router-link>
      </div>
    </div>
    <div class="menu-router">  
        <div class="menu-router__links" v-for="item of menuLinkStore"  @click="pressedItem(item.id)" >
            <router-link :to="item.path" :class="item.active ? 'active' : ''">{{ item.title }}</router-link>
        </div>
    </div>
    <div class="header-btn-group">
        <el-button @click="recordModal()" type="info" class="nav-btn" round>Записаться</el-button>
        <el-button @click="signModal()" class="btn-white" :icon="User" round>Войти</el-button>
      </div>
  </div>
</template>

<script setup>
// store
import { storeToRefs } from "pinia";
import { useMenuToggleStore } from "../../../stores/menu/menuToggle";
const { menuToggle } = storeToRefs(useMenuToggleStore());
const { setMenuToggle } = useMenuToggleStore();

import {useMenuStore} from '../../../router/menu'
const {menuLinkStore} = storeToRefs(useMenuStore())
const {setMenuLinkStore, noActiveLink} = useMenuStore()

const pressedItem = (index)=> {
  setMenuLinkStore(index)
  setMenuToggle(false)
}
const pressLogo = ()=> {
    noActiveLink()
    setMenuToggle(false)
}

const menuOpen = () => {
  if (menuToggle.value) {
    setMenuToggle(false);
  } else {
    setMenuToggle(true);
  }
};


import { useDialogStore } from "@/stores/dialog/dialog";
const {setRecordDialog, setSignDialog} = useDialogStore()
const recordModal = ()=> {
setRecordDialog(true)
}
const signModal = ()=> {
setSignDialog(true)
}
</script>

<style lang="scss">
.menu-wrapper {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.863);
  z-index: 110 !important;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100vh;
  gap: 30px;
  z-index: 10;
  transition: 0.7s ease;
  transform: translateX(5000px);
  opacity: 0;
  .menu-header {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .menu-router {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
      .menu-router__links {
        display: inline-block;
        padding-top: 15px;
        a {
            padding-bottom: 5px;
            font-size: 18px;
            cursor: pointer;
            color: #546272;
            &:hover {
                border-bottom: 2px solid #546272;

            }
            &.active {
                border-bottom: 2px solid #546272;
            }
        }
      }
  }
  .header-btn-group {
    padding-top: 40px;
    padding-left: 20px;
    display: flex;
    .nav-btn {
            background-color: #546272;
            color: #fff;
            &:hover {
                opacity: 0.8;
            }
        }
  }
  &.open {
    transform: translateX(0px);
    opacity: 1;
  }
  .el-icon {
    position: absolute;
    top: 30px;
    right: 20px;
    font-size: 25px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: rgb(102, 102, 102);
    }
  }
}

@media(max-width: 350px) {
  .menu-wrapper {
    .header-btn-group {
      justify-content: center;
      padding-left: 0px;
    }
  }
}

</style>
