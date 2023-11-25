<template>
  <div class="question-collapse">
    <div v-for="item in question" class="question-accordion">
      <div class="question-accordion__title">{{ item.question }}</div>
      <div class="question-info">
        <div class="question-info__prices">
          <div class="question-accordion__text">{{ item.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["question"]);

</script>

<style lang="scss">
.question-collapse {
  margin-top: 64px;
  margin-bottom: 60px;
  position: relative;
  .question-accordion {
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
    .question-info {
      max-height: 0;
      overflow: hidden;
      transition: 0.3s ease;
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

    &:hover, &:active {
      .question-accordion__title {
        border-bottom: 2px solid #ebebeb;
        &::after {
          border-color: #707070;
        }
      }
      .question-info {
        padding-bottom: 20px;
        padding-left: 64px;
        overflow: unset;
        max-height: 600px;
      }
    }
  }
}

@media (max-width: 700px) {
  .question-collapse {
    .question-accordion {
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
  .question-collapse {
    .question-accordion {
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
