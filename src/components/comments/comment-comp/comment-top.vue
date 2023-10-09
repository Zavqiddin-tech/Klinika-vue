<template>
    <div class="comment-top">
        <service-top :title="title" :text="text"/>
    </div>
</template>


<script setup>
import serviceTop from '../../service/service-comp/service-top.vue';

import {ref} from 'vue'
const title = ref('Отзывы')
const text = ref('Все отзывы')

</script>


<style lang="scss">
    
</style>