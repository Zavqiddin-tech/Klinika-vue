<template>
  <div class="home">
    <div class="wrapper">
      <a href="tel:+998931234567">
        <div class="phone">
        <img src="../../assets/logo/phone2.png" alt="" />
      </div>
      </a>
    </div>
    <banner-slider :button_title="buttonTitle" />
    <service-vue />
    <about-vue />
    <div class="main">
      <specialists :persons="expertsAll" />
      <comment />
      <contact />
      <raiting />
      <forma :title="title" :text="text" :agreeText="agreeText" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
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
import specialists from "@/components/specialists/specialists.vue";
import comment from "../../components/comments/comment.vue";
import contact from "@/components/contact/contact.vue";
import raiting from "../../components/raiting/raiting.vue";
import forma from "../../components/form/forma.vue";



// store
import {useExpertsStore} from '@/stores/data/expert'
const {expertsAll} = storeToRefs(useExpertsStore())
const {get_all_expertsAll} = useExpertsStore()

import { specialistStore } from "../../stores/specialist/specialist";
const { setSpecialist } = specialistStore();
// store

onMounted(() => {
  setSpecialist(false);
  window.scrollTo(0, 0)
  get_all_expertsAll()
});
</script>

<style lang="scss">
@import "../../styles/vars/phone.scss";
.home {
  transition: 0.4s;
  position: relative;
  &:after {
    content: "";
    width: 400px;
    height: 600px;
    background-image: url("../../assets/logo/triagles.png");
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: contain;
    position: absolute;
    right: 0;
    bottom: -70px;
    opacity: 0.4;
  }
}
</style>
