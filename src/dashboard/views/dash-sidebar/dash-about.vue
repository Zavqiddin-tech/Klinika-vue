<template>
  <div class="dash-weAbout">
    <div class="dash-weAbout__nav">
      <h1>О клинике</h1>
      <el-button
        v-if="aboutData[0]"
        class="btn-edit"
        type="primary"
        @click="openEdit()"
      >
        изменить <span class="material-symbols-outlined"> edit </span>
      </el-button>
      <el-button v-else type="primary" @click="openDialog()">
        Добавлять
      </el-button>
      <el-dialog
        v-model="toggle"
        :title="editToggle ? 'Редактировать информация' : 'Добавить информация'"
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
                  <el-switch v-model="item.plus" size="small" />
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
      <el-row class="dash-weAbout__boxes">
        <el-col :span="8">
          <div class="dash-weAbout__box one">
            <div class="we-title">Заголовок</div>
            <div class="we-text" v-if="aboutData[0]">
              {{ aboutData[0].title }}
              Центр косметологии Клиники Екатерининская
            </div>
            <img src="@/assets/img/we-about1.jpg" alt="" />
          </div>
        </el-col>
        <el-col :span="15">
          <div class="dash-weAbout__box two">
            <div class="we-title">Текст</div>
            <div class="we-text" v-if="aboutData[0]">
              {{ aboutData[0].text }}
              В косметологии Клиники Екатерининская работают только
              врачи-дерматокосметологи и трихологи. Поэтому мы гарантируем
              профессиональный подход и только самое качественное выполнение
              услуг. К вашим услугам лазерная и инъекционная косметология,
              аппаратные методики, профессиональный уход за кожей.
            </div>
            <img src="@/assets/img/we-about3.jpg" alt="" />
          </div>
        </el-col>
      </el-row>
      <el-row v-if="aboutData[0]" class="dash-weAbout__numbers">
        <el-col :span="6" v-for="list of aboutData[0].arr">
          <div class="dash-weAbout__number">
            <div class="we-subtitle">{{ list.title }}</div>
            <div class="we-number">
              {{ list.number }}
              <span v-if="list.plus" class="material-symbols-outlined">
                add
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
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
const { get_all_aboutData, new_aboutData, save_aboutData, get_aboutData } =
  useAboutStore();
// store

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

const openDialog = () => {
  setToggle(true);
};
const handleClose = () => {
  weAbout.value = {
    arr: [{ plus: false }, { plus: false }, { plus: false }, { plus: false }],
  };
  setToggle(false);
  setEditToggle(false);
};
const handleBefore = (file) => {
  if (file.size / 1024 > 3000) {
    ElMessage.error("Yuklanayotgan rasm 3 MB dan oshmasin");
  }
};

const openEdit = () => {
  setToggle(true);
  setEditToggle(true);
};

watch(editToggle, async () => {
  if (editToggle.value) {
    await get_aboutData(aboutData.value[0]._id)
    .then((res) => {
      weAbout.value = {...res.data}
      if(weAbout.value.images) {
        weAbout.value.images.forEach(item => item.url = `${url.value}/${item.response}`)
      }
    }
    )
  }
});
const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (editToggle.value) {
        save_aboutData(weAbout.value);
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

onMounted(() => {
  get_all_aboutData();
});
</script>

<style lang="scss">
.dash-weAbout {
  
  &__main {
    margin-top: 30px;
  }
  &__boxes {
    justify-content: space-between;
  }
  &__box {
    height: 100%;
    position: relative;
    padding: 30px;
    border-radius: 30px;
    border: 1px solid #333;
    overflow: hidden;
    padding-right: 60px;
    img {
      position: absolute;
      width: 100px;
      right: 5px;
      top: 5px;
    }
  }
  .we-title {
    font-size: 20px;
    font-weight: 600;
    position: relative;
    z-index: 2;
  }
  .we-text {
    padding-top: 10px;
    font-size: 18px;
    position: relative;
    z-index: 2;
  }
  &__numbers {
    margin-top: 30px;
    margin-left: -20px;
    margin-right: -20px;
    .el-col {
      padding: 20px;
    }
  }
  &__number {
    padding: 20px;
    border-radius: 30px;
    border: 1px solid #333;
  }
  .we-subtitle {
    font-size: 22px;
    text-align: center;
  }
  .we-number {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-button {
      display: inline-block;
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        margin-left: 10px;
        font-size: 16px;
      }
    }
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
  .btn-group {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
