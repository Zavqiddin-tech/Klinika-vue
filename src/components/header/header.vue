<template>
  <div class="header">
    <header-top />
    <div class="container">
      <div class="header-center">
        <header-nav />
        <header-bottom />
      </div>
    </div>
    <div class="header-scroll">
      <div class="logo">
            <router-link to="/main">
                <img src="@/assets/logo/nav-logo.png" alt="logo">
            </router-link>
        </div>
      <header-bottom />
      <div class="menu-toggle" @click="menuOpen()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerTop from "./header-comp/header-top.vue";
import headerNav from "./header-comp/header-nav.vue";
import headerBottom from "./header-comp/header-bottom.vue";

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

import { storeToRefs } from 'pinia';
import { useMenuToggleStore } from '../../stores/menu/menuToggle';
const {menuToggle} = storeToRefs(useMenuToggleStore())
const {setMenuToggle} = useMenuToggleStore()


const menuOpen = ()=> {
    if (menuToggle.value) {
        setMenuToggle(false)
    } else {
        setMenuToggle(true)
    }
}
</script>
<style lang="scss">
.header {
  width: 100%;
  z-index: 20;
  background-color: #fff;
  &.sticky {
    position: fixed;
    .header-top,
    .header-center {
      display: none;
    }
    .header-scroll {
        padding: 10px;
      display: flex;
    }
  }
  .header-scroll {
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    .header-bottom {
      width: 70%;
    }
  }
  .menu-toggle {
    display: none;
  }
  &-center {
    padding-top: 16px;
  }
  &-banner {
    padding-top: 36px;
    background-color: #f9faff;
  }
}

@media (max-width: 500px) {
  .header {
    &.sticky {
        .header-scroll {
            padding: 10px;
            justify-content: space-between;
          .header-bottom {
            display: none;
          }
        }
    }
    .menu-toggle {
        display: flex;
    }
  }
}
</style>
