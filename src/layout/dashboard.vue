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
  margin: auto;

  &__main {
    min-height: 90vh;
    display: flex;
    .sidebar {
      width: 250px;
      height: 90vh;
    }
  }
  &__content {
    width: calc(100vw - 250px);
    padding: 16px;
    background-color: #F9FAFB;
  }
}
</style>
