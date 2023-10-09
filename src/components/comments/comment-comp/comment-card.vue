<template>
    <div class="comment-card">
        <div :class="toggle ? 'title' : 'text'">
            {{ text }}
        </div>
        <el-button v-if="toggle" round class="btn-info full">
            Оставить отзыв
        </el-button>
    </div>
</template>


<script setup>
defineProps([
    'toggle', 'title', 'text' 
])
</script>

<style lang="scss" scoped>
    .title {
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
    }
    .text {
        font-weight: 200;
        line-height: 24px;
    }   
</style>