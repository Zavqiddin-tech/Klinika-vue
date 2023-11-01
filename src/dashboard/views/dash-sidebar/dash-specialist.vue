<template>
  <div class="dash-specialist">
    <div class="dash-specialist__nav">
      <h1>Специалисты</h1>
      <el-button type="primary" @click="openDialog()">Добавлять</el-button>
      <el-dialog
        v-model="toggle"
        :title="editToggle ? 'Редактировать эксперта' : 'Добавить эксперта'" 
        width="30%"
        :before-close="handleClose"
      >
        <el-form
          ref="dashSpecialistForm"
          :model="specialist"
          :rules="rules"
          labelPosition="top"
        >
          <el-form-item label="Имя" prop="name">
            <el-input v-model="specialist.name" />
          </el-form-item>
          <el-form-item label="Фамилия" prop="lname">
            <el-input v-model="specialist.lname" />
          </el-form-item>
          <el-form-item label="Отчество" prop="sname">
            <el-input v-model="specialist.sname" />
          </el-form-item>
          <el-form-item label="Выберите профессию" prop="profession">
            <el-select
              multiple
              v-model="specialist.profession"
              placeholder="Специальность"
              clearable
            >
              <el-option
                v-for="(item, index) in activeProfs"
                :key="index"
                :label="item.title"
                :value="item._id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Картина" prop="avatar">
            <el-upload
              v-model:file-list="specialist.avatar"
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
            <el-button type="primary" @click="addSpecialist(dashSpecialistForm)">добавить</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>
    <expertsTable @edit="edit"/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage, ElNotification } from "element-plus";
import expertsTable from "@/dashboard/components/table/experts-table.vue";

// store
import { useHelperStore } from "@/stores/admin/helpers/index";
const { url } = storeToRefs(useHelperStore());

import { useTokenStore } from "@/stores/admin/user/token";
const { header } = storeToRefs(useTokenStore());

import { useDialogStore } from "@/stores/dialog/dialog";
const { toggle, editToggle } = storeToRefs(useDialogStore());
const { setToggle, setEditToggle } = useDialogStore();

import { useProfessionStore } from "@/stores/data/profession";
const { activeProfs } = storeToRefs(useProfessionStore());
const { get_active_profs } = useProfessionStore();

import { useExpertsStore } from "@/stores/data/expert";
const {get_all_experts, get_expert, new_expert, save_expert} = useExpertsStore()
// store


const openDialog = () => {
  setToggle(true);
};
const handleClose = () => {
  setToggle(false);
  setEditToggle(false)
};
const handleBefore = (file) => {
  if (file.size / 1024 > 500) {
    ElMessage.warning("Yuklanayotgan rasm 500 kb dan oshmasin");
  }
};
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const handlePreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url;
  dialogVisible.value = true;
};

const dashSpecialistForm = ref();
const specialist = ref({});
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
  sname: [
    {
      required: true,
      message: "Введите ваше Отчество",
      trigger: "blur",
    },
    {
      min: 3,
      message: "Фамилия должно состоять более чем из 3 букв",
    },
  ],
  profession: [
    {
      required: true,
      message: "Выберите профессию",
      trigger: "blur",
    },
  ],
  avatar: [
    {
      required: true,
      message: "Введите специальность",
      trigger: "change",
    },
  ],
});
const addSpecialist = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) { 
      if(editToggle.value) {
        save_expert(specialist.value)
      }
      else {
        new_expert(specialist.value)
      }
      handleClose();
      specialist.value = {};
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
const edit = (val)=> {
  id.value = val
}
watch(editToggle, async ()=> {
  if(editToggle.value) {
    await get_expert(id.value)
    .then(res => {
      console.log(res.data);
       specialist.value = {...res.data}
       if(specialist.value.avatar) {
        console.log(specialist.value);
        specialist.value.avatar[0].url = `${url.value}/${specialist.value.avatar[0].response}`
       }
    })
  }
})
onMounted(async () => {
 await get_all_experts()
 await get_active_profs()
});
</script>

<style lang="scss">
.dash-specialist {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-group {
    text-align: right;
  }
}
</style>
../../stores/data/expert