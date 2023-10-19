<template>
  <el-dialog
    v-model="regisDialog"
    title="Регистрация"
    width="500px"
    :before-close="handleClose"
  >
    <el-form
      ref="servisForm"
      :model="userdata"
      :rules="rules"
      labelPosition="top"
    >
      <el-form-item label="E-Mail" prop="email">
        <el-input v-model="userdata.email" />
      </el-form-item>
      <el-form-item label="Номер телефона" prop="number">
        <el-input
          v-model="userdata.number"
          v-maska
          data-maska="+998 (##) ###-##-##"
        />
      </el-form-item>
      <el-form-item label="пароль" prop="password">
        <el-input v-model="userdata.password" type="password" show-password />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <div class="sign-text" @click="nextModal()">Войти</div>
        <div class="dialog-btns">
          <el-button @click="handleClose()">отмена</el-button>
          <el-button @click="serviceAdd(servisForm)" type="primary"
            >отправлять</el-button
          >
        </div>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { ElNotification } from "element-plus";
import { vMaska } from "maska";

import { useDialogStore } from "@/stores/dialog/dialog";
const { regisDialog } = storeToRefs(useDialogStore());
const { setRegisDialog, setSignDialog } = useDialogStore();

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
    title: "Успешно",
    message: "Информация отправлена",
    type: "success",
    position: "bottom-left",
  });
};

const servisForm = ref();
let userdata = ref({
  number: "+998",
});

const rules = ref({
  email: [
    {
      required: true,
      message: "введите адрес электронной почты или войдите",
      trigger: "blur",
    },
    {
      min: 5,
      message: "текст должно состоять более чем из 5 букв",
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
  password: [
    {
      required: true,
      message: "Введите ваше пароль",
      trigger: "blur",
    },
    {
      min: 8,
      message: "пароль должно состоять более чем из 8 букв",
    },
  ],
});

const handleClose = () => {
  setRegisDialog(false);
};
const serviceAdd = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      successWarning();
      handleClose();
      userdata.value = ref({});
    } else {
      notifWarning();
    }
  });
};

// Nextmodal
const nextModal = () => {
  handleClose();
  setSignDialog(true);
};
</script>

<style lang="scss">
.el-overlay {
  background-color: rgba(87, 87, 87, 0.11);
  .el-dialog {
    box-shadow: unset;
    .dialog-footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
}

@media (max-width: 500px) {
  .el-dialog {
    width: 95%;
  }
}
</style>
