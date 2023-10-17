<template>
  <main class="main">
    <menuVue />
    <header-vue />
    <div class="content">
      <router-view />
    </div>
    <footer-vue />
  </main>
</template>

<script setup>
import headerVue from "../components/header/header.vue";
import footerVue from "../components/footer/footer.vue";
import menuVue from "@/components/page/menu/menu.vue";
</script>

<style lang="scss">
.main {
  position: relative;
  background-color: #f9faff;
  overflow-x: hidden;
  .menu-wrapper {
    position: fixed;
    z-index: 1009000000000;
    background-color: rgba(255, 255, 255, 0.514);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100vh;
    padding-top: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    z-index: 10;
    transition: 0.5s;
    transform: translateX(10000px);
    opacity: 0;
    .header-number {
      display: block;
    }
    .header-btn-group {
      display: block;
    }
    &.open {
      transform: translateX(0px);
      opacity: 1;
    }
  }
}
</style>
