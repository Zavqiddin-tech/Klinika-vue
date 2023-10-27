<template>
  <div>
    <h1>dash basic</h1>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {useProfessionStore} from '@/stores/data/profession'
const {get_all_profs} = useProfessionStore()

onMounted(() => {
  get_all_profs();
});
</script>

<style lang="scss"></style>
