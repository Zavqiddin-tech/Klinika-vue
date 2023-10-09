<template>
  <div class="about-top">
    <el-row>
      <el-col :span="12" :xs="20">
        <div class="about-top__info">
          <div class="about-title">
            Центр косметологии
            <span>Клиники Екатерининская</span>
          </div>
          <div class="about-text">
            В косметологии Клиники Екатерининская работают только
            врачи-дерматокосметологи и трихологи. Поэтому мы гарантируем
            профессиональный подход и только самое качественное выполнение
            услуг. К вашим услугам лазерная и инъекционная косметология,
            аппаратные методики, профессиональный уход за кожей.
          </div>
          <el-button round class="btn-info">{{ button_title }}</el-button>
        </div>
      </el-col>
      <el-col :span="12" :xs="20">
        <div class="about-top__img">
          <img src="@/assets/img/about-klinika.png" alt="" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
defineProps(["button_title"]);
</script>

<style lang="scss">
.about {
  &-top {
    &__img {
      img {
        width: 100%;
        object-fit: cover;
        transform: translateY(-50px);
      }
    }
  }
  &-title {
    width: 400px;
    color: #546272;
    font-family: Cormorant Garamond;
    font-size: 40px;
    font-style: italic;
    font-weight: 600;
    line-height: 44px;
    span {
      font-family: "Manrope";
      font-style: normal;
      font-size: 30px;
    }
  }
  &-text {
    padding: 35px 0px 40px;
    color: #546272;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 27px; /* 150% */
  }
}


// Media query
@media (max-width: 1000px) {
 .about-title {
  font-size: 35px;
  span {
    font-size: 28px;
  }
 }
 .about-text {
  font-size: 16px;
 }
}

@media (max-width: 900px) {
  .about-title {
  font-size: 30px;
  span {
    font-size: 23px;
  }
 }
 .about-text {
  font-size: 15px;
 }
  .about-top__img img {
    transform: translateY(0px);
  }
}


@media (max-width: 768px) {
  .about-top {
    .el-row {
      justify-content: center;
    }
  }
}

@media (max-width: 400px) {
  .about-title {
    width: 300px;
  }
}

</style>
