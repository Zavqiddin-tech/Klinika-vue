<template>
  <el-form
    class="form"
    ref="priceprodForm"
    :model="priceprod"
    :rules="rules"
    @submit.prevent="add(priceprodForm)"
  >
    <el-form-item prop="number">
      <div class="form-input">
        <div class="form-input__img">
          <img src="@/assets/logo/phone.png" alt="" />
        </div>
        <el-input
          v-model="priceprod.number"
          v-maska
          data-maska="+998 (##) ###-##-##"
          @keypress.enter="add(priceprodForm)"
        />
      </div>
    </el-form-item>
    <div class="form-agree" v-if="infoForm">
      <el-switch
        @click="switchToggle()"
        v-model="switchForm"
        style="--el-switch-on-color: #9a888a; --el-switch-off-color: #ccc"
      />
      <div class="form-agree__text">
        {{ agreeText }}
      </div>
    </div>
    <el-button
      :disabled="buttonForm"
      @click="add(priceprodForm)"
      class="btn-info form-btn"
      >Отправить</el-button
    >
  </el-form>
</template>
<script setup>
import phoneIcon from "@/assets/logo/phone.png";
defineProps(["infoForm"]);

import { ElNotification } from "element-plus";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { vMaska } from "maska";
const priceprodForm = ref();

import { useFormaStore } from "../../../stores/forma/forma";
const { switchForm, buttonForm } = storeToRefs(useFormaStore());
const { setSwitchForm } = useFormaStore();
const switchToggle = () => {
  if (switchForm.value) {
    setSwitchForm(true);
  } else {
    setSwitchForm(false);
  }
};
const agreeText = ref(
  "Я соглашаюсь с политикой обработки персональных данных  и пользовательским соглашением, а также даю согласие на обработку персональных данных."
);
const value1 = ref(false);

const priceprod = ref({
  number: "+998",
});

const rules = ref({
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

const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (editToggle) {
      }
      priceprod.value = {};
      handleClose();
      ElNotification({
        title: "Успешно",
        message: "Информация отправлена",
        type: "success",
        position: "bottom-left",
      });
    } else {
      ElNotification({
        title: "Предупреждение",
        message: "Введите свой номер",
        type: "warning",
        position: "bottom-left",
      });
    }
  });
};
</script>

<style lang="scss">
.form {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  &-btn {
    transform: translateY(-10px);
  }
  .el-form-item {
    border: 1px solid #d9d9d9;
    border-radius: 24px;
  }
  .el-form-item.is-error .el-input__wrapper {
    box-shadow: 0 0 0;
  }
  .el-form-item.is-error {
    border: 1px solid red;
  }
  &-input {
    width: 360px;
    gap: 10px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    background-color: #fff;
    &__img {
      padding: 8px;
      border-right: 1px solid #d9d9d9;
      img {
        vertical-align: middle;
      }
    }
    .el-input {
      &__wrapper {
        padding: 0px;
        border-radius: 24px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-lef: 2px solid #d9d9d9;
        &.is-focus {
          box-shadow: unset;
        }
        box-shadow: unset;
      }
    }
  }

  .form-agree {
    display: flex;
    gap: 20px;
    &__text {
      font-size: 12px;
      font-weight: 200;
    }
  }
}

@media (max-width: 768px) {
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 375px) {
  .form .form-agree {
    margin-bottom: 20px;
  }
  .form-input {
    width: 300px;
  }
}
</style>
