<template>
  <div class="services">
    <div class="container">
      <div class="title">Услуги</div>
      <div class="services-items">
        <services-banner 
          v-for="obj in servicesArray" 
          :obj="obj" 
          @click="servicesAbout(obj)"
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
import router from '@/router/index.js'
import servicesBanner from "@/views/services/comp/services-banner.vue";
import forma from "@/components/form/forma.vue";


import { storeToRefs } from "pinia";
import { useServicesStore } from "@/stores/services/services";
const { servicesArray } = storeToRefs(useServicesStore());
const {setServicesAboutObj} = useServicesStore()

const servicesAbout = (obj) => {
  setServicesAboutObj(obj)
  router.push( "/services-detail/:id")
}

</script>

<style lang="scss">
.services {
  .title {
    padding-top: 30px;
  }
  background-color: #F4F3F7;
  &-banner {
    transition: 0.25s;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 5px 10px #595959;
      transform: translateY(-8px);
    }
  }
  &-items {
    padding-top: 66px;
  }
}


@media (max-width:768px) {
  .services-items {
    padding-top: 40px;
  }
}
</style>
