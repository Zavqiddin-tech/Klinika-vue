<template>
  <div class="dash-weAbout">
    <div class="dash-weAbout__nav">
      <h1>Услуги</h1>
      <el-button type="primary" @click="openDialog()">Добавлять</el-button>
      <el-dialog
        v-model="toggle"
        :title="editToggle ? 'Редактировать эксперта' : 'Добавить эксперта'"
        width="60%"
        :before-close="handleClose"
      >
        <el-form
          ref="weAboutForm"
          :model="weAbout"
          :rules="rules"
          labelPosition="top"
        >
          <el-form-item label="title" prop="title">
            <el-input v-model="weAbout.title" />
          </el-form-item>
          <el-form-item label="text" prop="text">
            <el-input v-model="weAbout.text" />
          </el-form-item>
          <el-row class="addition justify-between">
            <el-col :span="11" v-for="item of weAbout.arr">
              <el-row class="justify-between">
                <el-col :span="16">
                  <el-form-item label="title" prop="addtitle">
                    <el-input v-model="item.title" />
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item label="number" prop="addnumber">
                    <el-input-number v-model="item.number" />
                  </el-form-item>
                </el-col>
                <el-col :span="2" class="addition-switch">
                  <span class="material-symbols-outlined"> add </span>
                  <el-switch
                     v-model="item.plus" size="small" 
                    />
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-form-item label="Картина" prop="img">
            <el-upload
              v-model:file-list="weAbout.images"
              :action="`${url}/img`"
              :headers="header.headers"
              list-type="picture-card"
              :limit="10"
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
            <el-button type="primary" @click="add(weAboutForm)"
              >добавить</el-button
            >
          </div>
        </el-form>
      </el-dialog>
    </div>
    <div class="dash-weAbout__main">
        
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage, ElNotification } from "element-plus";

// store
import { useHelperStore } from "@/stores/admin/helpers/index";
import { useTokenStore } from "@/stores/admin/user/token";
import { useDialogStore } from "@/stores/dialog/dialog";
import { useAboutStore } from "@/stores/data/dash-about";
const { url } = storeToRefs(useHelperStore());
const { header } = storeToRefs(useTokenStore());
const { toggle, editToggle } = storeToRefs(useDialogStore());
const { setToggle, setEditToggle } = useDialogStore();
const { aboutData } = storeToRefs(useAboutStore());
const { get_all_aboutData, new_aboutData } = useAboutStore();
// store

const openDialog = () => {
  setToggle(true);
};
const handleClose = () => {
  setToggle(false);
  setEditToggle(false);
  weAbout.value = {
    arr: [{ plus: false }, { plus: false }, { plus: false }, { plus: false }],
  };
};
const handleBefore = (file) => {
  if (file.size / 1024 > 3000) {
    ElMessage.error("Yuklanayotgan rasm 3 MB dan oshmasin");
  }
};



const weAboutForm = ref();
const weAbout = ref({
  arr: [{ plus: false }, { plus: false }, { plus: false }, { plus: false }],
});
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
});
const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (editToggle.value) {
        save_weAbout(weAbout.value);
      } else {
        new_aboutData(weAbout.value);
      }
      handleClose();
    } else {
      ElNotification({
        title: "Ошибка",
        message: "информация не отправлена",
        type: "error",
      });
    }
  });
};

const id = ref("");
const edit = (val) => {
  id.value = val;
};

onMounted(() => {
    get_all_aboutData()
});
</script>

<style lang="scss">
.dash-weAbout {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-input-number__decrease,
  .el-input-number__increase {
    display: none;
  }
  .el-input-number .el-input__wrapper {
    padding-left: 5px;
    padding-right: 5px;
  }
  .addition-switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 16px;
    }
  }
}
</style>
