<template>
    <div class="header-top">
        <router-link to="/">Клиника</router-link>
        <router-link to="/">Косметология</router-link>
        <router-link to="/">Роддом</router-link>
        <router-link to="/">Репродукция</router-link>
        <router-link to="/">Стоматология</router-link>
        <router-link to="/">Детский стационар</router-link>
        <router-link to="/">Пластическая хирургия</router-link>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
    .header-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #ebebeb;
        a {
            padding: 5px 26px;
            font-size: 13px;
            color: #546272;
            &:hover {
                background-color: #FEFEFE;
            }
        }
    }
</style>