<template>
  <div class="about-center">
    <div class="container">
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

import { useAnaliticStore } from "../../stores/analitic/analitic";
const { aboutCenterAnalitic } = useAnaliticStore();

import { ref } from "vue";
const buttonTitle = ref("Посетить центр");
const title = ref("Запишитесь на консультацию");
const text = ref(
  "Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
);
const agreeText = ref(
  "Я соглашаюсь с политикой обработки персональных данных и пользовательским соглашением, а также даю согласие на обработку персональных данных."
);
</script>

<style lang="scss">
.about-center {
  background-color: #f9faff;
}




</style>
