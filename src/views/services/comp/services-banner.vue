<template>
  <div class="services-banner">
    <el-row>
      <el-col :span="12" :xs="24">
        <div class="services-banner__info">
          <div class="title-vs-italic">
            <span>{{ obj.titleItalic }}</span>
            {{ obj.title }}
          </div>
          <div class="text light">
            {{ obj.text }}
          </div>
          <div class="btn-group">
            <el-button v-if="obj.leftBtn" round class="btn-white big"
              >Подробнее
            </el-button>
            <el-button @click="servicesModal()" class="btn-info"
              >Записаться</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div class="services-banner__img">
          <img src="@/assets/img/services-about.png" alt="" />
          <img :src="obj.img" alt="" />
        </div>
      </el-col>
    </el-row>
    <div class="services-cards">
      <el-row>
        <el-col v-if="obj.cards" :span="6" :xs="10" v-for="item in obj.cards">
          <div class="services-card">
            <div class="services-card__text">
              {{ item.text }}
            </div>
            <el-button class="btn-white" round>Подробнее</el-button>
          </div>
        </el-col>
        <div
          v-if="obj.bottomBtn"
          class="width-full mt-25 d-flex justify-center"
        >
          <el-button class="btn-white" round @click="servicesAbout(obj)"
            >Показать еще</el-button
          >
        </div>
      </el-row>
    </div>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="Записаться"
    width="500px"
    :before-close="handleClose"
  >
    <el-form
      ref="servisForm"
      :model="ruleForm"
      :rules="rules"
      labelPosition="top"
    >
      <el-form-item label="Имя" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Фамилия" prop="surname">
        <el-input v-model="ruleForm.surname" />
      </el-form-item>
      <el-form-item label="Номер телефона" prop="number">
        <el-input
          v-model="ruleForm.number"
          v-maska
          data-maska="+998 (##) ###-##-##"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button @click="serviceAdd(servisForm)" type="primary">
          Send
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
const props = defineProps(["obj"]);
import { ref } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router/index.js";
import { ElNotification } from "element-plus";
import { vMaska } from "maska";
const notifWarning = () => {
  ElNotification({
    title: "Предупреждение",
    message: "Заполните все поля",
    type: "warning",
    position: "bottom-left",
  });
};
const successWarning = () => {
  ElNotification({
    title: "Успех",
    message: "Информация отправлена",
    type: "success",
    position: "bottom-left",
  });
};

const servicesModal = () => {
  dialogVisible.value = true;
};
const dialogVisible = ref(false);

const servisForm = ref();
let ruleForm = ref({
  number: "+998",
});
const rules = ref({
  name: [
    {
      required: true,
      message: "Введите ваше имя",
      trigger: "blur",
    },
    {
      min: 3,
      message: "имя должно состоять более чем из 3 букв",
    },
  ],
  surname: [
    {
      required: true,
      message: "Введите ваше фамилия",
      trigger: "blur",
    },
    {
      min: 3,
      message: "Фамилия должно состоять более чем из 3 букв",
    },
  ],
  number: [
    {
      required: true,
      message: "Введите свой номер телефона",
      trigger: "blur",
    },
    {
      min: 19,
      max: 19,
      message: "Введите полный номер",
      trigger: "blur",
    },
  ],
});
const handleClose = () => {
  dialogVisible.value = false;
};
const serviceAdd = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      successWarning();
      ruleForm = ref({
        number: "+998",
      });
      handleClose();
    } else {
      notifWarning();
    }
  });
};

import { useServicesStore } from "@/stores/services/services";
const { setServicesAboutObj } = useServicesStore();

const servicesAbout = (val) => {
  setServicesAboutObj(val);
  router.push("/services-detail/:id");
};
</script>

<style lang="scss">
.services-banner {
  margin-bottom: 24px;
  padding: 40px 30px;
  background-color: #e7e1e0;
  border-radius: 24px;
  &__info {
    height: 100%;
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
    .title-vs-italic {
      width: 230px;
      line-height: 44px;
    }
    .text {
      font-size: 18px;
      padding-top: 30px;
      padding-bottom: 40px;
    }
  }
  &__img {
    text-align: right;
  }
  .services-cards {
    .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .el-col {
        padding: 0px 12px;
      }
    }
  }
  .services-card {
    height: 180px;
    padding: 20px;
    position: relative;
    border-radius: 24px;
    background-color: #f9faff;
    &__text {
      padding-bottom: 12px;
      color: #546272;
      font-weight: 200;
      font-size: 20px;
      line-height: 30px;
    }
    .el-button {
      position: absolute;
      bottom: 15px;
    }
  }
}

@media (max-width: 1000px) {
  .services-banner__info {
    .title-vs-italic {
      line-height: 35px;
    }
    .text.light {
      font-size: 16px;
    }
  }
  .services-banner {
    .services-card__text {
      font-size: 16px;
      line-height: 25px;
    }
  }
}

@media (max-width: 768px) {
  .services-cards {
    .el-row {
      display: none;
    }
  }
}
</style>
