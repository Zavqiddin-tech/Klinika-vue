<template>
  <el-dialog
    v-model="recordSpec"
    title="Записаться"
    width="500px"
    :before-close="handleClose"
  >
    <el-form
      ref="servisForm"
      :model="recordForm"
      :rules="rules"
      labelPosition="top"
    >
      <el-form-item label="Имя" prop="name">
        <el-input v-model="recordForm.name" />
      </el-form-item>
      <el-form-item label="Фамилия" prop="lname">
        <el-input v-model="recordForm.lname" />
      </el-form-item>
      <el-form-item label="Номер телефона" prop="phone">
        <el-input
          v-model="recordForm.phone"
          v-maska
          data-maska="+998 (##) ###-##-##"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose()">отмена</el-button>
        <el-button @click="consultAdd(servisForm)" type="primary">
          отправлять
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import { vMaska } from "maska";
const id = useRoute().params.id

import { useDialogStore } from "@/stores/dialog/dialog";
import { useRecordDoctorStore } from "@/stores/data/recordDoctor";
const { recordSpec } = storeToRefs(useDialogStore());
const { setRecordSpec } = useDialogStore();
const { new_record } = useRecordDoctorStore();

const notifWarning = () => {
  ElNotification({
    title: "Предупреждение",
    message: "Заполните все поля",
    type: "warning",
    position: "bottom-left",
  });
};

const servisForm = ref();
let recordForm = ref({
  specialistId: useRoute().params.id,
  type: 1,
  phone: "+998",
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
  lname: [
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
  phone: [
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
  setRecordSpec(false);
  recordForm.value = {
    specialistId: id,
    type: 1,
    phone: "+998",
  };
};
const consultAdd = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      new_record(recordForm.value);
      recordForm = ref({
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
@media (max-width: 500px) {
  .el-dialog {
    width: 95%;
  }
}
</style>
