<template>
  <div class="service-cards">
    <el-row>
      <el-col :span="10" :sm="16" :md="10" :xs="22" class="service-card" v-if="data[0]">
        <div class="service-box orange">
          <div class="orange-react"></div>
          <div class="service-subtitle">
           <span>{{ data[0].title }}</span> 
          </div>
          <div class="service-text">
            <ul>
              <li v-for="item of data[0].serviceItem" @click="nextService(item._id)">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="14" :sm="16" :md="14" :xs="21" class="service-card2">
        <el-row>
          <el-col :span="12" class="service-card" v-if="data[1]">
            <div class="service-box">
              <div class="service-box__bg one"></div>
              <div class="service-subtitle">
               <span>{{ data[1].title }}</span>
              </div>
              <div class="service-text">
                <ul>
                  <li v-for="item of data[1].serviceItem" @click="nextService(item._id)">
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="service-card" v-if="data[2]">
            <div class="service-box">
              <div class="service-box__bg one"></div>
              <div class="service-subtitle">
               <span>{{ data[2].title }}</span>
              </div>
              <div class="service-text">
                <ul>
                  <li v-for="item of data[2].serviceItem" @click="nextService(item._id)">
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="service-card" v-if="data[3]">
            <div class="service-box">
              <div class="service-box__bg one"></div>
              <div class="service-subtitle">
               <span>{{ data[3].title }}</span>
              </div>
              <div class="service-text">
                <ul>
                  <li v-for="item of data[3].serviceItem" @click="nextService(item._id)">
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="service-card" v-if="data[4]">
            <div class="service-box">
              <div class="service-box__bg one"></div>
              <div class="service-subtitle">
               <span>{{ data[4].title }}</span>
              </div>
              <div class="service-text">
                <ul>
                  <li v-for="item of data[4].serviceItem" @click="nextService(item._id)">
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
import router from '@/router/index';
const nextService = (_id) => {
  router.push(`services-detail/${_id}`)
}
</script>

<style lang="scss">
@import '@/styles/vars/phone.scss';
.service {
 &-text__lists {
  border: 1px solid red;
  z-index: 100;
  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
 }
  &-cards {
    padding-top: 42px;
    position: relative;
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
    position: relative;
    padding: 32px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
    overflow: hidden;
    .service-box__bg {
      width: 100%;
      height: 100%;
      position: absolute;
      background-repeat: no-repeat;
      opacity: 0.3;
      &.one {
        background-position: 180px 140px;
        background-image: url('@/assets/logo/starfour.png');
      }
      &.two {
        background-position: 160px -10px;
        background-image: url('@/assets/logo/star-normal.png');
      }
      &.three {
        background-position: 180px -10px;
        background-image: url('@/assets/logo/startwo.png');
      }
      &.four {
        background-position: 120px -30px;
        background-image: url('@/assets/logo/starreact.png');
      }
    }
  }
  &-box.orange {
    height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background-color: #e7e1e0;
    .orange-react {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("@/assets/logo/card-bg.png");
      background-repeat: no-repeat;
      opacity: 0.3;
      background-position: 260px 40px;
    }
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
        background-color: #e7e1e0;
        font-family: Cormorant Garamond;
        padding: 0px 5px;
        border: 1px solid #9a888a;
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
      position: relative;
      padding-top: 27px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      li:hover {
        cursor: pointer;
        text-decoration: underline;
      }
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
