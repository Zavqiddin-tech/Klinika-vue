<template>
  <div class="stock">
    <div class="container">
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Акции</span>
      </div>
      <div class="title">Акции</div>
      <stock-banner
        title="Ценные подарки"
        titleItalick="для самых близких!"
        :text="text"
        :img="stockImg"
        buttonText="Подробнее"
      />
      <div class="line-star">
        <img src="../../assets/logo/line-star2.png" alt="">
      </div>
      <div class="star">
        <img src="../../assets/logo/star-big.png" alt="">
      </div>
      <stock-boxes />
      <forma
        title="Запишитесь на консультацию"
        text="Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
        agreeText="Я соглашаюсь с политикой обработки персональных данных  и пользовательским соглашением, а также даю согласие на обработку персональных данных."
      />
    </div>
  </div>
</template>

<script setup>
import stockBanner from "./stock-page/stock-banner.vue";
import stockBoxes from "./stock-page/stock-boxes.vue";
import forma from "@/components/form/forma.vue";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";



const text = ref(
  "Наши любимые и близкие такие разные. Так хочется порадовать всех и подарить что-то действительно нужное, но угадать с подарком сложно."
);
import stockImg from "@/assets/img/stock-card.png"

import { useStock } from "@/stores/stock/stock.js";
const { orderStock } = storeToRefs(useStock());
const { setOrderStock } = useStock();

onMounted(() => {
  setOrderStock(false);
  window.scrollTo(0, 0)
});
</script>

<style lang="scss">
.stock {
  position: relative;
  background-color: #f9faff;
  .container {
    position: relative;
    .line-star {
      position: absolute;
      left: -200px;
      bottom: 400px;
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
    content: '';
    width: 400px;
    height: 600px;
    background-image: url('../../assets/logo/triagles-white.png');
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: contain;
    position: absolute;
    right: 0;
    bottom: -70px;
  }
  .stock-banner {
    margin-top: 40px;
    padding: 64px 0px 30px 74px;
    border-radius: 24px;
    background-color: #ded6d5;
  }
  &-img {
    text-align: right;
  }
}

@media (max-width: 500px) {
  .stock .stock-banner {
    padding-top: 30px;
    padding-left: 0px;
    .stock-info {
      padding-left: 20px;
    }
    .stock-img {
      text-align: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
