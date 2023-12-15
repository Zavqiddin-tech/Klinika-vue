<template>
  <div class="demo-collapse">
    <h1>salom</h1>
    <div
      v-for="item in priceArr"
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
          v-show="item.serviceItem"
          v-for="(priceItems, index) in item.serviceItem"
          :class="
            priceItems.active
              ? 'demo-info__price-services active'
              : 'demo-info__price-services'
          "
          @click="openAccor(priceItems.id, priceItems.author)"
        >
          <div class="demo-info__price-bottom">
            <div class="price-services__title">{{ priceItems.title }}</div>
            <div
              class="price-services__bottom"
              v-for="list in priceItems.servicePrice"
            >
              <div class="demo-accordion__text">{{ list.title }}</div>
              <div class="demo-accordion__price">{{ list.price }} ₽</div>
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
import { ref, onMounted } from "vue";

const priceArr = ref([]);

const openAccor = (id, author) => {
  console.log(id, author);
  if (author == "infoPrice") {
    priceArr.value.forEach((item) => {
      if (id == item.id) {
        item.active = !item.active;
    } else {
        item.active = false;
    }
    });
  }
  if (author == "infoPriceChildren") {
    priceArr.value.forEach((item) => {
      item.serviceItem.forEach((itemPrice) => {
        if (itemPrice.id == id) {
          item.active = !item.active;
          itemPrice.active = !itemPrice.active;
        } else {
          itemPrice.active = false;
        }
      });
    });
  }
};

import { usePriceStore } from "@/stores/data/price";
import { ElMessage, ElMessageBox } from "element-plus";
const { get_all_price } = usePriceStore();

onMounted(async () => {
  await get_all_price().then((res) => {
    priceArr.value = [...res.data];
  });
  priceArr.value.map((item, index) => {
    item.active = false;
    item.author = "infoPrice";
    item.id = index + 1;
    return item;
  });
  priceArr.value.forEach((item) => {
    item.serviceItem.map((list, index) => {
      list.active = false;
      list.author = "infoPriceChildren";
      list.id = index + 1;
      return list;
    });
  });
  console.log(priceArr.value);
});
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
