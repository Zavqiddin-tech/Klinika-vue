<template>
  <div class="price-services">
    <div class="wrapper">
      <div class="phone">
          <img src="@/assets/logo/sms.png" alt="" />
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
import {onMounted} from 'vue'
import { storeToRefs } from "pinia";
import infoAccordion from "../specialist/info-specialist/comp/infoAccordion.vue";
import forma from "@/components/form/forma.vue";

import { useAccordionStore } from "@/stores/accordion/accordion";
const { infoPriceAccordion } = storeToRefs(useAccordionStore());


onMounted(() => {
  window.scrollTo(0, 0)
});
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
        .demo-info__price-services {
          &:last-child {
            .price-services__title {
              border-bottom: unset;
            }
            .price-services__bottom {
              border-bottom: unset;
              &:last-child {
                border-bottom: unset;
              }
            }
          }
          &.active {
            .price-services__title {
              border-bottom: 1px solid #d6d6d6;
            }
            .price-services__bottom {
              max-height: 300px;
              overflow: auto;
              border-bottom: 1px solid #d6d6d6;
            }
            .price-services__title::after {
              border-color: #000;
            }
          }
          .price-services__bottom {
            max-height: 0;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            transition: 0.3s;
            .demo-accordion__text {
              padding: 22px 0;
              padding-left: 80px;
            }
            .demo-accordion__price {
              padding-top: 22px;
            }
          }
          .price-services__title {
            padding: 21px 32px;
            border-bottom: 1px solid #d6d6d6;
            padding-left: 64px;
            color: #546272;
            font-size: 18px;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 40px;
              height: 40px;
              border: 1px solid #d6d6d6;
              top: 13px;
              right: 32px;
              border-radius: 50%;
            }
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
      top: 500px;
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
