<template>
  <div class="more-service__nav">
    <h2>подробнее об услуге</h2>
    <el-button type="primary" @click="openDialog()">Добавлять</el-button>
  </div>
  <el-dialog
    v-model="toggle"
    :title="editToggle ? 'Редактировать подробнее услуге' : 'подробнее услуге'"
    width="50%"
    :before-close="handleClose"
  >
    <el-form
      ref="moreServiceForm"
      :model="moreService"
      :rules="rules"
      labelPosition="top"
    >
      <el-row class="more-service__forms">
        <el-col :span="12" class="more-service__form">
          <el-form-item label="title" prop="title">
            <el-input v-model="moreService.title" />
          </el-form-item>
          <el-form-item label="О процедуре" prop="text">
            <el-input 
              v-model="moreService.text" 
              :autosize="{ minRows: 2, maxRows: 3 }"
              type="textarea"
              placeholder="процедуре"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" class="more-service__form">
          <el-form-item label="subtitle" prop="subtitle">
            <el-input v-model="moreService.subtitle" />
          </el-form-item>
        </el-col>
        <el-row class="more-service__form numbers">
          <el-form-item label="seans" prop="seans">
            <el-input-number v-model="moreService.seans" />
          </el-form-item>
          <el-form-item label="procedure" prop="procedure">
            <el-input-number v-model="moreService.procedure" />
          </el-form-item>
          <el-form-item label="result" prop="result">
            <el-input-number v-model="moreService.result" />
          </el-form-item>
        </el-row>
      </el-row>
      <el-form-item label="Картина" prop="image">
        <el-upload
          v-model:file-list="moreService.image"
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
      <div class="btn-group">
        <el-button @click="handleClose">отмена</el-button>
        <el-button type="primary" @click="addSpecialist(moreServiceForm)"
          >добавить</el-button
        >
      </div>
    </el-form>
  </el-dialog>
  <moreServiceTable @edit="edit" />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import moreServiceTable from "@/dashboard/components/table/service/more-serviceTable.vue";

//store
import { useHelperStore } from "@/stores/admin/helpers";
import { useTokenStore } from "@/stores/admin/user/token";
import { useDialogStore } from "@/stores/dialog/dialog";
import { useMoreServiceStore } from "@/stores/data/service/more-service";
const { url } = storeToRefs(useHelperStore());
const { header } = storeToRefs(useTokenStore());
const { toggle, editToggle } = storeToRefs(useDialogStore());
const { setToggle, setEditToggle } = useDialogStore();
const {
  get_all_moreServices,
  new_moreService,
  save_moreService,
  get_moreService,
} = useMoreServiceStore();
//store

const moreServiceForm = ref();
const moreService = ref({
  serviceId: useRoute().params.id,
});

const handleClose = () => {
  setToggle(false);
  setEditToggle(false);
  moreService.value = {};
};

const handleBefore = (file) => {
  if (file.size / 1024 > 500) {
    ElMessage.warning("Yuklanayotgan rasm 500 kb dan oshmasin");
  }
};
const rules = ref({
  title: [
    {
      required: true,
      message: "заполните поле",
      trigger: "blur",
    },
    {
      min: 3,
      message: "текст должно состоять более чем из 3 букв",
    },
  ],
  subtitle: [
    {
      required: true,
      message: "заполните поле",
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
      message: "заполните поле",
      trigger: "blur",
    },
    {
      min: 3,
      message: "текст должно состоять более чем из 3 букв",
    },
  ],
  seans: [
    {
      required: true,
      message: "заполните поле",
      trigger: "blur",
    },
  ],
  procedure: [
    {
      required: true,
      message: "заполните поле",
      trigger: "blur",
    },
  ],
  result: [
    {
      required: true,
      message: "заполните поле",
      trigger: "blur",
    },
  ],
  image: [
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
      if (editToggle.value) {
        save_moreService(moreService.value);
      } else {
        new_moreService(moreService.value);
      }
      handleClose();
      moreService.value = {};
    } else {
      ElNotification({
        title: "Ошибка",
        message: "информация не отправлена",
        type: "error",
      });
    }
  });
};

const openDialog = () => {
  setToggle(true);
};
const id = ref("");
const edit = (val) => {
  id.value = val;
};
watch(editToggle, async () => {
  if (editToggle.value) {
    await get_moreService(id.value).then((res) => {
      moreService.value = { ...res.data };
      if (moreService.value.image) {
        moreService.value.image.forEach((item) => {
          item.url = `${url.value}/${item.response}`;
        });
      }
    });
  }
});

onMounted(() => {
  get_all_moreServices(useRoute().params.id);
});
</script>

<style lang="scss">
.more-service {
  &__nav {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__forms {
    margin-left: -10px;
    margin-right: -10px;
  }
  &__form {
    padding: 0px 10px;
  }
  &__form.numbers {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
