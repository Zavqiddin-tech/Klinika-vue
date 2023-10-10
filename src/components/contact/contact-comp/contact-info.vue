<template>
  <div class="contact-info">
    <div class="contact-top">
      <div class="contact-subtitle title">
        Центр косметологии Клиники Екатерининская
      </div>
      <div class="contact-text">ул. Кожевенная, 66</div>
      <ul class="contact-lists">
        <li class="contact-list">пн-пт: 8:00 - 20:00</li>
        <li class="contact-list">сб: 8:00 - 18:00</li>
        <li class="contact-list">вс: 10:00 - 18:00</li>
      </ul>
    </div>
    <div class="contact-bottom">
      <el-row>
        <el-col :span="12" :sm="15" :md="12" :xs="24" class="contact-wrapper">
          <div class="contact-bottom__item">
            <img src="@/assets/logo/vk.png" alt="" />
            <div class="contact-bottom__text">beautyclinic23ru</div>
          </div>
        </el-col>
        <el-col :span="12" :sm="15" :md="12" :xs="24" class="contact-wrapper">
          <div class="contact-bottom__item">
            <img src="@/assets/logo/email.png" alt="" />
            <div class="contact-bottom__text">ek@clinic23.ru</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "@/styles/vars/colors.scss";
.contact {
  &-info {
    height: 100%;
  }
  &-subtitle {
    line-height: 48px;
  }
  &-top {
    padding: 32px;
    padding-bottom: 60px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
  }
  &-text {
    padding-top: 34px;
    padding-bottom: 26px;
    font-size: 20px;
    color: $gray;
  }
  &-list {
    font-weight: 200;
    line-height: 24px;
    color: $gray;
  }
  &-container {
    margin-left: -16px;
    margin-right: -16px;
  }
  &-wrapper {
    padding: 0px 16px;
  }
  &-bottom {
    margin-left: -16px;
    margin-right: -16px;
    padding-top: 40px;
    &__item {
      padding: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
    }
  }

  @media (max-width: 1000px) {
    .contact-wrapper {
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    .contact-bottom {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
