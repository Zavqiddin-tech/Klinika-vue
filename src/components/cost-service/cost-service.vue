<template>
  <div class="cost-service">
    <el-tree :data="dataTop" />
    <div class="title" @click="priceServices()">Стоимость услуги</div>
    <el-tree :data="data"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../../router";

const dataTop = ref([
  {
    label: "Фракционный микроигольчатый RF-лифтинг – это больно?",
  },
  {
    label: "Какой будет кожа сразу после RF-лифтинга?",
  },
  {
    label: "Какова продолжительность реабилитационного периода?",
  },
]);

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


const priceServices = ()=> {
  router.push("/price-services")
}
</script>

<style lang="scss">
.cost-service {
  .title {
    padding-top: 56px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
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



@media(max-width: 1000px) {
  .el-tree-node__label {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
