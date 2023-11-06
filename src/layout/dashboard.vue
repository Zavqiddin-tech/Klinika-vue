<template>
  <div class="dashboard">
    <navbarDash />
    <div class="dashboard__main">
      <sidebar />
      <div class="dashboard__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import navbarDash from "@/dashboard/components/navbar-dash.vue";
import sidebar from "../dashboard/components/sidebar/sidebar.vue";
</script>

<style lang="scss">
.dashboard {
  max-width: 1600px;
  height: 100vh;
  margin: auto;;
  &__main {
    height: 90vh;
    display: flex;
    .sidebar {
      width: 250px;
      height: 100%;
      overflow: hidden;
    }
  }
  &__content {
    width: calc(100vw - 250px);
    padding: 16px;
    overflow: scroll;
  }
}
</style>
