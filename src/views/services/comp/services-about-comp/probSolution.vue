<template>
  <div class="prob-solution">
    <div class="title">Какие проблемы решает</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        v-for="item of problems"
        :label="item.btnText"
        :name="item.btnText"
      >
        <prob-banner :obj="item.datas"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {storeToRefs} from "pinia"
import probBanner from "./probBanner.vue";
import { useMoreServiceStore } from "@/stores/data/service/more-service";
const {probActive} = storeToRefs(useMoreServiceStore())

const props = defineProps(['problems'])
const activeName = ref('');
activeName.value = probActive


</script>

<style lang="scss">
.prob-solution {
  padding-top: 60px;
  .el-tabs__header {
    padding: 0px 0px 30px;
  }
  .el-tabs__nav {
    width: 100%;
    justify-content: space-between;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 5px;
    }
    &-wrap::after {
      display: none;
    }
  }
  .el-tabs__item.is-active {
    color: #ffffff;
    background-color: #9a888a;
    border-radius: 24px;
    &:hover {
      color: #ffffff;
    }
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding: 0 20px;
  }
  .el-tabs--top .el-tabs__item.is-top:last-child {
    padding: 0 20px;
  }
  .el-tabs__item:hover {
    color: #9a888a;
  }
  .el-tabs__item {
    margin-bottom: 20px;
  }
  .el-tabs__active-bar {
    display: none;
  }
  .title {
    padding-bottom: 40px;
  }
  .services-banner__info .title-vs-italic {
    width: unset;
    font-size: 24px;
  }
}

@media (max-width: 1000px) {
  .prob-solution .el-tabs__nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
}
</style>
