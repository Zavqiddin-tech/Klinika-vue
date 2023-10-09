<template>
  <div class="info-form">
    <el-row>
      <el-col :span="12" :xs="24">
        <div class="info-form__slider">
          <img src="@/assets/img/info-form.png" alt="" />
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div class="info-form__forma">
          <div class="title">Оформление приема</div>
          <div class="subtitle">Для записи оставьте контактные данные</div>
          <div class="text">
            Укажите свой номер телефона. 
            Мы свяжемся с вами в ближайшее время.
          </div>
          <forma-input :infoForm="true"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import formaInput from "@/components/form/form-comp/forma-input.vue";

</script>

<style lang="scss">
.info-form {
  padding-top: 80px;
  padding-bottom: 100px;
  &__slider {
    height: 100%;
    overflow: hidden;
    border-radius: 24px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .el-row {
    .el-col {
      padding: 0px 15px;
    }
  }

  &__forma {
    height: 100%;
    padding: 32px;
    border-radius: 24px;
    background-color: #e7e1e0;
    .title {
      padding-bottom: 30px;
      font-weight: 600;
    }
    .subtitle {
      padding-bottom: 16px;
      font-size: 24px;
      font-weight: 200;
    }
    .text {
      padding-bottom: 32px;
      font-weight: 200;
    }
    .el-form {
      margin-top: 0;
      flex-direction: column;
      &-item {
        width: 100%;
      }
      .form-input {
        width: 100%;
      }
      .form-btn {
        width: 100%;
      }
    }
  }
}


@media (max-width: 768px) {
  .info-form {
    .el-row {
      gap: 40px;
    }
  }
}
@media (max-width: 375px) {
  .info-form__forma {
    padding: 15px;
    .subtitle {
      font-size: 20px;
    }
  }
}


</style>
