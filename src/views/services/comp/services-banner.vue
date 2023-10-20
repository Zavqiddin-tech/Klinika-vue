<template>
  <div class="services-banner">
    <Dialog />
    <el-row>
      <el-col :span="12" :xs="24">
        <div class="services-banner__info">
          <div class="title-vs-italic">
            <span>{{ obj.titleItalic }}</span>
            {{ obj.title }}
          </div>
          <div class="text light">
            {{ obj.text }}
          </div>
          <div class="btn-group">
            <el-button @click="servicesDetail(obj)"
              v-if="obj.leftBtn" 
              round 
              class="btn-white big"
              >Подробнее
            </el-button>
            <el-button @click="servicesModal()" class="btn-info"
              >Записаться</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div class="services-banner__img">
          <img src="@/assets/img/services-about.png" alt="" />
          <img :src="obj.img" alt="" />
        </div>
      </el-col>
    </el-row>
    <div class="services-cards">
      <el-row>
        <el-col v-if="obj.cards" :span="6" :xs="10" v-for="item in obj.cards">
          <div class="services-card">
            <div class="services-card__text">
              {{ item.text }}
            </div>
            <el-button @click="servicesDetail(obj)" class="btn-white" round>Подробнее</el-button>
          </div>
        </el-col>
        <div
          v-if="obj.bottomBtn"
          class="width-full mt-25 d-flex justify-center"
        >
          <el-button class="btn-white" round
            >Показать еще</el-button
          >
        </div>
      </el-row>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["obj"]);
import router from '@/router/index'
import Dialog from "../../../components/page/dialog/dialog.vue";

import { useDialogStore } from "@/stores/dialog/dialog";
const {setRecordDialog} = useDialogStore()
const servicesModal = ()=> {
setRecordDialog(true)
}


import { useServicesStore } from "@/stores/services/services";
const { setServicesAboutObj } = useServicesStore();

const servicesDetail = (val)=> {
  setServicesAboutObj(val)
  router.push("/services-detail/:id");
}
</script>

<style lang="scss">
.services-banner {
  margin-bottom: 24px;
  padding: 40px 30px;
  background-color: #e7e1e0;
  border-radius: 24px;
  &__info {
    height: 100%;
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
    .title-vs-italic {
      width: 230px;
      line-height: 44px;
    }
    .text {
      font-size: 18px;
      padding-top: 30px;
      padding-bottom: 40px;
    }
  }
  &__img {
    text-align: right;
  }
  .services-cards {
    .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .el-col {
        padding: 0px 12px;
      }
    }
  }
  .services-card {
    height: 180px;
    padding: 20px;
    position: relative;
    border-radius: 24px;
    background-color: #f9faff;
    &__text {
      padding-bottom: 12px;
      color: #546272;
      font-weight: 200;
      font-size: 20px;
      line-height: 30px;
    }
    .el-button {
      position: absolute;
      bottom: 15px;
    }
  }
}

@media (max-width: 1000px) {
  .services-banner__info {
    .title-vs-italic {
      line-height: 35px;
    }
    .text.light {
      font-size: 16px;
    }
  }
  .services-banner {
    .services-card__text {
      font-size: 16px;
      line-height: 25px;
    }
  }
}

@media (max-width: 768px) {
  .services-cards {
    .el-row {
      display: none;
    }
  }
}
</style>
