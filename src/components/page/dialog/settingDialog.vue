<template>
  <el-dialog
    v-model="toggle"
    title="Социальные сети"
    width="500px"
    :before-close="handleClose"
  >
    <el-form
      ref="servisForm"
      :model="socialForm"
      :rules="rules"
      labelPosition="top"
    >
      <el-form-item label="Имя" prop="name">
        <el-input v-model="socialForm.name" />
      </el-form-item>
      
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose()">отмена</el-button>
        <el-button @click="add(settingForm)" type="primary">
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

import { useDialogStore } from "@/stores/dialog/dialog";
const { toggle, editToggle } = storeToRefs(useDialogStore());
const { setToggle, setEditToggle } = useDialogStore();

const settingForm = ref();
let socialForm = ref({});

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
  setToggle(false);
  setEditToggle(false);
  socialForm.value = { };
};
const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      handleClose();
    } else {
      ElNotification({
        title: "Предупреждение",
        message: "Заполните все поля",
        type: "warning",
        position: "bottom-left",
      });
    }
  });
};
</script>

<style lang="scss">
@media (max-width: 500px) {
  .el-dialog {
    width: 95%;
  }
}
</style>
