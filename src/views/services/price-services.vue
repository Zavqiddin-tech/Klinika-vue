<template>
  <div class="price-services">
    <div class="phone-item">
        <div><img src="../../assets/logo/sms.png" alt="" /></div>
      </div>
    <div class="container">
      <div class="line-star">
        <img src="../../assets/logo/line-star2.png" alt="">
      </div>
      <div class="star">
        <img src="../../assets/logo/star-big.png" alt="">
      </div>
      <div class="title">Стоимость услуг</div>
      <el-tree :data="data" />
      <el-tree :data="data" />
      <el-tree :data="data" />
      <el-tree :data="data" />
      <el-tree :data="data" />
      <el-tree :data="data" />
      <el-tree :data="data" />
    </div>
    <forma
      title="Запишитесь на консультацию"
      text="Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
      agreeText="Я соглашаюсь с политикой обработки персональных данных  и пользовательским соглашением, а также даю согласие на обработку персональных данных."
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import forma from "@/components/form/forma.vue";
const data = ref([
  {
    label: "Аппаратная косметология",
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
</script>

<style lang="scss">
.price-services {
  .container {
    position: relative;
  .line-star {
      position: absolute;
      left: -200px;
      bottom: -350px;
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
.el-tree {
  margin-top: 56px;
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
</style>
