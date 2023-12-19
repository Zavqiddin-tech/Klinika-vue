<template>
    <div class="dash-regis">
        <h1>Message</h1>
        <messageTable :consuls="consuls"/>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import messageTable from '../../components/table/message-table.vue';

import {useFormaStore} from '@/stores/forma/forma'
const {consuls, unread} = storeToRefs(useFormaStore())
const {get_all_consul} = useFormaStore()



onMounted(()=> {
get_all_consul()
})
</script>


<style lang="scss">
    
</style>