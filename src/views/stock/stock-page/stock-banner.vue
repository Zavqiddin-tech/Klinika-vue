<template>
      <el-row class="stock-banner">
        <el-col :span="12" :xs="24">
          <div class="stock-info">
            <div class="about-title">
              <span>{{ title }}</span> <br> {{ titleItalick }}
            </div>
            <div class="about-text">
              {{ text }}
            </div>
            <el-button class="btn-info" @click="routerStock()">{{ buttonText }}</el-button>
          </div>
        </el-col>
        <el-col :span="12" :xs="24">
         <div class="stock-img">
            <img :src="img" alt="">
         </div>
        </el-col>
      </el-row>
</template>

<script setup>
import { storeToRefs } from "pinia";
const props = defineProps(['title', 'titleItalick', 'text', 'img', 'buttonText'])
import router from "@/router/index.js"


import {useStock} from "@/stores/stock/stock.js"
const {orderStock} = storeToRefs(useStock())



const routerStock = ()=> {
  if(orderStock.value) {
    router.push("/stock-order-detail")
  } else {
    router.push("/stock-order")
  }
}
</script>

<style lang="scss">
.about-title {
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
  .about-text {
    padding: 35px 0px 40px;
    color: #546272;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 27px; 
  }
    @media (max-width: 768px) {
      .stock-img {
        text-align: center;
      }
    }
</style>