<template>
    <div class="prices">
        <div class="container">
            <img src="@/assets/img/no-page.jpg" alt="">
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

onMounted(()=> {
  window.scrollTo(0, 0)
})
</script>

<style lang="scss">
    .prices {
        background-color: #fff;
        height: 80vh;
        .container {
            padding-top: 100px;
            max-width: 600px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>