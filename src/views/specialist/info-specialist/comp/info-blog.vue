<template>
  <div class="info-blogs">
    <div class="title">Отзыв о работе врача</div>
    <el-row>
      <el-col :span="16" :sm="13" :md="16" :xs="24">
        <div class="info-blog big">
          <p class="text light">
            Екатерина Николаевна очень доброжелательна, приветлива. Компетентный
            специалист. Благодарим. Пришли на приём к Екатерине Николаевне
            Бекетовой с сыпью у ребёнка. Диагноз: атопический дерматит, как
            следствие двойной ударной дозы антибиотиков.
          </p>
        </div>
      </el-col>
      <el-col :span="8" :sm="11" :md="8" :xs="24">
        <div class="info-blog small">
          <div class="info-blog__title">Для нас важно ваше мнение!</div>
          <el-button round class="btn-info full"> Оставить отзыв </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss">
.text.light {
  font-weight: 200;
  color: #546272;
}

.info {
  &-blogs {
    padding-top: 80px;
    .el-row {
        padding-top: 40px;
      margin-left: -12px;
      margin-right: -12px;
      .el-col {
        padding: 12px;
      }
    }
  }
  &-blog {
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
  }
  &-blog.big {
    height: 100%;
    padding: 32px;
  }
  &-blog.small {
    padding: 32px;
    background-color: #e7e1e0;
  }
  &-blog__title {
    margin-bottom: 230px;
    font-size: 24px;
    color: #546272;
  }
}
</style>
