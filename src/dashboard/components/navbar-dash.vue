<template>
    <nav class="navbar-dash">
        <div class="navbar-dash__left">
            <router-link to="/dashboard">
                <img :src="dashLogo" alt="logo">
            </router-link>
            <form-dash />
        </div>
        <div class="navbar-dash__right">
            <img src="@/assets/logo/notification.png" alt="">
            <div class="navbar-dash__avatar">
                <img src="@/assets/logo/Avatar.png" alt="">
            </div>
        </div>
    </nav>
</template>

<script setup>
import dashLogo from "@/assets/logo/dash-logo.png"
import formDash from "./form-dash.vue";
</script>

<style lang="scss">
    .navbar-dash {
        min-height: 10vh;
        position: sticky;
        top: 0;
        z-index: 10;
        padding: 12px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-bottom: 2px solid #E5E7EB;
        &__left {
            display: flex;
            align-items: center;
            gap: 30px;
            img {
                cursor: pointer;
            }
        }
        &__right {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        &__avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }
</style>