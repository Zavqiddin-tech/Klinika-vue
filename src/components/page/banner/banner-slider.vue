<template>
  <div class="banner-slider">
    <div class="container">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in 6">
          <el-row>
            <el-col :span="12" class="banner-slider-info">
              <div class="banner-slider-title">-50% на перманентный макияж</div>
              <div class="banner-slider-text">Весь март</div>
              <el-button type="info" round class="btn-info"
                >Подробнее</el-button
              >
            </el-col>
            <el-col :span="12" class="banner-slider-image">
              <img src="@/assets/img/girl.png" alt="" />
            </el-col>
          </el-row>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
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
.swiper {
  position: relative;
  &-button-prev {
    display: none;
  }
  &-button-next {
    display: none;
  }
  .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 100px;
  }
  &-pagination {
    text-align-last: left;
    &-bullet {
      width: 12px;
      height: 12px;
      background-color: #ffffff;
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background-color: #9a888a;
      }
    }
  }
}
.banner-slider {
  margin-top: 32px;
  background-color: #ded6d5;
  &-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-title {
    padding-top: 130px;
    line-height: 60px;
    font-size: 40px;
    font-weight: 600;
    color: #546272;
  }
  &-text {
    padding-top: 32px;
    padding-bottom: 56px;
    color: #546272;
    font-size: 24px;
    font-weight: 200;
  }
}

@media (max-width: 1125px) {
  .swiper {
    .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: 50px;
    }
  }
}

@media (max-width: 1000px) {
  .banner-slider-title {
    font-size: 32px;
    line-height: 42px;
  }
  .banner-slider-text {
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
  }
}

@media (max-width: 900px) {
  .banner-slider-title {
    padding-top: 70px;
    font-size: 28px;
    line-height: 35px;
  }
  .banner-slider-text {
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .banner-slider-image {
    display: flex;
    align-items: center;
    img {
      width: 420px;
      height: 420px;
      object-fit: unset;
    }
  }
}

@media (max-width: 740px) {
  .swiper {
    .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: 10px;
    }
    
  }
}
@media (max-width: 672px) {
  .swiper {
    .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: 10px;
    }
    &-pagination {
      text-align-last: center;
    }
  }
}

@media (max-width: 530px) {
  .banner-slider {
    .container {
      padding: 0px;
      .el-row {
        .el-col-12 {
          max-width: 100%;
          flex: 0 0 100%;
        }
      }
    }
    &-info {
      padding-left: 10px;
    }
    &-title {
      font-size: 25px;
    }
    &-text {
      font-size: 18px;
    }
    .el-carousel__container {
      height: 100%;
    }
    .el-carousel {
      height: 700px;
    }
  }
}
</style>
