<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="@/assets/img/info-form.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/info-form.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/info-form.png" alt="" />
      </swiper-slide>
    </swiper>
  </template>
  <script>
  
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/pagination";
  import { Autoplay, Pagination } from "swiper/modules";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination],
      };
    },
  };
  </script>
  
  <style lang="scss">
  .swiper {
      height: 100%;
      border-radius: 24px;
  }
  
  .swiper-wrapper .swiper-slide {
      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
  }
  </style>
  