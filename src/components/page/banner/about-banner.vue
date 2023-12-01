<template>
  <div class="about-top">
    <el-row v-if="aboutData[0]">
      <el-col :span="12" :xs="20">
        <div class="about-top__info">
          <div class="about-title">
            {{ aboutData[0].title }}
            <span></span>
          </div>
          <div class="about-text">
            {{ aboutData[0].text }}
          </div>
          <el-button round class="btn-info" @click="nextAboutCenter()">{{ button_title }}</el-button>
        </div>
      </el-col>
      <el-col :span="12" :xs="20">
        <div class="about-top__img">
          <img src="@/assets/img/about-klinika.png" alt="" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
defineProps(["aboutData", "button_title"]);
import router from '@/router/index'

const nextAboutCenter = ()=> {
  router.push('/about-center')
}

import {useAboutStore} from '@/stores/data/dash-about'
const {aboutData} = storeToRefs(useAboutStore())
const {get_all_aboutData} = useAboutStore()

onMounted(()=> {
  get_all_aboutData()
})
</script>

<style lang="scss">
.about {
  &-top {
    &__img {
      img {
        width: 100%;
        object-fit: cover;
        transform: translateY(-50px);
      }
    }
  }
  &-title {
    width: 400px;
    color: #546272;
    font-family: Cormorant Garamond;
    font-size: 40px;
    font-style: italic;
    font-weight: 600;
    line-height: 44px;
    span {
      font-family: "Manrope";
      font-style: normal;
      font-size: 30px;
    }
  }
  &-text {
    padding: 35px 0px 40px;
    color: #546272;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 27px; /* 150% */
  }
}


// Media query
@media (max-width: 1000px) {
 .about-title {
  font-size: 35px;
  span {
    font-size: 28px;
  }
 }
 .about-text {
  font-size: 16px;
 }
}

@media (max-width: 900px) {
  .about-title {
  font-size: 30px;
  span {
    font-size: 23px;
  }
 }
 .about-text {
  font-size: 15px;
 }
  .about-top__img img {
    transform: translateY(0px);
  }
}


@media (max-width: 768px) {
  .about-top {
    .el-row {
      justify-content: center;
    }
  }
}

@media (max-width: 400px) {
  .about-title {
    width: 300px;
  }
}

</style>
