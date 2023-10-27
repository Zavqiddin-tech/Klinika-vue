<template>
  <div class="specialist-section">
    <loader />
    <div class="container">
      <div class="line-star">
        <img src="../../assets/logo/line-star2.png" alt="" />
      </div>
      <div class="star">
        <img src="../../assets/logo/star-big.png" alt="" />
      </div>
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Наши специалисты</span>
      </div>
      <div class="title">Наши специалисты</div>
      <div class="about-text">
        Все врачи Центра косметологии Клиники Екатерининская являются
        дипломированными специалистами с многолетним медицинским опытом, что
        позволяет им достигать отличных результатов в устранении различных
        эстетических проблем кожи и волос. За плечами специалистов более 10 000
        часов практики и 1 000 часов, проведенных на обучающих курсах.
        Врачи-косметологи регулярно повышают свою квалификацию, проходя обучение
        в Москве, Санкт-Петербурге и зарубежных образовательных центрах.
      </div>
      <specialists-cards :experts="expertsActive" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import specialistsCards from "@/components/specialists/specialists-comp/specialists-cards.vue";
import loader from "../../components/page/loader/loader.vue";

// store
import {useExpertsStore} from '@/stores/data/expert'
const {get_active_experts} = useExpertsStore()
const {expertsActive} = storeToRefs(useExpertsStore())
// store

onMounted(() => {
  window.scrollTo(0, 0);
  get_active_experts()
});
</script>

<style lang="scss">
.specialist-section {
  position: relative;
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
  .specialists-cards {
    position: relative;
    z-index: 1;
  }
  &:after {
    content: "";
    width: 400px;
    height: 600px;
    background-image: url("../../assets/logo/triagles-white.png");
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: contain;
    position: absolute;
    right: 0;
    bottom: -70px;
  }
}
</style>
