<template>
  <el-row class="about-cards">
    <el-col :span="8" :xs="15" class="about-card" v-for="item in 3">
      <div class="about-box">
        <div class="about-icon">
          <img src="@/assets/logo/cpu.png" alt="" />
        </div>
        <div class="about-info">
          <div class="about-info__title">Передовые технологии</div>
          <div class="about-info__text">
            Бережно относимся к персональной информации пациентов
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup></script>

<style lang="scss">

.about {
    &-cards {
        transform: translate(0px, 70px);
        padding: 33px 12px;
        background-color: #fff;
        border-radius: 24px;
        box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.50);
        z-index: 10;
      }
    &-card {
        padding: 0px 12px;
        border-right: 2px solid #EBEBEB;
        &:last-child {
          border-right: 0;
        }
    }
    &-box {
        height: 100%;
        display: flex;
        gap: 20px;
    }
    &-info {
        &__title {
            padding-bottom: 23px;
            font-size: 20px;
            font-weight: 200;
        }
        &__text {
            font-weight: 200;
            line-height: 24px;
        }
    }
}


@media (max-width: 768px) {
  .about {
    .el-row {
      justify-content: center;
    }
    &-card {
      height: 200px;
      border-right: unset;
    }
  }
}

@media (max-width: 440px) {
  .about-cards {
    .el-col-xs-15 {
      max-width: 90%;
      flex: 0 0 90%;
    }
  }
}
@media (max-width: 375px) {
  .about-cards {
    .el-col-xs-15 {
      max-width: 100%;
      flex: 0 0 100%;
    }
    .about-info__title {
      padding-bottom: 10px;
      font-size: 16px;
    }
    .about-info__text {
      font-size: 13px;
    }
  }
}
</style>
