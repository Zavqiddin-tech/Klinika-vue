<template>
  <div class="services">
    <div class="wrapper">
      <div class="phone">
        <img src="@/assets/logo/phone2.png" alt="" />
      </div>
    </div>
    <div class="container">
      <div class="line-star">
        <img src="../../assets/logo/line-star2.png" alt="" />
      </div>
      <div class="star">
        <img src="../../assets/logo/star-big.png" alt="" />
      </div>
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Услуги</span>
      </div>
      <div class="title">Услуги</div>
      <div class="services-items">
        <services-banner
          v-for="obj in services"
          :obj="obj"
        />
        <forma
          title="Запишитесь на консультацию"
          text="Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
          agreeText="Я соглашаюсь с политикой обработки персональных данных  и пользовательским соглашением, а также даю согласие на обработку персональных данных."
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from "pinia";
import servicesBanner from "@/views/services/comp/services-banner.vue";
import forma from "@/components/form/forma.vue";

import {useServiceStore} from '@/stores/data/service/service'
import { useRecordServiceStore } from "@/stores/data/recordService";


const {get_all_servicesAll} = useServiceStore()
const {services} = storeToRefs(useServiceStore())
const { setDetailToggle } = useRecordServiceStore()


onMounted(()=> {
  window.scrollTo(0, 0)
  setDetailToggle(true)
  get_all_servicesAll()
})
</script>

<style lang="scss">
@import "@/styles/vars/phone.scss";
.services {
  position: relative;
  background-color: #f4f3f7;
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
  &:after {
    content: "";
    width: 400px;
    height: 400px;
    background-image: url("../../assets/logo/triagles-white.png");
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &-banner {
    transition: 0.25s;
    cursor: pointer;
    border-radius: 24px;
    background: #e7e1e0;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
  }
  &-items {
    padding-top: 66px;
    position: relative;
  }
}

@media (max-width: 768px) {
  .services-items {
    padding-top: 40px;
  }
}
</style>
