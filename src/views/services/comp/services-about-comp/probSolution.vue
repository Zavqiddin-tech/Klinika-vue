<template>
  <div class="prob-solution">
    <div class="title">Какие проблемы решает</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        v-for="item of probMenu"
        :label="item.title"
        :name="item.name"
      >
        <services-banner :obj="item.obj" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeName = ref("first");

import servicesBanner from "../services-banner.vue";

const probMenu = ref([
  {
    name: "first",
    title: "Морщины и признаки старения",
    obj: {
      title: "Морщины и признаки старения",
      text: "Фракционный микроигольчатый RF-лифтинг подтягивает и омолаживает кожу. Выработка коллагена и эластина устраняет дряблость и обвисание кожи, повышает ее упругость, корректирует морщины.",
    },
  },
  {
    name: "second",
    title: "Жирная и проблемная кожа",
    obj: {
      title: "Жирная и проблемная кожа",
      text: "Фракционный микроигольчатый RF-лифтинг подтягивает и омолаживает кожу. Выработка коллагена и эластина устраняет дряблость и обвисание кожи, повышает ее упругость, корректирует морщины.",
    },
  },
  {
    name: "third",
    title: "Повышенная потливость",
    obj: {
      title: "Повышенная потливость",
      text: "Фракционный микроигольчатый RF-лифтинг подтягивает и омолаживает кожу. Выработка коллагена и эластина устраняет дряблость и обвисание кожи, повышает ее упругость, корректирует морщины.",
    },
  },
  {
    name: "fourth",
    title: "Растяжки",
    obj: {
      title: "Растяжки",
      text: "Фракционный микроигольчатый RF-лифтинг подтягивает и омолаживает кожу. Выработка коллагена и эластина устраняет дряблость и обвисание кожи, повышает ее упругость, корректирует морщины.",
    },
  },
  {
    name: "fifth",
    title: "Неровный рельеф кожи",
    obj: {
      title: "Неровный рельеф кожи",
      text: "Фракционный микроигольчатый RF-лифтинг подтягивает и омолаживает кожу. Выработка коллагена и эластина устраняет дряблость и обвисание кожи, повышает ее упругость, корректирует морщины.",
    },
  },
]);
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
