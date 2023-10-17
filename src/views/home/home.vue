<template>
  <div class="home">
    <div class="wrapper">
      <div class="phone">
        <img src="../../assets/logo/phone2.png" alt="" />
      </div>
    </div>
    
    <banner-slider :button_title="buttonTitle" />
    <service-vue />
    <about-vue />
    <div class="main">
      <specialists
        :persons="persons"
        title="Наши специалисты"
        text="Все специалисты"
      />
      <comment />
      <contact />
      <raiting />
      <forma :title="title" :text="text" :agreeText="agreeText" />
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

import specialist4 from "@/assets/img/specialist-4.png";
const persons = ref([
  {
    img: specialist4,
    title: "Бекетова Екатерина Николаевна",
    text: "Дерматовенеролог cтаж 11 лет",
  },
  {
    img: specialist4,
    title: "Бекетова Екатерина Николаевна",
    text: "Дерматовенеролог cтаж 11 лет",
  },
  {
    img: specialist4,
    title: "Бекетова Екатерина Николаевна",
    text: "Дерматовенеролог cтаж 11 лет",
  },
  {
    img: specialist4,
    title: "Бекетова Екатерина Николаевна",
    text: "Дерматовенеролог cтаж 11 лет",
    profession: "+ 2 специальности",
  },
]);

// store
import { specialistStore } from "../../stores/specialist/specialist";
const { setSpecialist } = specialistStore();
// store

onMounted(() => {
  setSpecialist(false);
  window.scrollTo(0, 0)
});
</script>

<style lang="scss">
@import "../../styles/vars/phone.scss";
.home {
  
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
