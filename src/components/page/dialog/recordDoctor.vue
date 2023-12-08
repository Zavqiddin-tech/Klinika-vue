<template>
  <el-dialog
    v-model="recordSpec"
    title="Записать"
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
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import { vMaska } from "maska";
const id = useRoute().params.id;

import { useRecordDoctorStore } from "@/stores/data/recordDoctor";
import { useRecordServiceStore } from "@/stores/data/recordService";
const { recordSpec, editRecordSpec, doctorId } = storeToRefs(useRecordDoctorStore());
const { setRecordSpec, setEditRecordSpec } = useRecordDoctorStore()
const { new_record, get_record } = useRecordDoctorStore();
const { save_recordService } = useRecordServiceStore();

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
  setEditRecordSpec(false);
  recordForm.value = {
    specialistId: id,
    type: 1,
    phone: "+998",
  };
};


watch(editRecordSpec, async ()=> {
  if (editRecordSpec.value) {
    await get_record(doctorId.value)
    .then(res => {
      recordForm.value = {...res.data}
    })
  }
})
const consultAdd = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (editRecordSpec.value) {
        save_recordService(recordForm.value)
        handleClose()
      } else {
        new_record(recordForm.value);
        recordForm = ref({
          number: "+998",
        });
        handleClose();
      }
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
