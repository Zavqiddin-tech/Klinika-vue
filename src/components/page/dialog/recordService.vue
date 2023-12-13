<template>
  <el-dialog
    v-model="recordServi"
    title="Записаться Услуги"
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
      <el-form-item
        v-if="editRecordServi"
        label="Услуги edit 1"
        prop="serviceId"
      >
        <el-select
          v-model="recordForm.serviceId"
          clearable
          placeholder="Select"
          @change="selectChange(recordForm.serviceId)"
        >
          <el-option
            v-for="item in services"
            :key="item._id"
            :label="item.title"
            :value="item._id"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        v-if="editRecordServi"
        label="Услуги edit 2"
        prop="serviceItemId"
      >
        <el-select
          v-if="secondArr[0]"
          v-model="recordForm.serviceItemId"
          clearable
          placeholder="Select"
        >
          <el-option
            v-for="item in secondArr[0].serviceItem"
            :key="item._id"
            :label="item.title"
            :value="item._id"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="detailToggle" label="Услуги" prop="serviceId">
        <el-select
          v-model="recordForm.serviceItemId"
          clearable
          placeholder="Select"
        >
          <el-option
            v-for="item of temporary.serviceItem"
            :value="item._id"
            :label="item.title"
          />
        </el-select>
      </el-form-item>
      <el-form-item class="record-mt" label="Номер телефона" prop="phone">
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

const secondArr = ref([]);

import { useServiceStore } from "@/stores/data/service/service";
import { useRecordServiceStore } from "@/stores/data/recordService";
const { services } = storeToRefs(useServiceStore());
const { temporary, detailToggle, recordServi, serviId, editRecordServi } =
  storeToRefs(useRecordServiceStore());
const {
  new_recordService,
  save_recordService,
  get_recordService,
  setRecordServi,
  setEditRecordServi,
  setDetailToggle,
} = useRecordServiceStore();

const id = ref("");
id.value = useRoute().params.id;

const servisForm = ref();
let recordForm = ref({
  type: 2,
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
  serviceItemId: [
    {
      required: true,
      message: "Выберите раздел",
      trigger: "blur",
    },
  ],
});
const handleClose = () => {
  setRecordServi(false);
  setEditRecordServi(false);
  recordForm.value = {
    type: 2,
    phone: "+998",
  };
};

watch(editRecordServi, async () => {
  console.log("services > ", services.value);
  if (editRecordServi.value) {
    setDetailToggle(false);
    await get_recordService(serviId.value).then((res) => {
      recordForm.value = {
        ...res.data,
        serviceId: res.data.serviceId._id,
        serviceItemId: res.data.serviceItemId._id,
      };
      secondArr.value = services.value.filter(
        (item) => item._id == res.data.serviceId._id
      );
    });
  }
});

const selectChange = async (e) => {
  recordForm.value.serviceItemId = ''
  secondArr.value = services.value.filter(item => item._id == e)
};


const consultAdd = async (formEl) => {
  if (detailToggle.value) {
    console.log("salom 1");
    recordForm.value = {
      ...recordForm.value,
      serviceId: temporary.value._id,
    };
  }
  if (editRecordServi.value) {
    // XIzmatga arizani edit holati uchun bo'sh qoldirilishi kerak bo'ldi
  } else {
    console.log("salom 2222");
    recordForm.value = {
      ...recordForm.value,
      serviceId: temporary.value._id,
      serviceItemId: id.value,
    };
  }
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (editRecordServi.value) {
        save_recordService(recordForm.value);
        handleClose();
      } else {
        new_recordService(recordForm.value);
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
.record-mt {
  margin-top: 22px;
}
@media (max-width: 500px) {
  .el-dialog {
    width: 95%;
  }
}
</style>
