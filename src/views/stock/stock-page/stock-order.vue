<template>
  <div class="stock-order">
    <div class="container">
      <div class="d-flex align-center justify-between">
        <el-button class="btn-white__defalut" round @click="backPage()"
          >Назад</el-button
        >
        <div class="stock-order__date">01/03/2023</div>
      </div>
      <stock-banner
        title="Ценные подарки"
        titleItalick="для самых близких!"
        :text="text"
        :img="stockImg"
        buttonText="Заказать сертификат"
      />
      <div class="stock-order__info">
        <div class="text">
          Если вы ищете особенному для вас человеку подарок, который порадует
          его, то подарочный сертификат в Центр косметологии – отличный выбор.
          Подарочный сертификат Клиники Екатерининская это:
        </div>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
        <div class="stock-order__catalog">
          <div class="stock-order__catalog--text">
            В продаже сертификаты номиналом:
          </div>
          <div class="stock-order__items">
            <ul>
              <li>
                <div class="circle"></div>
                5 000 рублей
              </li>
              <li>
                <div class="circle"></div>
                10 000 рублей
              </li>
              <li>
                <div class="circle"></div>
                15 000 рублей
              </li>
            </ul>
            <ul>
              <li>
                <div class="circle"></div>
                25 000 рублей
              </li>
              <li>
                <div class="circle"></div>
                50 000 рублей
              </li>
              <li>
                <div class="circle"></div>
                100 000 рублей
              </li>
            </ul>
          </div>
        </div>
      </div>
      <el-tree :data="data" />
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
import { storeToRefs } from "pinia";
import stockBanner from "./stock-banner.vue";
import forma from "@/components/form/forma.vue";
import router from "@/router/index.js";

const text = ref(
  "Наши любимые и близкие такие разные. Так хочется порадовать всех и подарить что-то действительно нужное, но угадать с подарком сложно."
);
import stockImg from "@/assets/img/stock-card.png"


import { useStock } from "@/stores/stock/stock.js";
const { orderStock } = storeToRefs(useStock());
const { setOrderStock } = useStock();

const data = ref([
  {
    label: "Фракционный микроигольчатый RF-лифтинг",
    children: [
      {
        label: "Прием (осмотр, консультация) врача-косметолога первичный",
      },
      {
        label:
          "Удаление подкожно-жировой клетчатки с  высокочастотного импульса (фракционный микроигольчатый RF лифтинг: Локти)",
      },
      {
        label:
          "Удаление подкожно-жировой клетчатки с помощью  (фракционный микроигольчатый RF лифтинг: Области век)",
      },
      {
        label:
          "Удаление подкожно-жировой клетчатки с помощью электрического высокочастотного импульса коррекция рубцов и растяжек)",
      },
      {
        label:
          "Удаление и с помощью электрического высокочастотного импульса (фракционный микроигольчатый RF лифтинг: Области подмышек (лечение гипергидроза))",
      },
    ],
  },
]);

const activities = ref([
  {
    timestamp: "Действительно полезный сюрприз",
  },
  {
    timestamp: "Возможность купить подарок в последнюю минуту",
  },
  {
    timestamp: "Подарок в красивом конверте-упаковке",
  },
  {
    timestamp:
      "Не просто любая услуга на выбор, а профессиональное лечение от ведущих специалистов города",
  },
  {
    timestamp: "Индивидуальные рекомендации по уходу за кожей",
  },
]);

const backPage = () => {
  router.push("/stock");
};

onMounted(() => {
  setOrderStock(true);
});
</script>

<style lang="scss">
.stock-order {
  position: relative;
  padding-top: 100px;
  &:after {
    content: '';
    width: 400px;
    height: 600px;
    background-image: url('../../../assets/logo/triagles-white.png');
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
  &__info {
    .text {
      padding: 30px 0;
      font-weight: 200;
      color: #546272;
    }
  }
  &__date {
    font-weight: 200;
    color: #546272;
  }
  .el-timeline-item {
    padding-bottom: 25px;
  }
  .el-timeline-item__timestamp {
    font-size: 16px;
  }
  &__items {
    ul {
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        align-items: center;
        gap: 24px;
        font-weight: 200;
        color: #546272;
        .circle {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #9a888a;
        }
      }
    }
  }
}
.el-tree {
  margin-top: 56px;
  z-index: 1;
  &-node {
    margin-top: 30px;
    padding: 20px 30px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(178, 178, 178, 0.5);
    position: relative;
    &:focus {
      .el-tree-node__label::after {
        border: 1px solid #000;
      }
    }
    &__content {
      .el-icon {
        display: none;
      }
    }
    &__children {
      .el-tree-node {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        border-radius: unset;
        white-space: unset;
        box-shadow: unset;
        &__label {
          font-weight: 200;
          &::after {
            display: none;
          }
        }
      }
    }
    &__label {
      font-size: 18px;
      font-weight: 600;
      &::after {
        content: "";
        position: absolute;
        right: 20px;
        top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #cecece;
      }
    }
  }
}


@media (max-width: 1000px) {
  .stock-order {
    .el-tree-node__label {
      font-size: 16px;
      font-weight: 400;
    }
  }
}

@media (max-width: 500px) {
  .stock-order .stock-banner {
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

@media (max-width: 375px) {
  .stock-order__items {
    ul {
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
      
    }
  }
}

</style>
