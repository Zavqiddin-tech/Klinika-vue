<template>
    <div :class="toggle ? 'comment-card orange' : 'comment-card' ">
        <div :class="toggle ? 'title' : 'text'">
            {{ text }}
        </div>
        <el-button v-if="toggle" round class="btn-info full" @click="openModal()">
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
    .comment-card {
        height: 100%;
        padding: 32px;
        border-radius: 24px;
        background-color: #fff;
        .title {
            padding-bottom: 230px;
        }
    }
    .title {
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
    }
    .text {
        font-weight: 200;
        line-height: 24px;
    }   
    .orange {
        background-color: #E7E1E0;
    }
</style>