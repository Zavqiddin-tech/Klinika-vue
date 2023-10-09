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
import {onMounted} from 'vue'
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
    @media (max-width: 768px) {
      .stock-img {
        text-align: center;
      }
    }
</style>