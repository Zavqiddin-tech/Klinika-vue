<template>
  <div
    v-loading.fullscreen.lock="fullscreenLoading"
  >
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const fullscreenLoading =  ref(false)
onMounted(()=> {
    fullscreenLoading.value = true
    setTimeout(() => {
        fullscreenLoading.value = false;
      }, 1000);
})

</script>
