<template>
    <el-row class="skeleton-wrapper">
        <el-col :span="8" v-for="sketelon in 6">
          <el-space direction="vertical" alignment="flex-start">
            <el-skeleton style="width: 240px" :loading="loading" animated>
              <template #template>
                <el-skeleton-item
                  variant="image"
                  style="width: 240px; height: 240px"
                />
                <div style="padding: 14px">
                  <el-skeleton-item variant="h3" style="width: 50%" />
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-items: space-between;
                      margin-top: 16px;
                      height: 16px;
                    "
                  >
                    <el-skeleton-item
                      variant="text"
                      style="margin-right: 16px"
                    />
                    <el-skeleton-item variant="text" style="width: 30%" />
                  </div>
                </div>
              </template>
            </el-skeleton>
          </el-space>
        </el-col>
      </el-row>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useLoadingStore} from '@/stores/loading/loading'
const {loading} = storeToRefs(useLoadingStore())
</script>


<style lang="scss">
    .skeleton-wrapper {
    padding-top: 50px;
    .el-col-8 {
      display: flex;
      justify-content: center;
    }
  }
</style>