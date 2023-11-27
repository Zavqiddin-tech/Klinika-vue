<template>
  <div class="specialist-section">
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
      <sketelon />
      <specialists-cards :experts="expertsAll" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import sketelon from "@/components/skeleton/sketelon.vue";
import specialistsCards from "@/components/specialists/specialists-comp/specialists-cards.vue";

// store
import { useExpertsStore } from "@/stores/data/expert";
import {useLoadingStore} from '@/stores/loading/loading'
const {setLoading} = useLoadingStore()
const { get_all_expertsAll } = useExpertsStore();
const { expertsAll } = storeToRefs(useExpertsStore());

// store

onMounted(() => {
  setLoading(true)
  window.scrollTo(0, 0);
  get_all_expertsAll();
});
</script>

<style lang="scss">
@import '@/styles/main.scss';
.about {
  &-text {
    padding: 35px 0px 40px;
    color: #546272;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 27px; /* 150% */
  }
}
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
