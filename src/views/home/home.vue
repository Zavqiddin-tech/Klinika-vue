<template>
  <div class="home">
    <banner-slider :button_title="buttonTitle" />
    <service-vue />
    <about-vue />
    <div class="main">
      <specialists />
      <comment />
      <contact />
      <raiting />
      <forma :title="title" :text="text" :agreeText="agreeText"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const buttonTitle = ref("Подробнее");
const title = ref("Запишитесь на консультацию");
const text = ref(
  "Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
);
const agreeText = ref(
  "Я соглашаюсь с политикой обработки персональных данных и пользовательским соглашением, а также даю согласие на обработку персональных данных."
);

import bannerSlider from "@/components/page/banner/banner-slider.vue";
import serviceVue from "../../components/service/service.vue";
import aboutVue from "../../components/about/about.vue";
import specialists from "../../components/specialists/specialists.vue";
import comment from "../../components/comments/comment.vue";
import contact from "../../components/contact/contact.vue";
import raiting from "../../components/raiting/raiting.vue";
import forma from "../../components/form/forma.vue";

// store
import { specialistStore } from "../../stores/specialist/specialist";
const { setSpecialist } = specialistStore();
// store

onMounted(() => {
  setSpecialist(false);
});
</script>

<style lang="scss"></style>
