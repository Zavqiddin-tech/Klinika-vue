<template>
  <div class="services-cost">
    <router-link to="/price-services">
      <div class="title">Стоимость услуги</div></router-link
    >
    <infoAccordion :infoAccordion="infoCostAccordion" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import infoAccordion from "../../../specialist/info-specialist/comp/infoAccordion.vue";
import { useAccordionStore } from "@/stores/accordion/accordion";
const { infoCostAccordion } = storeToRefs(useAccordionStore());
</script>

<style lang="scss">
.services-cost {
  a:hover {
    text-decoration: underline;
  }
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
}
</style>
