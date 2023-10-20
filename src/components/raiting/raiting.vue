<template>
  <div class="raiting">
    <div class="container">
      <div class="title">Рейтинги независимых сервисов</div>
      <el-row class="raiting-row">
            <el-col
              :span="6"
              :sm="12"
              :md="6"
              :xs="20"
              class="raiting-col"
              v-for="(item, index) of raiting"
              :key="index"
            >
              <raiting-number
                :number="item.number"
                :title="item.title"
                :text="item.text"
                :bg="item.bg"
              />
            </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import raitingNumber from "./raiting-comp/raiting-number.vue";

import yandex from "@/assets/logo/yandex.png";
import ogis from "@/assets/logo/o2gis.png";
import sber from "@/assets/logo/sber.png";
import prodoc from "@/assets/logo/product.png";

import { ref } from "vue";

const raiting = ref([
  {
    number: '5.0',
    title: "Яндекс",
    text: "498 отзыва",
    bg: yandex,
  },
  {
    number: '4.8',
    title: "2GIS ",
    text: "340 отзыва",
    bg: ogis,
  },
  {
    number: '4.1',
    title: "Сбер Здоровье",
    text: "80 отзыва",
    bg: sber,
  },
  {
    number: '4.8',
    title: "ПроДокторов",
    text: "1169 отзыва",
    bg: prodoc,
  },
]);
</script>
<style lang="scss">
@import "@/styles/vars/colors.scss";

.raiting {
  position: relative;
  z-index: 1;
    padding-top: 60px;
    &-row {
        padding-top: 50px;
        margin-left: -15px;
        margin-right: -15px;
    }
  &-col {
    padding: 0px 15px;
  }
  &-item {
    padding: 30px 25px 30px 30px;
    position: relative;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
    display: flex;
    align-items: center;
    gap: 18px;
    overflow: hidden;
    img {
      position: absolute;
      bottom: 0px;
      right: 4px;
    }
  }
  &-number {
    font-size: 40px;
    font-weight: 600;
    color: $brownBlack;
    z-index: 10;
  }
  &-title {
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
    color: $brownBlack;
    line-height: 27px;
  }
  &-text {
    font-size: 13px;
    font-weight: 200;
    color: $brownBlack;
    line-height: 20px;
    z-index: 10;
  }
}


@media (max-width: 1070px) {
  .raiting {
    &-item {
      padding-left: 10px;
    }
  }
}


@media (max-width: 1000px) {
  .raiting {
    .raiting-row {
      padding-top: 10px;
      .el-col {
        margin-top: 40px;
      }
    }
  }
}

@media (max-width: 992px) {
  .raiting {
    &-item {
      padding-left: 30px;
    }
  }
}

@media (max-width: 768px) {
  .raiting {
    .raiting-row {
      justify-content: center;
    }
    .title {
      padding-left: 20px;
    }
  }
}
@media (max-width: 650px) {
  .raiting {
    &-col {
      padding: 0;
    }
  }
}
@media (max-width: 550px) {
  .raiting {
    .title {
      padding-left: 0;
    }
    &-row {
      .el-col-xs-20 {
        max-width: 92%;
        flex: 0 0 92%;
      }
    }
  }
}


</style>
