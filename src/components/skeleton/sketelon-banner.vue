<template>
  <div class="skeleton-banner">
    <el-skeleton :loading="loading" animated/>
    <br />
    <el-skeleton style="--el-skeleton-circle-size: 100px" :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="circle" />
      </template>
    </el-skeleton>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useLoadingStore } from "@/stores/loading/loading";
const { loading } = storeToRefs(useLoadingStore());
</script>

<style lang="scss">

</style>
