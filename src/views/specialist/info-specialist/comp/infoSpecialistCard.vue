<template>
  <div class="info-card">
    <el-row>
      <el-col :span="10" :sm="24" :md="10" :xs="24" class="info-card__img">
        <img src="@/assets/img/specialist-5.png" alt="" />
      </el-col>
      <el-col :span="14" :sm="20" :md="14" :xs="24" class="info-card__info">
        <div class="info-card__title">
          <span>Эксперт</span> <br />
          в области современных методик в косметологии
        </div>
        <ul>
            <li>Специалист в сфере аппаратной и эстетической косметологии</li>
            <li>Использует в работе передовые методы в трихологии</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss">
.info-card {
  &__info {
    padding-top: 140px;
    padding-left: 60px;
    ul li {
        padding-top: 24px;
        font-weight: 200;
    }
  }
  &__title {
    color: #546272;
    font-size: 24px;
    line-height: 33px;
    padding-bottom: 6px;
    span {
      font-size: 30px;
      font-family: Cormorant Garamond;
      font-style: italic;
    }
  }
}


@media (max-width: 1000px) {
  .info-card__img {
    text-align: center;
  }
}
@media (max-width: 510px) {
  .info-card {
    .el-row {
      .info-card__img {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .info-card {
    .info-card__info {
      padding-top: 70px;
      padding-left: 0;
    }
    .info-card__title {
      font-size: 18px;
      line-height: 27px;
      span {
        font-size: 26px;
      }
    }
  }
}
</style>
