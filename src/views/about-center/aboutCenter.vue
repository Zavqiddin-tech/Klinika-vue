<template>
  <div class="about-center">
    <loader />
    <div class="container">
      <div class="line-star">
        <img src="../../assets/logo/line-star2.png" alt="">
      </div>
      <div class="star">
        <img src="../../assets/logo/star-big.png" alt="">
      </div>
      <div class="breadcrumb">
        <span>Главная</span>
        <span>О центре</span>
      </div>
      <about-banner :button_title="buttonTitle" />
      <analitic :array="aboutCenterAnalitic" />
      <flex-items />
      <forma :title="title" :text="text" :agreeText="agreeText" />
    </div>
  </div>
</template>

<script setup>
import forma from "../../components/form/forma.vue";
import aboutBanner from "@/components/page/banner/about-banner.vue";
import analitic from "../../components/page/analistic/analitic.vue";
import flexItems from "./components/flex-items.vue";
import loader from "../../components/page/loader/loader.vue";

import { useAnaliticStore } from "../../stores/analitic/analitic";
const { aboutCenterAnalitic } = useAnaliticStore();

import { ref, onMounted } from "vue";
const buttonTitle = ref("Посетить центр");
const title = ref("Запишитесь на консультацию");
const text = ref(
  "Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
);
const agreeText = ref(
  "Я соглашаюсь с политикой обработки персональных данных и пользовательским соглашением, а также даю согласие на обработку персональных данных."
);

onMounted(()=> {
  window.scrollTo(0, 0)
})
</script>

<style lang="scss">
.about-center {
  background-color: #f9faff;
  position: relative;
  .breadcrumb {
    padding-bottom: 90px;
  }
  .container {
    position: relative;
    .line-star {
      position: absolute;
      left: -300px;
      top: 1000px;
      opacity: 0.3;
    }
    .star {
      position: absolute;
      right: -320px;
      top: 900px;
      opacity: 0.3;
    }
  }
  .analitic {
    position: relative;
  }
  &:after {
    content: '';
    width: 400px;
    height: 600px;
    background-image: url('../../assets/logo/triagles-white.png');
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: contain;
    position: absolute;
    right: 0;
    bottom: -70px;
  }
}
</style>
