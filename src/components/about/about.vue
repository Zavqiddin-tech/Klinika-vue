<template>
    <div class="about">
        <div class="container">
            <about-banner button_title="О Центре"/>
            <about-card />
        </div>
    </div>
</template>


<script setup>
import aboutBanner from '@/components/page/banner/about-banner.vue'
import aboutCard from './about-comp/about-card.vue';
</script>
<style lang="scss">
    .about {
        margin-top: 56px;
        padding-top: 93px;
        background-color: #EBEBEB;
    }


@media (max-width: 768px) {
    .about {
        padding-top: 50px;
    }
}
</style>