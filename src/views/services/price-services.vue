<template>
  <div class="price-services">
    <div class="phone-item">
      <div><img src="../../assets/logo/sms.png" alt="" /></div>
    </div>
    <div class="container">
      <div class="line-star">
        <img src="../../assets/logo/line-star2.png" alt="" />
      </div>
      <div class="star">
        <img src="../../assets/logo/star-big.png" alt="" />
      </div>
      <div class="title">Стоимость услуг</div>
      <infoAccordion :infoAccordion="infoPriceAccordion" />
      
    </div>
    <forma
      title="Запишитесь на консультацию"
      text="Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
      agreeText="Я соглашаюсь с политикой обработки персональных данных  и пользовательским соглашением, а также даю согласие на обработку персональных данных."
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import infoAccordion from "../specialist/info-specialist/comp/infoAccordion.vue";
import forma from "@/components/form/forma.vue";

import { useAccordionStore } from "@/stores/accordion/accordion";
const { infoPriceAccordion } = storeToRefs(useAccordionStore());
</script>

<style lang="scss">
.price-services {
  .container {
    position: relative;
    .demo-collapse {
      .demo-accordion {
        .demo-info {
          padding-left: 0;
        }
        .demo-info__prices {
          padding: 22px 0;
          padding-left: 64px;
          border-bottom: 1px solid #d6d6d6;
          &:last-child {
            border-bottom: unset;
          }
        }
        &__price {
          padding-right: 32px;
          font-size: 18px;
          font-weight: 700;
          color: #546272;
          white-space: nowrap;
        }
        &__text {
          padding-top: 0;
          max-width: 80%;
          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
        }
      }
    }
    .line-star {
      position: absolute;
      left: -200px;
      top: 60px;
      opacity: 0.3;
    }
    .star {
      position: absolute;
      right: -320px;
      top: 400px;
      opacity: 0.3;
    }
  }
}
</style>
