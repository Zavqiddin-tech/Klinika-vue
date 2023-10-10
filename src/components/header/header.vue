<template>
    <div class="header">
        <header-top />
        <div class="container">
            <div class="header-center">
                <header-nav />
                <header-bottom />
            </div>
        </div>
        <div class="header-bbg"></div>
    </div>
</template>


<script setup>
import headerTop from './header-comp/header-top.vue'
import headerNav from './header-comp/header-nav.vue'
import headerBottom from './header-comp/header-bottom.vue';
</script>
<style lang="scss">
    .header {
        background-color: #fff;
        &-center {
            padding-top: 16px;
        }
        &-banner {
            padding-top: 36px;
            background-color: #F9FAFF;;
        }
        &-bbg {
            padding: 16px;
            background-color: #F9FAFF;
        }
    }
</style>