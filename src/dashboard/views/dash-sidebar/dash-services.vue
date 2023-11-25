<template>
  <div class="dash-service">
    <div class="dash-service__nav">
      <h1>Услуги</h1>
      <el-button type="primary" @click="openDialog()">Добавлять</el-button>
      <el-dialog
        v-model="toggle"
        :title="editToggle ? 'Редактировать эксперта' : 'Добавить эксперта'"
        width="30%"
        :before-close="handleClose"
      >
        <el-form
          ref="serviceForm"
          :model="service"
          :rules="rules"
          labelPosition="top"
        >
          <el-form-item label="Имя" prop="title">
            <el-input v-model="service.title" />
          </el-form-item>
          <el-form-item label="Фамилия" prop="text">
            <el-input v-model="service.text" />
          </el-form-item>
          <el-form-item label="Картина" prop="img">
            <el-upload
              v-model:file-list="service.img"
              :action="`${url}/img`"
              :headers="header.headers"
              list-type="picture-card"
              :limit="1"
              :before-upload="handleBefore"
              :on-preview="handlePreview"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-dialog v-model="dialogVisible">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
          </el-dialog>

          <div class="btn-group">
            <el-button @click="handleClose">отмена</el-button>
            <el-button type="primary" @click="addSpecialist(serviceForm)"
              >добавить</el-button
            >
          </div>
        </el-form>
      </el-dialog>
    </div>
    <servicesTable @edit="edit" />
  </div>
</template>

<script setup>

import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage, ElNotification } from "element-plus";

import servicesTable from '../../components/table/service/services-table.vue'

// store
import { useHelperStore } from "@/stores/admin/helpers/index";
import { useTokenStore } from "@/stores/admin/user/token";
import { useDialogStore } from "@/stores/dialog/dialog";
import { useServiceStore } from "@/stores/data/service/service";
const { url } = storeToRefs(useHelperStore());
const { header } = storeToRefs(useTokenStore());
const { toggle, editToggle } = storeToRefs(useDialogStore());
const { setToggle, setEditToggle } = useDialogStore();
const {get_all_services, new_service, save_service, get_service} = useServiceStore()
// store

const openDialog = () => {
  setToggle(true);
};
const handleClose = () => {
  setToggle(false);
  setEditToggle(false);
  service.value = {}
};
const handleBefore = (file) => {
  if (file.size / 1024 > 500) {
    ElMessage.warning("Yuklanayotgan rasm 500 kb dan oshmasin");
  }
};

const serviceForm = ref();
const service = ref({});
const rules = ref({
  title: [
    {
      required: true,
      message: "наименование услуги",
      trigger: "blur",
    },
    {
      min: 3,
      message: "текст должно состоять более чем из 3 букв",
    },
  ],
  text: [
    {
      required: true,
      message: "подробная информация об услуге",
      trigger: "blur",
    },
    {
      min: 3,
      message: "текст должно состоять более чем из 3 букв",
    },
  ],
  img: [
    {
      required: true,
      message: "фото предоставленной услуги",
      trigger: "change",
    },
  ],
});
const addSpecialist = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if(editToggle.value) {
        save_service(service.value)
      } else {
        new_service(service.value);
      }
      handleClose();
      service.value = {};
    } else {
      ElNotification({
        title: "Ошибка",
        message: "информация не отправлена",
        type: "error",
      });
    }
  });
};

const id = ref('')
const edit = (val) => {
  id.value = val
}

watch(editToggle, async ()=> {
  if(editToggle.value) {
    await get_service(id.value) 
    .then(res => {
      service.value = {...res.data}
      if(service.value.img) {
        service.value.img[0].url = `${url.value}/${service.value.img[0].response}`
      }
    }) 
  }
})
onMounted(()=> {
  get_all_services()
})
</script>

<style lang="scss">
.dash-service {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
