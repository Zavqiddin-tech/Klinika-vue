<template>
  <footer class="footer">
    <div class="container">
      <el-row class="footer-lists">
        <el-col :span="8" :xs="24" class="footer-list">
          <div class="footer-logo">
            <router-link to="/main">
              <img src="@/assets/logo/nav-logo.png" alt="logo" />
            </router-link>
          </div>
          <div class="footer-text copyright">
            © 2023 «Клиника Екатерининская» Лицензия №ЛО-23-01-014758 от 21
            августа 2020 Правовые документы
          </div>
        </el-col>
        <el-col :span="8" :xs="24" class="footer-list center">
          <div class="footer-text">
            <img src="@/assets/logo/eye-open.png" alt="" />
            Версия для слабовидящих
          </div>
        </el-col>
        <el-col :span="8" :xs="24" class="footer-list">

          <div class="footer-text p">
            <footer-links />
            <p>
                Имеются противопоказания. Необходима консультация специалиста
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>

<script setup>
import footerLinks from './footer-comp/footer-links.vue';
</script>

<style lang="scss">
@import "@/styles/vars/colors.scss";

.footer {
  position: relative;
  z-index: 1;
  padding: 56px 0px;
  background-color: $gray;
  color: #fff;
  &-text {
    font-size: 13px;
    font-weight: 200;
    line-height: 20px;
    &.copyright {
      margin-top: 20px;
    }
    &.p {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    p {
        width: 200px;
        padding-left: 20px;
        padding-top: 15px;
    }
  }
  &-list.center {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .footer-text {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}



@media (max-width: 768px) {
  .footer-logo, .footer-text {
    text-align: center;
  }
  .footer-text p {
    padding-left: 0;
  }
  .footer-lists {
    gap: 40px;
  }
}
</style>
