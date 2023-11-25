<template>
    <div class="services-banner">
      <Dialog />
      <el-row>
        <el-col :span="12" :xs="24">
          <div class="services-banner__info">
            <div class="title-vs-italic">
              {{ obj.title }}
            </div>
            <div class="text light" v-if="obj.text">
              {{ obj.text }}
            </div>
            <div class="btn-group">
              <el-button @click="servicesModal()" class="btn-info"
                >Записаться</el-button
              >
            </div>
          </div>
        </el-col>
        <el-col :span="12"> 
            <!-- <img :src="`${url}/${}`" alt=""> -->
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(["obj"]);
  import { storeToRefs } from "pinia";
  
  import { useHelperStore } from "@/stores/admin/helpers";
  import { useDialogStore } from "@/stores/dialog/dialog";
  const { url } = storeToRefs(useHelperStore());
  const { setRecordDialog } = useDialogStore();
  const servicesModal = () => {
    setRecordDialog(true);
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
    .services-cards {
      .el-row {
        display: none;
      }
    }
  }
  </style>
  