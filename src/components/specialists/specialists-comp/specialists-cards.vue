<template>
  <div class="specialists-cards">
    <el-row>
      <el-col :span="8" :xs="12"   v-for="person of specialPersons">
        <specialists-card
          @click="detail()"
          :img="person.img"
          :title="person.title"
          :text="person.text"
        />
      </el-col>
      <el-col :span="8" :xs="15">
        <div v-if="specialistToggle" class="specialists-card consul">
          <div class="consul-title">Запишитесь на консультацию</div>
          <div class="consul-text">
            Свяжитесь с нашими администраторами - они сориентируют вас и запишут
            к необходимому специалисту в удобное для вас время
          </div>
          <div class="consul-numbers d-flex align-center justify-between">
            <div class="consul-number">+7 (861) 202-0-202</div>
            <div class="consul-icon">
              <div></div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
defineProps(["specialPersons"]);
import {storeToRefs} from 'pinia'
import specialistsCard from "./specialists-card.vue";

import router from '@/router/index.js'

// stores
import { specialistStore } from "../../../stores/specialist/specialist";
const {specialistToggle} = storeToRefs(specialistStore()) 
// stores



const detail = ()=> {
  if (specialistToggle.value) {
    router.push('specialist/:id')
  }
}
</script>












<style lang="scss">

.specialists {
  &-cards {
    padding-top: 42px;
    margin-left: -15px;
    margin-right: -15px;
    .el-col {
      padding: 15px;
    }
  }
  &-card {
    position: relative;
    background-color: #f8ece9;
    border-radius: 24px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-info {
    margin-left: 32px;
    position: absolute;
    bottom: 30px;
  }
  &-title {
    width: 250px;
    padding-bottom: 12px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    color: #546272;
  }
  &-text {
    font-weight: 200;
    line-height: 24px;
  }
}

.consul {
  padding: 15px;
  &-title {
    font-size: 24px;
    font-weight: 600;
    color: #546272;
  }
  &-text {
    padding-top: 20px;
    padding-bottom: 130px;
    font-weight: 200;
    color: #546272;
  }
  &-number {
    font-size: 20px;
    font-weight: 600;
    color: #546272;
  }
  &-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #d3caca;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #C4B9BA;
    }
  }
}


@media (max-width: 1000px) {
  .specialists {
    &-info  {
      margin-left: 10px;
      bottom: 10px;
    }
    &-title {
      font-size: 18px;
    }
    &-text {
      font-size: 15px;
    }
  }
}

@media (max-width: 768px) {
  .specialists-cards {
    .el-row {
      justify-content: center;
    }
  }
}

@media (max-width: 560px) {
  .specialists-cards {
    .el-row {
      .el-col-xs-12 {
        max-width: 80%;
        flex: 0 0 80%;
      }
      .el-col-xs-15 {
        max-width: 80%;
        flex: 0 0 80%;
      }
    }
  }
}


@media (max-width: 375px) {
  .specialists-cards .el-row {
    .el-col-xs-12 {
      max-width: 90%;
      flex: 0 0 90%;
    }
    .el-col-xs-15 {
      margin: 20px 0;
      padding: 0;
    }
  }
  .consul-number {
    font-size: 16px;
  }
  .consul-icon {
    width: 40px;
    height: 40px;
    div {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
