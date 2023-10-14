<template>
  <div class="contact">
    <div class="container">
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Контакты</span>
      </div>
      <contact-box />
      <div class="line-star">
        <img src="../../assets/logo/line-star.png" alt="">
      </div>
      <forma
        title="Запишитесь на консультацию"
        text="Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время."
        agreeText="Я соглашаюсь с политикой обработки персональных данных  и пользовательским соглашением, а также даю согласие на обработку персональных данных."
      />
    </div>
  </div>
</template>

<script setup>
import contactBox from "./comp/contactBox.vue";
import forma from "@/components/form/forma.vue";
</script>

<style lang="scss">
.contact {
  position: relative;
  background-color: #f9fafe;
  .container {
    position: relative;
    .line-star {
      position: absolute;
      bottom: 0px;
      left: -200px;
      opacity: 0.3;
    }
  }
  &:after {
    content: '';
    width: 400px;
    height: 600px;
    background-image: url('../../assets/logo/star-big.png');
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: contain;
    position: absolute;
    right: 0;
    opacity: 0.1;
    bottom: -70px;
  }
  &-boxes {
    border-radius: 24px;
    background: #fff;
    position: relative;
    z-index: 1;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.50);
    .el-row {
      padding: 16px;
      .el-col {
        padding: 16px;
      }
    }
  }
  &-info {
    .title-small.light {
      width: 340px;
      padding: 34px 0px;
    }
  }
  &-addres {
    ul {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgb(189, 189, 189);
      .text.light {
        padding-bottom: 5px;
      }
      .text.big.email {
        padding-left: 24px;
      }
    }
  }
  &-maps {
    height: 100%;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.50);
    overflow: hidden;
    border-radius: 24px;
    div {
      overflow: hidden;
      height: 100%;
      iframe {
        border: unset;
      }
    }
  }
}



@media (max-width: 1000px) {
  .contact {
    .el-row {
      justify-content: center;
    }
  }
  .contact-info {
    .title-small.light {
      font-size: 20px;
    }
  }
  .contact-addres {
    .text.big {
      font-size: 16px;
    }
    ul:nth-child(2) {
      .text.big {
        padding-bottom: 5px;
      }
    }
  }
  .contact-maps {
    height: 500px;
  }
}


@media (max-width: 768px) {
  .contact .el-row {
    padding: 0;
  }
  .contact-info {
    .title-small.light {
      padding: 15px 0;
      font-size:14px;
    }
  }

  .contact-addres {
    .text.big {
      font-size: 14px;
    }
  }
} 
</style>
