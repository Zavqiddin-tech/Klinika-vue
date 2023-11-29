<template>
  <div class="info-card">
    <el-row>
      <el-col :span="10" :sm="24" :md="10" :xs="24" class="info-card__img">
        <img :src="`${url}/${img}`" alt="" />
      </el-col>
      <el-col :span="14" :sm="20" :md="14" :xs="24" class="info-card__info">
        <div class="info-card__title">
          <span>{{ title }}</span> <br />
          {{ subtitle }}
        </div>
        <ul>
          <li>{{ subtexts }}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps(["title", "subtitle", "subtexts", "img"]);
import { storeToRefs } from "pinia";

import { useHelperStore } from "../../../../stores/admin/helpers";
const { url } = storeToRefs(useHelperStore());
</script>

<style lang="scss">
.info-card {
  &__info {
    padding-top: 140px;
    padding-left: 60px;
    ul li {
      padding-top: 24px;
      line-height: 40px;
      font-weight: 200;
    }
  }
  &__img {
    overflow: hidden;
    img {
      border-radius: 24px;
      width: 100%;
      height: 450px;
      object-fit: cover;
      vertical-align: middle;
    }
  }
  &__title {
    color: #546272;
    font-size: 24px;
    line-height: 33px;
    padding-bottom: 6px;
    span {
      font-size: 30px;
      font-family: Cormorant Garamond;
      font-style: italic;
    }
  }
}

@media (max-width: 1000px) {
  .info-card__img {
    text-align: center;
  }
}
@media (max-width: 992px) {
  .info-card {
    .info-card__img {
      img {
        max-width: 450px;
      }
    }
  }
}
@media (max-width: 620px) {
  .info-card {
    .info-card__info {
      padding-left: 0;
    }
  }
}
@media (max-width: 510px) {
  .info-card {
    .info-card__img {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
@media (max-width: 400px) {
  .info-card {
    .info-card__info {
      padding-top: 70px;
      padding-left: 0;
    }
    .info-card__title {
      font-size: 18px;
      line-height: 27px;
      span {
        font-size: 26px;
      }
    }
  }
}
</style>
