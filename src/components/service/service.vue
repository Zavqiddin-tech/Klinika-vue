<template>
    <div class="service">
        <div class="container">
            <service-top :title="title" :text="text" data="allservices"/>
            <service-card :data="services"/>
        </div>
    </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import { storeToRefs } from 'pinia';
import serviceTop from './service-comp/service-top.vue';
import serviceCard from './service-comp/service-card.vue';
const title = ref('Услуги центра')
const text = ref('Все услуги')

import { useServiceStore } from '@/stores/data/service/service'
const {services} = storeToRefs(useServiceStore())
const {get_all_servicesAll} = useServiceStore()

onMounted(()=> {
    get_all_servicesAll()
    console.log(services);
})
</script>
<style lang="scss">
    .service {
        padding-top: 56px;
        color: #546272;
    }
</style>