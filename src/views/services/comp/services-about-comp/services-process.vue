<template>
  <div class="services-process">
    <div class="title">Как проходит процесс</div>
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
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item of process">
        <div class="services-process__item">
          <div class="services-process__title">{{ item.title }}</div>
          <div class="services-process__text">{{ item.text }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  props: ["process"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss">
.services-process {
  padding-top: 98px;
  .swiper {
    padding-top: 40px;
    padding-bottom: 40px;
    &-pagination {
      &-bullet {
        &.swiper-pagination-bullet-active {
          background-color: #9a888a;
        }
      }
    }
  }
  .title {
    padding-bottom: 40px;
    border-bottom: 2px solid #9a888a;

  }
  &__item {
    padding: 0px 40px;
  }
  &__title {
    padding-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
    color: #546272;
  }
  &__text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 200;
  }
}

@media (max-width: 900px) {
  .services-process {
    padding-top: 60px;
    &__title {
      padding-bottom: 20px;
      font-size: 17px;
    }
    &__text {
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
  .services-process {
    .title {
      padding-bottom: 10px;
    }
  }
}

@media (max-width: 375px) {
  .services-process {
  }
}
</style>
