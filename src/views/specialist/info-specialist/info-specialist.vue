<template>
  <div class="info-specialist">
    <div class="container">
      <div class="line-star">
        <img src="../../../assets/logo/line-star2.png" alt="" />
      </div>
      <div class="star">
        <img src="../../../assets/logo/star-big.png" alt="" />
      </div>
      <div class="breadcrumb">
        <span>Главная</span>
        <span>Наши специалисты</span>
        <span>Бекетова Екатерина Николаевна</span>
      </div>
      <sketelon />
      <about-top
        v-if="dataInfo.img"
        class="info-specialist__banner"
        :infoImg="
          dataInfo.img[1] ? `${url}/${dataInfo.img[1].response}` : uploadImg
        "
        :title="`${dataInfo.specId.lname} ${dataInfo.specId.sname}`"
        :titleItalic="dataInfo.specId.name"
        :textGroup="dataInfo.specId.profession"
        :btnText="btnText"
      />
      <div class="info-specialist__title">
        Когда косметолог и пациент в одной команде, происходят грандиозные
        перемены.
      </div>
      <info-specialist-card
        v-if="dataInfo.img"
        :title="dataInfo.title"
        :subtitle="dataInfo.subtitle"
        :subtexts="dataInfo.subtexts"
        :img="dataInfo.img[0].response"
      />
      <info-accordion :infoAccordion="infoStAccordion" />
      <info-cards />
      <info-blog />
      <info-form />
      <recordDoctor />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import sketelon from "@/components/skeleton/sketelon.vue";
import aboutTop from "@/components/about/about-comp/about-top.vue";
import uploadImg from "@/assets/img/upload-img.png";
import infoSpecialistCard from "./comp/infoSpecialistCard.vue";
import infoAccordion from "./comp/infoAccordion.vue";
import infoCards from "./comp/info-cards.vue";
import infoBlog from "./comp/info-blog.vue";
import infoForm from "./comp/info-form.vue";
import recordDoctor from "@/components/page/dialog/recordDoctor.vue";

const dataInfo = ref({});

const btnText = ref("записатция");
//store
import { useHelperStore } from "@/stores/admin/helpers/index";
import { useLoadingStore } from "@/stores/loading/loading";
import { useAccordionStore } from "@/stores/accordion/accordion";
import { useViewSpecStore } from "@/stores/data/viewspec";
const { url } = storeToRefs(useHelperStore());
const { setLoading } = useLoadingStore();
const { infoStAccordion } = storeToRefs(useAccordionStore());
const { get_viewSpecAll } = useViewSpecStore();
//store

const providerSpec = async () => {
  await get_viewSpecAll(useRoute().params.id).then((res) => {
    if (res.data) {
      dataInfo.value = { ...res.data };
      setLoading(false);
    }
  });
};

onMounted(async () => {
  setLoading(true);
  window.scrollTo(0, 0);
  providerSpec();
});
</script>

<style lang="scss">
@import "@/styles/vars/colors.scss";
.info-specialist {
  background-color: #f9faff;
  .nodata {
    text-align: center;
    img {
      max-width: 600px;
      border-radius: 50%;
    }
  }
  .container {
    position: relative;
    .info-card,
    .demo-collapse {
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
    content: "";
    width: 400px;
    height: 600px;
    background-image: url("../../../assets/logo/card-bg.png");
    background-repeat: no-repeat;
    background-position-x: 200px;
    background-size: cover;
    position: absolute;
    right: 0;
    opacity: 0.1;
    bottom: 0px;
  }
  &:before {
    content: "";
    width: 400px;
    height: 400px;
    background-image: url("../../../assets/logo/triagles-white.png");
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

@media (max-width: 500px) {
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
@media (max-width: 500px) {
  .info-specialist__banner {
    .about-top__info {
      padding-top: 20px;
      padding-left: 10px;
      .about-text {
        ul {
          width: 70%;
          gap: 5px;
        }
      }
    }
  }
}
</style>
