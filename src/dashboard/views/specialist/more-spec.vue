<template>
  <div class="more-spec" v-if="expertNames.name">
    <div class="more-spec__banner"></div>
    <div class="more-spec__top">
      <div class="more-spec__img">
        <img
          v-if="oneSpec.img"
          :src="`${url}/${oneSpec.img[0].response}`"
          alt=""
        />
      </div>
      <div class="more-spec__nav">
        <div class="more-spec__names">
          <div v-if="oneSpec.title" class="more-spec__title verify">
            {{ expertNames.name }} {{ expertNames.lname }}
            <img src="@/assets/logo/verify.png" alt="" />
          </div>
          <div class="more-spec__subtext">{{ oneSpec.subtexts }}</div>
        </div>

        <el-button class="more-btn" type="primary" round @click="moreForm(id)">
          Информация доктора
        </el-button>
        <el-button type="info" round @click="backPage()">
          back <i class="bx bx-log-out-circle"></i>
        </el-button>
      </div>
    </div>
    <el-row class="card">
      <el-col :span="8">
        <div class="more-box">
          <i class="bx bxs-graduation"></i>
          <div class="more-box__title">Образование</div>
          <div class="more-box__info" v-for="item of oneSpec.educations">
            <div class="more-box__subtitle">
              <span>Название университета</span>: {{ item.title }}
            </div>
            <div class="more-box__subtitle">
              <span>Направление</span>: {{ item.direction }}
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="more-box">
          <i class="bx bxs-briefcase-alt-2"></i>
          <div class="more-box__title">Место работы</div>
          <div class="more-box__info" v-for="item of oneSpec.work">
            <div class="more-box__subtitle">
              <span>Название Больница</span>: {{ item.title }}
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="more-box">
          <i class="bx bxs-check-shield"></i>
          <div class="more-box__title verify">Сертификат</div>
          <el-row>
            <el-col
              :span="12"
              class="certificate-img"
              v-for="list of oneSpec.certificate"
            >
              <img
                class="certificate"
                v-if="oneSpec.certificate"
                :src="`${url}/${list.response}`"
                alt=""
              />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="no-data" v-else>
    <img src="@/assets/img/nodata.jpg" alt="">
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import router from "@/router/";
const expertNames = ref({})

import { useHelperStore } from "../../../stores/admin/helpers";
const { url } = storeToRefs(useHelperStore());
import { useExpertsStore } from "../../../stores/data/expert";
const {experts} = storeToRefs(useExpertsStore())
const {get_all_experts} = useExpertsStore()
import { useViewSpecStore } from "@/stores/data/viewspec";
const { get_viewSpec, setDoctorID } = useViewSpecStore();

const paramsID = useRoute().params.id;

const moreForm = () => {
  router.push(`/more-specForm/${paramsID}`);
};

const oneSpec = ref({});
const provider = async (id) => {
  await get_viewSpec(id).then((res) => {
    oneSpec.value = res.data;
    setDoctorID(res.data._id);
  });
  experts.value.forEach((item) => {
    if(item._id == id) {
      expertNames.value = {...item}
    }
  })
  
};


const backPage = () => {
  router.push('/dash-specialist');
};
onMounted(async () => {
  get_all_experts()
  provider(useRoute().params.id);
});
</script>

<style lang="scss">
.no-data {
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: #fff;
  img {
    width: 600px;
    object-fit: cover;
  }
}
.more-spec {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #eff0f2;
  &__nav {
    display: flex;
    width: calc(100% - 250px);
    justify-content: space-between;
    align-items: center;
  }
  &__banner {
    height: 180px;
    position: relative;
    border-radius: 5px;
    background-image: url("@/assets/img/poster-kosmetolog.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -220px;
  }
  &__top {
    padding-left: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    transform: translateY(-50px);
  }
  &__img {
    width: 180px;
    height: 180px;
    border: 5px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-size: 25px;
    font-weight: 500;
    padding-bottom: 10px;
    &.verify {
      display: flex;
      align-items: end;
      gap: 10px;
      img {
        width: 23px;
        height: 23px;
        object-fit: cover;
      }
    }
  }
  .card {
    padding-top: 40px;
    .el-col-8 {
      padding: 10px;
    }
  }
  .more {
    &-box {
      height: 100%;
      padding: 15px;
      border-radius: 10px;
      background-image: url("@/assets/img/more-bg.jpg");
      background-size: cover;
      box-shadow: 0px 2px 20px #b8b8b8;
      cursor: pointer;
      i {
        font-size: 50px;
        &.bxs-check-shield {
          color: #2edbe3;
        }
      }
      &__title {
        padding-bottom: 15px;
        font-size: 23px;
        font-weight: 500;
      }
      &__subtitle {
        font-size: 16px;
        padding-bottom: 10px;
        span {
          font-size: 17px;
          font-weight: 500;
        }
      }
      .certificate-img {
        padding: 5px;
        min-height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
