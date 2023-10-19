<template>
  <div class="specialist">
    <div class="container">
      <service-top :title="title" :text="text" data="specialists"/>
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
            @click="detail()"
            :img="item.img"
            :title="item.title"
            :text="item.text"
            :profession="item.profession"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import serviceTop from "../service/service-comp/service-top.vue";
import specialistsCard from "./specialists-comp/specialists-card.vue";
import router from "@/router/index.js";
// const title = ref('Наши специалисты')
// const text = ref('Все специалисты')

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const title = 'salom'
export default {
  props: ["persons", "title", "text"],
  components: {
    Swiper,
    SwiperSlide,
    serviceTop,
    specialistsCard,
  },
  data() {
    return {
      title: 'Наши специалисты',
      text: 'Все специалисты'
    }
  },
  methods: {
    detail: function () {
      router.push("specialist/:id");
    },
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
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
