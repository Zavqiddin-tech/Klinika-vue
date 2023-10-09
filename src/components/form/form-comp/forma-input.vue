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
        <img src="@/assets/logo/phone.png" alt="" />
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
defineProps(["infoForm"]);

import { ElMessage } from "element-plus";
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
      message: "Telefon raqamingizni kiriting",
      trigger: "blur",
    },
    {
      min: 19,
      max: 19,
      message: "Raqamni to'liq kiriting",
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
    } else {
      ElMessage.error("Barcha maydonlarni to`ldiring");
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
  &-input {
    width: 360px;
    padding-left: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    background-color: #fff;
    .el-input {
      &__wrapper {
        padding: 8px;
        border-radius: 24px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left-color: #d9d9d9;
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
