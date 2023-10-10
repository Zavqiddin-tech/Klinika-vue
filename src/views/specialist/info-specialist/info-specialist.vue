<template>
  <div class="info-specialist">
    <div class="container">
      <div class="line-star">
        <img src="../../../assets/logo/line-star2.png" alt="">
      </div>
      <div class="star">
        <img src="../../../assets/logo/star-big.png" alt="">
      </div>
      <about-top
        class="info-specialist__banner"
        :infoImg="infoImg"
        :title="title"
        :titleItalic="titleItalic"
        :textGroup="textGroup"
        :btnText="btnText"
      />
      <div class="info-specialist__title">
        Когда косметолог и пациент в одной команде, происходят грандиозные
        перемены.
      </div>
      <info-specialist-card />
      <info-accordion />
      <info-cards />
      <info-blog />
      <info-form />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import aboutTop from "../../../components/about/about-comp/about-top.vue";
import infoImg from "@/assets/img/infoSpecialImg.png";
import infoSpecialistCard from "./comp/infoSpecialistCard.vue";
import infoAccordion from "./comp/infoAccordion.vue";
import infoCards from "./comp/info-cards.vue";
import infoBlog from "./comp/info-blog.vue";
import infoForm from "./comp/info-form.vue"

//store
import { infoSpecialistStore } from "../../../stores/specialist/info-specialist";
const { title, titleItalic, textGroup, btnText } = storeToRefs(
  infoSpecialistStore()
);
//store
</script>

<style lang="scss">
@import "@/styles/vars/colors.scss";
.info-specialist {
  padding-top: 30px;
  background-color: #F9FAFF;
  position: relative;
  .container {
    position: relative;
    .info-card, .demo-collapse {
      position: relative;
    }
    .line-star {
      position: absolute;
      left: -300px;
      top: 1000px;
      opacity: 0.3;
    }
    .star {
      position: absolute;
      right: -320px;
      top: 900px;
      opacity: 0.3;
    }
  }
  &:after {
    content: '';
    width: 400px;
    height: 600px;
    background-image: url('../../../assets/logo/card-bg.png');
    background-repeat: no-repeat;
    background-position-x: 200px;
    background-size: cover;
    position: absolute;
    right: 0;
    opacity: 0.1;
    bottom: 0px;
  }
  &:before {
    content: '';
    width: 400px;
    height: 400px;
    background-image: url('../../../assets/logo/triagles-white.png');
    background-repeat: no-repeat;
    background-position-x: 100px;
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0px;
  }
  &__title {
    padding-top: 60px;
    padding-bottom: 120px;
    font-size: 54px;
    text-align: center;
    color: #546272;
    font-family: Cormorant Garamond;
    font-style: italic;
    line-height: 50px;
  }
  &__banner {
    background-color: #ded6d5;
    border-radius: 24px;
    .about-top {
      &__img {
        img {
          width: 100%;
          object-fit: cover;
          transform: translateY(6px);
        }
      }
      &__info {
        padding-top: 85px;
        padding-left: 65px;
        .about-text {
          padding-top: 15px;
          width: 360px;
          ul {
            display: flex;
            flex-direction: column;
            gap: 15px;
            li span {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .info-specialist__title {
    font-size: 40px;
  }
}
@media (max-width: 1000px) {
  .info-specialist__title {
    padding-bottom: 70px;
    font-size: 30px;
    line-height: 40px;
  }
}

@media (max-width: 375px) {
  .info-specialist__banner {
    .about-top__info {
      padding-top: 40px; 
      padding-left: 30px;
      .about-text {
        ul {
          gap: 5px;
        }
      }
    }
  }
}
</style>
