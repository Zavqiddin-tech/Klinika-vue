<template>
    <div class="comment">
        <div class="container">
            <comment-top />
            <comment-cards />
        </div>
    </div>
</template>


<script setup>
import commentTop from './comment-comp/comment-top.vue';
import commentCards from './comment-comp/comment-cards.vue';
</script>


<style lang="scss">
    .comment > * {
        color: #546272;
        padding-top: 58px;
    }
</style>