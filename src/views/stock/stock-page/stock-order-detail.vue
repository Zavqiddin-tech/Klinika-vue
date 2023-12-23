<template>
  <div class="stock-detail">
    <div class="container">
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Акции</span>
        <span>-50% на перманентный макияж весь март</span>
      </div>
      <div class="d-flex align-center justify-between">
        <el-button class="btn-white__defalut" round @click="backPage()"
          >Назад</el-button
        >
        <div class="stock-order__date">01/03/2023</div>
      </div>
      <stock-banner
        title="-50% на перманентный"
        titleItalick="макияж весь март"
        :text="text"
        :img="stockImg"
        buttonText="Записаться"
      />
      <div class="stock-detail__info">
        <div class="text">
          Перманентный макияж – это безупречный образ в любое время и экономия
          личного времени! Процедура, во время которой специалист вводит в кожу
          специальный пигмент, дает долговременный эффект свежего макияжа,
          подчеркивает контур губ, создает идеальные стрелки, а также маскирует
          рубцы, витилиго и другие эстетические недостатки.
        </div>
        <div class="text">
          Перманентный макияж в Клинике Екатерининской это:
        </div>
        <ul>
          <li>Процедура от эксперта с опытом 10 лет</li>
          <li>Стойкие сертифицированные пигменты</li>
          <li>50 оттенков, чтобы подчеркнуть вашу индивидуальность</li>
          <li>Результат, который сохраняется до 3 лет</li>
        </ul>
        <div class="text">
          *Скидка 50% распространяется на все виды перманентного макияжа, кроме
          первичной консультации с врачом-косметологом или специалистом по
          перманентному макияжу. Акция действует до 31 марта 2023 года. Узнать
          подробности и записаться на желаемую процедуру можно по телефону +7
          (861) 202-0-202
        </div>
      </div>
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
import stockBanner from "./stock-banner.vue";
import forma from "@/components/form/forma.vue";
import router from "@/router/index.js";
import stockImg from "@/assets/img/stock-girl.png";

import { specialistStore } from "@/stores/specialist/specialist.js";
const { setSpecialist } = specialistStore();

const text = ref(
  "Скидка 50% на все виды перманентного макияжа, в том числе макияж губ, век, бровей и маскировка эстетических недостатков на теле."
);

const backPage = () => {
  router.push("/stock-order");
};

onMounted(() => {
  setSpecialist(false);
  window.scrollTo(0, 0)
});
</script>

<style lang="scss">
.stock-order__date {
  font-weight: 200;
  color: #546272;
}
.stock-detail {
  position: relative;
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
  .specialist {
    padding-top: 0;
  }
  .container {
    .stock-banner {
      margin-top: 56px;
      border-radius: 24px;
      background-color: #ded6d5;
    }
  }
  .stock-info {
    padding-top: 54px;
    padding-left: 74px;
  }
  .stock-img {
    height: 100%;
    overflow: hidden;
    text-align: right;
    img {
      transform: translateY(5px);
    }
  }
  &__info {
    padding-top: 30px;
    padding-bottom: 80px;
    .text {
      font-weight: 200;
      line-height: 24px;
      &:nth-child(2) {
        padding: 18px 0px;
      }
    }
    ul {
      padding-left: 32px;
      padding-bottom: 20px;
      li {
        line-height: 24px;
        font-weight: 200;
      }
    }
  }
}


@media (max-width: 768px) {
  .stock-detail .stock-info {
    padding: 30px;
  }
  .stock-detail .stock-img {
    text-align: center;
  }
}
</style>
