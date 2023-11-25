<template>
  <div class="specialist">
    <div class="container">
      <service-top :title="title" :text="text" data="specialists" />
      <swiper
        :slidesPerView="3"
        :spaceBetween="0"
        :autoplay="{
          delay: 1500,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :modules="modules"
        :breakpoints="{
          100: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          530: {
            slidesPerView: 2,
            spaceBetween: 0,
          },

          820: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="item of persons">
          <specialists-card
            @click="detail(item._id)"
            :img="`${url}/${item.avatar[0].response}`"
            :name="item.name"
            :lname="item.lname"
            :sname="item.sname"
            :profession="item.profession"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['persons'])
import {ref} from 'vue'
import { storeToRefs } from 'pinia';
import serviceTop from "../service/service-comp/service-top.vue";
import specialistsCard from "./specialists-comp/specialists-card.vue";
import router from "@/router/index.js";
const title = ref("Наши специалисты");
const text = ref("Все специалисты");

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = ref([Autoplay, Pagination, Navigation]);


import { useHelperStore } from '../../stores/admin/helpers';
const {url} = storeToRefs(useHelperStore())

const detail = (id) => {
  router.push(`specialist/${id}`);
};

</script>

<style lang="scss">
.specialist {
  padding-top: 160px;
  .swiper {
    padding-top: 42px;
    margin-left: -15px;
    margin-right: -15px;
    &-slide {
      padding: 15px;
    }
    &-pagination {
      display: none;
    }
  }
}
</style>
