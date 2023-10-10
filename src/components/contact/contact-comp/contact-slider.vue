<template>
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
    <swiper-slide>
      <img src="@/assets/img/contact-img.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/contact-img.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/contact-img.png" alt="" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import 'swiper/css/navigation';

// import './style.css';

// import required modules
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
