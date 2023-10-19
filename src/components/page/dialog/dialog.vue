<template>
  <el-dialog
    v-model="recordDialog"
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
        <el-button @click="handleClose()">отмена</el-button>
        <el-button @click="serviceAdd(servisForm)" type="primary">
            отправлять
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { ElNotification } from "element-plus";
import { vMaska } from "maska";

import { useDialogStore } from "../../../stores/dialog/dialog";
const { recordDialog } = storeToRefs(useDialogStore());
const { setRecordDialog } = useDialogStore();

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
  setRecordDialog(false);
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

</script>

<style lang="scss">
.el-overlay {
  overflow: hidden;
    background-color: rgb(0, 0, 0);
    .el-dialog {
        box-shadow: unset;
    }
}

@media (max-width: 500px) {
    .el-dialog {
        width: 95%;
    }
}
</style>
