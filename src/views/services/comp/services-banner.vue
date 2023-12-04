<template>
  <div class="services-banner">
    <recordService :data="obj"/>
    {{ temporary }}
    <el-row>
      <el-col :span="12" :xs="24">
        <div class="services-banner__info">
          <div class="title-vs-italic">
            {{ obj.title }}
          </div>
          <div class="text light">
            {{ obj.text }}
          </div>
          <div class="btn-group">
            <el-button @click="servicesModal(obj)" class="btn-info"
              >Записаться</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div class="services-banner__img" v-if="obj.img">
          <img :src="`${url}/${obj.img[0].response}`" alt="services-img" />
        </div>
        <div class="services-banner__img" v-if="obj.image">
          <img :src="`${url}/${obj.image[0].response}`" alt="services-img" />
        </div>
      </el-col>
    </el-row>
    <div class="services-cards">
      <el-row :class="openToggle ? 'hiddenBanner' : ''">
        <el-col :span="6" :xs="10" v-for="item in obj.serviceItem">
          <div class="services-card">
            <div class="services-card__text">
              {{ item.title }}
            </div>
            <el-button @click="servicesDetail(item._id)" class="btn-white" round>
              Подробнее
            </el-button
            >
          </div>
        </el-col>
      </el-row>
      <div v-if="obj.serviceItem">
        <div class="width-full d-flex justify-center" v-if="obj.serviceItem.length >= 5">
          <el-button @click="openCard()" class="btn-white open-close" round>
            {{ openToggle ? "Показать еще" : "не показывать" }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["obj"]);
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router/index";
import recordService from "@/components/page/dialog/recordService.vue";



import { useHelperStore } from "@/stores/admin/helpers";
import { useDialogStore } from "@/stores/dialog/dialog";
import {useRecordServiceStore} from "@/stores/data/recordService"
const { url } = storeToRefs(useHelperStore());
const { setRecordSpec } = useDialogStore();
const {setTemporary} = useRecordServiceStore()




const servicesModal = (e) => {
  setRecordSpec(true)
  setTemporary(e)
};

const openToggle = ref(true);
const setOpenToggle = () => (openToggle.value = !openToggle.value);
const openCard = () => {
  setOpenToggle();
};
const servicesDetail = (id) => {
  router.push(`services-detail/${id}`);
};



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
      &.hiddenBanner {
        flex-wrap: nowrap;
        overflow: hidden;
      }
      .el-col {
        margin-bottom: 30px;
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
  .services-banner {
    .services-cards {
      .el-row {
        justify-content: center;
        &.hiddenBanner {
          justify-content: unset;
          overflow: auto;
        }
      }
    }
  }
 .open-close {
  margin-top: 20px;
 }
}

@media (max-width: 500px) {
  .services-banner {
    .services-cards {
      .el-row {
        .el-col-xs-10 {
          max-width: 50%;
          flex: 0 0 50%;
        }
      }
    }
    
  }
  .open-close {
    margin-top: 20px;
    display: flex;
  }
}
@media (max-width: 420px) {
  .services-banner {
    .services-cards {
      .el-row {
        justify-content: center;
        &.hiddenBanner {
          justify-content: unset;
        }
        .el-col-xs-10 {
          max-width: 70%;
          flex: 0 0 70%;
        }
      }
    }
    
  }
}
@media (max-width: 420px) {
  .services-banner {
    .services-cards {
      .el-row {
        .el-col-xs-10 {
          max-width: 100%;
          flex: 0 0 100%;
        }
      }
    }
    &__info {
      text-align: center;
      .title-vs-italic {
        width: 100%;
      }
      .btn-group {
        justify-content: center;
      }
    }
    &__img {
      text-align: center;
    }
  }
}
</style>
