<template>
  <div class="title">Топ запросов, с которыми работает специалист</div>
  <div class="info-cards">
    <el-row>
      <el-col :span="8" :xs="12" v-for="item in 5">
        <div class="info-card">
          <div class="info-card__top">
            <img src="@/assets/logo/star.png" alt="star" />
            Морщины
          </div>
          <div class="info-card__bottom">
            Диагностика и подбор инъекционных и аппаратных методик
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss">
.info {
  &-cards .el-row {
    padding-top: 25px;
    justify-content: center;
    .el-col {
      padding: 15px;
    }
  }
  &-card {
    padding: 25px 20px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);

    &__top {
      padding-bottom: 25px;
      display: flex;
      gap: 20px;
      align-items: center;
      color: #546272;
      font-family: Cormorant Garamond;
      font-size: 27.5px;
      font-style: italic;
      font-weight: 600;
    }
    &__bottom {
      color: #546272;
      font-weight: 200;
    }
  }
}

@media (max-width: 500px) {
  .info-cards {
    .el-row {
      .el-col-xs-12 {
        max-width: 100%;
        flex: 0 0 100%;
      }
    }
  }
}


</style>
