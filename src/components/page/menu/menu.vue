<template>
    <div :class="menuToggle ? 'menu-wrapper open' : 'menu-wrapper'">
        <div class="logo">
            <router-link to="/main">
                <img src="@/assets/logo/nav-logo.png" alt="logo">
            </router-link>
        </div>
        <div class="header-number">
            8 (861) <span>202-0-202</span>
        </div>
        <div class="header-btn-group">
            <el-button type="info" round>Записаться</el-button>
            <el-button :icon="User" round>Войти</el-button>
        </div>
      </div>
</template>


<script setup>
// store
import { storeToRefs } from "pinia";
import { useMenuToggleStore } from "../../../stores/menu/menuToggle";
const {menuToggle} = storeToRefs(useMenuToggleStore())
const {setMenuToggle} = useMenuToggleStore()
</script>


<style lang="scss">
    
</style>