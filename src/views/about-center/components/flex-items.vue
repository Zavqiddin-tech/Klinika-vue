<template>
  <div class="masonry">
    <div class="title">Место для вашей красоты</div>
    <div class="m-container" v-if="aboutData[0]">
      <div class="m-box" v-for="item of aboutData[0].images">
        <img :src="`${url}/${item.response}`" alt="" />
      </div>
    </div>
    <div class="d-flex justify-center">
      <el-button round class="btn-white__defalut">Показать еще</el-button>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { storeToRefs } from 'pinia';

import { useHelperStore } from '@/stores/admin/helpers';
import { useAboutStore } from "@/stores/data/dash-about";
const {url} = storeToRefs(useHelperStore())
const { aboutData } = storeToRefs(useAboutStore());
const { get_all_aboutData } = useAboutStore();

onMounted(()=> {
  get_all_aboutData()
})
</script>

<style lang="scss">
.masonry {
  padding-top: 56px;
  .title {
    padding-bottom: 42px;
  }
  .btn-white__defalut {
    margin-top: 35px;
  }
}
.m-container {
  position: relative;
  columns: 4;
  column-gap: 20px;
  z-index: 1;
}
.m-box {
  width: 100%;
  margin-bottom: 10px;
  break-inside: avoid;
}
.m-box img {
  max-width: 100%;
  border-radius: 15px;
}
@media (max-width: 1200px) {
  .m-container {
    columns: 3;
  }
}
@media (max-width: 768px) {
  .m-container {
    columns: 2;
  }
}
@media (max-width: 480px) {
  .m-container {
    columns: 1;
  }
}
</style>
