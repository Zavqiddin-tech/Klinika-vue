<template>
  <Dialog />
  <signDialog />
  <regisDialog />
  <feedbackDialog />
  <div class="header">
    <header-top />
    <div class="container">
      <div class="header-center">
        <header-nav />
        <header-bottom />
      </div>
    </div>
  </div>
  <div class="header-scroll">
    <div class="header-scroll__wrapper">
      <div class="logo">
          <router-link to="/main">
              <img src="@/assets/logo/nav-logo.png" alt="logo">
          </router-link>
      </div>
      <div class="menu-toggle" @click="menuOpen()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <header-bottom />
    </div>
  </div>
</template>

<script setup>
import headerTop from "./header-comp/header-top.vue";
import headerNav from "./header-comp/header-nav.vue";
import headerBottom from "./header-comp/header-bottom.vue";
import Dialog from "../page/dialog/dialog.vue";
import signDialog from "../page/dialog/signDialog.vue";
import regisDialog from "../page/dialog/regisDialog.vue";
import feedbackDialog from "../page/dialog/feedbackDialog.vue";

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let headerScroll = document.querySelector(".header-scroll");
  header.classList.toggle("sticky", window.scrollY > 90);
  headerScroll.classList.toggle('sticky', window.scrollY > 90)
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
  transition: 0.5s linear;
  transform: translateY(0px);
  &.sticky {
    transform: translateY(-150px);
  }
  &-center {
    padding-top: 16px;
  }
  &-banner {
    padding-top: 36px;
    background-color: #f9faff;
  }
}
.header-scroll {
  width: 100%;
  padding-top: 10px;
  background-color: #fff;
  transform: translateY(-300px);
  position: fixed;
  display: flex;
  justify-content: center;
  transition: 0.4s;
  z-index: 100;
  &.sticky {
  transform: translateY(-166px);
  }
  &__wrapper {
    width: 1240px;
    max-width: 1240px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-bottom {
      width: 70%;
    }
  }
}

@media (max-width: 650px) {
  .header-scroll {
    padding: 20px;
    justify-content: space-between;
    .header-bottom {
      display: none;
    }
    .menu-toggle {
      display: flex;
    }
  }
}

@media (max-width: 500px) {
  .header-center {
    .header-nav {
      border-bottom: unset;
    }
    .header-bottom {
      display: none;
    }
  }

  .header-scroll {
    &.sticky {
      transform: translateY(-100px);
    }

  }
}

</style>
