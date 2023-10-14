<template>
  <div class="services-about">
    <div class="phone-item">
        <div><img src="../../../assets/logo/phone2.png" alt="" /></div>
      </div>
    <div class="container">
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Аппаратная косметология</span>
        <span>Фракционный микроигольчатый RF-лифтинг</span>
      </div>
      <servicesBanner :obj="servicesAboutObj" />
      <div class="title">О процедуре</div>
      <ul class="services-about__texts">
        <li class=" text">
          Фракционный микроигольчатый RF-лифтинг – это процедура омоложения,
          которая запускает процесс обновления кожи за счет воздействия
          радиочастотных импульсов, нагревающих глубокие слои кожи. RF-лифтинг
          проводится с помощью специальных золотых микроигл.
        </li>
        <li class=" text">
          Благодаря нагреванию иглы по всей длине процедура не оставляет следов
          и шрамов, кожа быстро заживает. И такое свойство дает омолаживающий
          эффект: стимулируется выработка эластина и коллагена, кожа очищается,
          улучшается тонус тканей, корректируются морщины и рубцы постакне.
        </li>
        <li class=" text">
          Фракционный микроигольчатый RF-лифтинг проводят на самых разных зонах
          лица и тела, в том числе и самых чувствительных.
        </li>
      </ul>
      <analitic :array="servicesAboutAnalitic" />
      <prob-solution />
      <services-process :process="process" />
      <specialists />
      <indications />
      <infoAccordion :infoAccordion="infoSrAccordion"/>
      <servicesCost />
      <forma
        title="Запишитесь на консультацию"
        text="Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
        agreeText="Я соглашаюсь с политикой обработки персональных данных  и пользовательским соглашением, а также даю согласие на обработку персональных данных."
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import servicesBanner from "./services-banner.vue";
import analitic from "../../../components/page/analistic/analitic.vue";
import probSolution from "./services-about-comp/probSolution.vue";
import servicesProcess from "./services-about-comp/services-process.vue";
import specialists from "@/components/specialists/specialists.vue";
import indications from "./services-about-comp/indications.vue";
import infoAccordion from "../../specialist/info-specialist/comp/infoAccordion.vue";
import servicesCost from "./services-about-comp/servicesCost.vue";
import forma from "@/components/form/forma.vue";

import { useServicesStore } from "../../../stores/services/services";
const { servicesAboutObj, process } = storeToRefs(useServicesStore());

import { useAnaliticStore } from "../../../stores/analitic/analitic";
const { servicesAboutAnalitic } = useAnaliticStore();

import { useAccordionStore } from "../../../stores/accordion/accordion";
const {infoSrAccordion} = storeToRefs(useAccordionStore())
</script>

<style lang="scss">
@import '../../../styles/vars/phone.scss';
.services-about {
  position: relative;
  &:after {
    content: '';
    width: 400px;
    height: 400px;
    background-image: url('../../../assets/logo/triagles-white.png');
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .container {
    .services-cards {
      display: none;
    }
    .analitic {
      margin-top: 72px;
    }
  }
  &__texts {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  &__text {
    line-height: 24px;
  }
}



@media (max-width: 900px) {
  .services-about {
    .specialist {
      padding-top: 70px;
    }
  }
}
</style>
