<template>
     <router-link to="/price-services">
      <div class="title">Стоимость услуги</div></router-link
    >
  <div class="price-collapse">
    <div class="price-accordion active">
      <div class="price-accordion__title">{{ title }}</div>
      <div class="price-info">
        <div v-for="itemCost in price" class="price-info__prices">
          <div class="price-accordion__text">{{ itemCost.title }}</div>
          <div class="price-accordion__price">от {{ itemCost.price }} ₽</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["price", "title"]);
import { useAccordionStore } from "../../../../stores/accordion/accordion";
const { setInfoAccordion } = useAccordionStore();

const openAccor = (id, author) => {
  setInfoAccordion(id, author);
};

const openPriceAccor = (author) => {
  alert(author);
};
</script>

<style lang="scss">
.price-collapse {
  margin-top: 64px;
  margin-bottom: 60px;
  position: relative;
  .price-accordion {
    margin-top: 30px;
    background-color: #ffffff;
    transition: 0.3s;
    border-radius: 24px;
    cursor: pointer;
    &:hover {
      background-color: #f4f3f7;
    }
    &__price {
        padding-right: 32px;
        font-size: 18px;
        font-weight: 700;
        color: #546272;
        white-space: nowrap;
    }
    &__title {
      padding: 21px 32px;
      color: #546272;
      font-size: 18px;
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
    .price-info {
      max-height: 0;
      overflow: hidden;
      transition: 0.3s ease;
      &__prices {
        padding: 22px 0;
        padding-left: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #d6d6d6;
          &:last-child {
            border-bottom: 0;
          }
      }
    }
    &__text {
      font-size: 16px;
      font-weight: 200;
      position: relative;
    }

    &.active {
      .price-accordion__title {
        border-bottom: 2px solid #ebebeb;
        &::after {
          border-color: #707070;
        }
      }
      .price-info {
        overflow: unset;
        max-height: 600px;
      }
    }
  }
}

@media (max-width: 700px) {
  .price-collapse {
    .price-accordion {
      &__title {
        font-size: 17px;
      }
      &__text {
        font-size: 15px;
      }
    }
  }
}
@media (max-width: 500px) {
  .price-collapse {
    .price-accordion {
      &__title {
        font-size: 16px;
        &::after {
          width: 30px;
          height: 30px;
          top: 17px;
        }
      }
      &__text {
        font-size: 14px;
      }
    }
  }
}
</style>
