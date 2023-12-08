<template>
  <div class="about-top">
    <el-row>
      <el-col :span="12" :xs="24">
        <div class="about-top__info">
          <div class="about-title">
            {{ titleItalic }}
            <span>{{ title }}</span>
          </div>
          <div class="about-text">
            <ul>
              <span class="about-list" v-for="text of textGroup" >
                {{ text.title }}
                <span v-if="text.price">{{ text.price }}</span>
              </span>
            </ul>
          </div>
          <el-button @click="recordConsul()" round class="btn-info"> {{ btnText }} </el-button>
        </div>
      </el-col>
      <el-col :span="12" :xs="18">
        <div class="about-top__img">
          <img :src="infoImg" alt="" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
defineProps(['title', 'titleItalic', 'infoImg', 'textGroup', 'btnText'])

import { useRecordDoctorStore } from "@/stores/data/recordDoctor";
const { setRecordSpec } = useRecordDoctorStore();

const recordConsul = ()=> {
  setRecordSpec(true)
}
</script>

<style lang="scss">
.about {
  &-top {
    &__img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    line-height: 27px; 
  }
}



@media (max-width: 1000px) {
 .about-title {
  font-size: 35px;
 }
}

@media (max-width: 375px) {
  .about-top .el-row {
    .el-col-xs-18 {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
  .about-title {
    font-size: 30px;
    span {
      font-size: 26px;
    }
  }
  .about-list {
    font-size: 14px;
  }
}
</style>
