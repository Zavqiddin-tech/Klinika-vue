<template>
  <div class="stock-boxes">
    <el-row>
      <el-col :span="8" :sm="10" :md="8" :xs="15" v-for="i in 6">
        <div class="stock-box">
          <div class="stock-box__img">
            <img src="@/assets/img/stock-1.png" alt="" />
          </div>
          <div class="stock-box__info">
            <div class="stock-box__text">Акция</div>
            <div class="stock-box__date">01/03/2023</div>
          </div>
          <div class="stock-box__title">
            -50% на перманентный макияж весь март
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss">
.stock-boxes {
  .el-row {
    padding-top: 36px;
    margin-left: -18px;
    margin-right: -18px;
    .el-col {
      padding: 18px;
    }
  }
  .stock-box {
    padding: 12px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
    transition: 0.25s;
    &:hover {
      transform: translateY(-5px);
    }
    &__img {
      text-align: center;
      border-radius: 24px;
      background-color: #e7e1e0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__info {
      padding-top: 20px;
      padding-bottom: 19px;
      display: flex;
      justify-content: space-between;
    }
    &__text {
      color: #9a888a;
      font-size: 15px;
      font-weight: 600;
    }
    &__date {
      color: #546272;
      font-size: 13px;
      font-weight: 200;
    }
    &__title {
      color: #546272;
      font-size: 20px;
      font-weight: 600;
    }
  }
}


@media(max-width: 1000px) {
  .stock-boxes {
    .el-row {
      justify-content: center;
    }
  }
}

@media (max-width: 450px) {
  .stock-boxes {
    .el-row {
      .el-col-xs-15 {
        max-width: 80%;
        flex: 0 0 80%;
      }
    }
  }
}
@media (max-width: 375px) {
  .stock-boxes {
    .el-row {
      .el-col-xs-15 {
        max-width: 100%;
        flex: 0 0 100%;
      }
    }
  }
}
</style>
