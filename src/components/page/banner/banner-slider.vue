<template>
  <div class="banner-slider">
    <div class="container">
      <el-carousel>
        <el-carousel-item v-for="item in 6" :key="item">
          <el-row>
            <el-col :span="12" class="banner-slider-info">
              <div class="banner-slider-title">-50% на перманентный макияж</div>
              <div class="banner-slider-text">Весь март</div>
              <el-button type="info" round class="btn-info">{{ button_title }}</el-button>
            </el-col>
            <el-col :span="12" class="banner-slider-image">
              <img src="@/assets/img/girl.png" alt="" />
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
defineProps(['button_title'])
</script>

<style lang="scss">
.banner-slider {
  margin-top: 32px;
.el-carousel__item {
    .el-row {
      height: 100%;     
    }
  }
  background-color: #ded6d5;
  .el-carousel__container {
    height: 575px;
    .el-carousel__arrow {
      display: none;
    }
  }
  .el-carousel__indicators {
    right: -570px;
    bottom: 100px;
    .el-carousel__indicator {
        &.is-active {
            .el-carousel__button {
                background-color: #9A888A;

            }
        }
      .el-carousel__button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
  &-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-title {
    padding-top: 130px;
    line-height: 60px;
    font-size: 40px;
    font-weight: 600;
    color: #546272;
  }
  &-text {
    padding-top: 32px;
    padding-bottom: 56px;
    color: #546272;
    font-size: 24px;
    font-weight: 200;
  }
}




@media (max-width: 1000px) {
  .banner-slider-title {
    font-size: 32px;
    line-height: 42px;
  }
  .banner-slider-text {
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
  }
}

@media (max-width: 900px) {
  .el-carousel {
    height: 500px;
  }
  .banner-slider-title {
    padding-top: 70px;
    font-size: 28px;
    line-height: 35px;
  }
  .banner-slider-text {
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .banner-slider-image {
    display: flex;
    align-items: center;
    img {
      width: 420px;
      height: 420px;
      object-fit: unset;
    }
  }
}

@media (max-width: 375px) {
  .banner-slider {
    .container{
      padding: 0px;
      .el-row {
        .el-col-12 {
          max-width: 100%;
          flex: 0 0 100%;
        }
      }
    }
    &-info {
      padding-left: 10px;
    }
    &-title {
      font-size: 25px;
    }
    &-text {
      font-size: 18px;
    }
    .el-carousel__container {
      height: 100%;
    }
    .el-carousel {
      height: 700px;
    }
  }

}
</style>
