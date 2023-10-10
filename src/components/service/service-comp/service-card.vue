<template>
  <div class="service-cards">
    <el-row>
      <el-col :span="10" :sm="16" :md="10" :xs="22" class="service-card ">
        <div class="service-box orange">
          <div class="service-subtitle">Аппаратная <span>косметология</span></div>
          <div class="service-text">
            <ul>
              <li>Альтера-терапия</li>
              <li>Фототерапия BBL Hero</li>
              <li>Гидропилинг HydraFacial MD</li>
              <li>Лазерная шлифовка</li>
              <li>Фракционный микроигольчатый RF-лифтинг</li>
              <li>Микротоки Biogenie</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="14" :sm="16" :md="14" :xs="21" class="service-card2">
        <el-row>
          <el-col :span="12" class="service-card">
            <div class="service-box">
              <div class="service-subtitle">Инъекционная <span>косметология</span></div>
              <div class="service-text">
                <ul>
                  <li>Биоревитализация</li>
                  <li>Ботулинотерапия</li>
                  <li>Контурная пластика</li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="service-card">
            <div class="service-box">
              <div class="service-subtitle">Эстетическая <span>косметология</span></div>
              <div class="service-text">
                <ul>
                  <li>Гигиеническая чистка</li>
                  <li>Перманентный макияж</li>
                  <li>Пилинги</li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="service-card">
            <div class="service-box">
              <div class="service-subtitle">Лазерная <span>косметология</span></div>
            </div>
          </el-col>
          <el-col :span="12" class="service-card">
            <div class="service-box">
              <div class="service-subtitle">
                Мужская <span class="newspan">new</span> <br>
                <span>косметология</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss">
.service {
  &-cards {
    padding-top: 42px;
    .el-row {
      margin-left: -16px;
      margin-right: -16px;
    }
  }
  &-card {
    padding: 16px;
  }
  &-card2 {
    padding: 0px 16px;
  }
  &-box {
    padding: 32px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
  }
  &-box.orange {
    height: 100%;
    background-color: #e7e1e0;
    background-image: url('@/assets/logo/card-bg.png');
    background-repeat: no-repeat;
    background-position: 275px 100px;
  }
  &-subtitle {
    width: 155px;
    color: #546272;
    font-family: Cormorant Garamond;
    font-size: 27.5px;
    font-style: italic;
    font-weight: 600;
    line-height: 27.5px;
    span {
      font-family: "Manrope";
      font-size: 22px;
      font-style: normal;
      &.newspan {
        background-color: #E7E1E0;
        font-family: Cormorant Garamond;
        padding: 0px 5px;
        border: 1px solid #9A888A;
        font-size: 20px;
        border-radius: 30px;
      }
    }
  }
  &-text {
    color: #546272;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 27px;
    ul {
      padding-top: 27px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}


@media (max-width: 1000px) {
  .service-cards {
    .el-row {
      justify-content: center;
    }
  }
}

@media (max-width: 460px) {
  .service-cards {
    .el-row {
      .service-card.el-col-12 {
        max-width: 100%;
        flex: 0 0 100%;
      }
    }
  }
}
</style>
