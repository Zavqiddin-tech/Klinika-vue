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
}
</style>
