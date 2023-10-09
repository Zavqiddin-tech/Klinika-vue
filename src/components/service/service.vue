<template>
    <div class="service">
        <div class="container">
            <service-top :title="title" :text="text"/>
            <service-card />
        </div>
    </div>
</template>
<script setup>
import serviceTop from './service-comp/service-top.vue';
import serviceCard from './service-comp/service-card.vue';

import {ref} from 'vue'
const title = ref('Услуги центра')
const text = ref('Все услуги')


</script>
<style lang="scss">
    .service {
        padding-top: 56px;
        color: #546272;
    }
</style>