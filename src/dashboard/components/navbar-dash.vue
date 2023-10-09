<template>
    <nav class="navbar-dash">
        <img :src="dashLogo" alt="logo">
        <form-dash />
    </nav>
</template>

<script setup>
import dashLogo from "@/assets/logo/dash-logo.png"
import formDash from "./form-dash.vue";
</script>

<style lang="scss">
    .navbar-dash {
        display: flex;
        gap: 32px;
    }
</style>