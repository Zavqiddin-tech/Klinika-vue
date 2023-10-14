<template>
  <div class="demo-collapse">
    <div
      v-for="item in infoAccordion"
      :class="item.active ? 'demo-accordion active' : 'demo-accordion'"
      @click="openAccor(item.id, item.author)"
    >
      <div class="demo-accordion__title">{{ item.title }}</div>
      <div class="demo-info">
        <div
          v-show="item.costTexts"
          v-for="itemCost in item.costTexts"
          class="demo-info__prices"
        >
          <div class="demo-accordion__text">{{ itemCost.text }}</div>
          <div class="demo-accordion__price">{{ itemCost.price }}</div>
        </div>


        <div
          v-show="item.priceServices"
          v-for="priceItems, index in item.priceServices"
          :class="
            priceItems.active
              ? 'demo-info__price-services active'
              : 'demo-info__price-services'
          "
          @click="openAccor(priceItems.id, priceItems.author)"
        >
          <div class="demo-info__price-bottom">
            <div class="price-services__title">{{ priceItems.priceTitle }}</div>
            <div
              class="price-services__bottom"
              v-for="list in priceItems.children"
            >
              <div class="demo-accordion__text">{{ list.priceText }}</div>
              <div class="demo-accordion__price">{{ list.priceSumma }}</div>
            </div>
          </div>
        </div>
        <div class="demo-accordion__text" v-for="itemTexts in item.texts">
          {{ itemTexts.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["infoAccordion"]);
import { useAccordionStore } from "../../../../stores/accordion/accordion";
const { setInfoAccordion } = useAccordionStore();

const openAccor = (id, author) => {
  setInfoAccordion(id, author);
};

const openPriceAccor = (author) => {
  alert(author)
};
</script>

<style lang="scss">
.demo-collapse {
  margin-top: 64px;
  margin-bottom: 60px;
  position: relative;
  .demo-accordion {
    margin-top: 30px;
    background-color: #ffffff;
    transition: 0.3s;
    border-radius: 24px;
    cursor: pointer;
    &:hover {
      background-color: #f4f3f7;
    }
    &__title {
      padding: 21px 32px;
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
    .demo-info {
      max-height: 0;
      overflow: hidden;
      transition: 0.3s ease;
      &__prices {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    &__text {
      font-size: 16px;
      font-weight: 200;
      position: relative;
      padding-top: 24px;
      &::before {
        content: "";
        position: absolute;
        top: 15px;
        left: -24px;
        width: 2px;
        height: 100%;
        background-color: #9a888a;
      }
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #9a888a;
        border-radius: 50%;
        top: 30px;
        left: -26.8px;
      }
    }

    &.active {
      .demo-accordion__title {
        border-bottom: 2px solid #ebebeb;
        &::after {
          border-color: #707070;
        }
      }
      .demo-info {
        padding-bottom: 20px;
        padding-left: 64px;
        overflow: unset;
        max-height: 600px;
      }
    }
  }
}

@media (max-width: 700px) {
  .demo-collapse {
    .demo-accordion {
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
  .demo-collapse {
    .demo-accordion {
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
