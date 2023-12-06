<template>
  <div class="services-about">
    <div class="container">
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Аппаратная косметология</span>
        <span>Фракционный микроигольчатый RF-лифтинг</span>
      </div>
      <div class="wrapper">
      <div class="phone">
          <img src="@/assets/logo/phone2.png" alt="" />
        </div>
    </div>
      <servicesBanner :obj="dataItem" />
      <div class="title">О процедуре</div>
      <ul class="services-about__texts">
        <li class="text">
          {{ dataItem.text }}
        </li>
      </ul>
      <analitic :obj="dataItem" />
      <prob-solution :problems="dataProblem"/>
      <services-process :process="dataProcess" />
      <specialists :persons="expertsAll"/>
      <indications :procedure="dataProcedure"/>
      <specAccordion :question="dataQuestion"/>
      <priceAccordion :price="dataPrice" :title="dataItem.title"/>
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
import {storeToRefs} from 'pinia'
import { useRoute } from "vue-router";
const dataItem = ref({})
const dataProblem = ref([])
const dataProcess = ref([]) 
const dataProcedure = ref({})
const dataQuestion = ref([])
const dataPrice = ref([])

import servicesBanner from "./services-banner.vue";
import analitic from "@/components/page/analistic/analitic.vue";
import probSolution from "./services-about-comp/probSolution.vue";
import servicesProcess from "./services-about-comp/services-process.vue";
import indications from "./services-about-comp/indications.vue";
import specAccordion from "../../specialist/info-specialist/comp/specAccordion.vue";
import priceAccordion from "../../specialist/info-specialist/comp/priceAccordion.vue"
import specialists from "@/components/specialists/specialists.vue";

import forma from "@/components/form/forma.vue";



import { useMoreServiceStore } from "@/stores/data/service/more-service";
import {useExpertsStore} from '@/stores/data/expert'
import { useRecordServiceStore } from "@/stores/data/recordService";

const {get_moreServicesAll} = useMoreServiceStore()
const {expertsAll} = storeToRefs(useExpertsStore())
const {get_all_expertsAll} = useExpertsStore()
const { setDetailToggle } = useRecordServiceStore();






onMounted(async ()=> {
  window.scrollTo(0, 0)
  setDetailToggle(false)
  get_all_expertsAll()
  await get_moreServicesAll(useRoute().params.id)
  .then(res => {
    console.log(res.data);
    dataItem.value = {...res.data.serviceItem}
    dataProblem.value = [...res.data.serviceItemProblem]
    dataProcess.value = [...res.data.serviceProcess]
    dataProcedure.value = {...res.data.procedure[0]}
    dataQuestion.value = [...res.data.serviceQuestion]
    dataPrice.value = [...res.data.servicePrice]
  })
})
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
