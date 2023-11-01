<template>
  <div class="more-form">
    <h2>Информация доктора</h2>
    <div class="btn-group">
      <el-button type="danger" @click="delForm()">
        Удалить
      </el-button>
      <el-button type="success" @click="addSpecialist(moreSpecForm)">
        {{ doctorID ? "изменить" : "добавить" }}
      </el-button>
    </div>
  </div>
  <el-form
    ref="moreSpecForm"
    :model="moreSpec"
    :rules="rules"
    labelPosition="top"
  >
    <el-form-item label="title" prop="title">
      <el-input v-model="moreSpec.title" />
    </el-form-item>
    <el-form-item label="subtitle" prop="subtitle">
      <el-input v-model="moreSpec.subtitle" />
    </el-form-item>
    <el-form-item label="subtexts" prop="subtexts">
      <el-input v-model="moreSpec.subtexts" />
    </el-form-item>

    <div class="education-wrapper">
      <div class="edu-title">Educations</div>
      <div class="educations">
        <el-form-item label="Edu title">
          <el-input v-model="eduObj.title" />
        </el-form-item>
        <el-form-item label="Edu direction">
          <el-input v-model="eduObj.direction" />
        </el-form-item>
        <el-form-item label="Edu year">
          <el-input-number v-model="eduObj.year" />
        </el-form-item>
      </div>
    </div>
    <div class="education-wrapper">
      <div class="edu-title">Work</div>
      <div class="educations">
        <el-form-item label="Work title">
          <el-input v-model="workObj.title" />
        </el-form-item>
        <el-form-item label="Work direction">
          <el-input v-model="workObj.position" />
        </el-form-item>
        <el-form-item label="start date">
          <el-input-number v-model="workObj.startDate" />
        </el-form-item>
        <el-form-item label="end date">
          <el-input-number v-model="workObj.endDate" />
        </el-form-item>
      </div>
    </div>

    <div class="img-wrapper">
      <el-form-item label="img" prop="img">
        <el-upload
          v-model:file-list="moreSpec.img"
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
      <el-form-item label="Certificate" prop="certificate">
        <el-upload
          v-model:file-list="moreSpec.certificate"
          :action="`${url}/files`"
          :headers="header.headers"
          list-type="picture-card"
          :limit="10"
          :before-upload="handleBefore"
          :on-preview="handlePreview"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
    </div>
  </el-form>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { ElNotification } from "element-plus";
import { useRoute } from "vue-router";

// Stores
import { useTokenStore } from "@/stores/admin/user/token";
const { header } = storeToRefs(useTokenStore());

import { useHelperStore } from "@/stores/admin/helpers";
const { url } = storeToRefs(useHelperStore());

import { useViewSpecStore } from "@/stores/data/viewspec";
const {doctorID} = storeToRefs(useViewSpecStore())
const { get_viewSpec, new_viewSpec, save_viewSpec, delete_viewSpec, setDoctorID } =
  useViewSpecStore();
// Stores

const moreSpecForm = ref();
const eduObj = ref({});
const workObj = ref({});
const moreSpec = ref({
  _id: doctorID,
  eduObj: {},
  workObj: {},
  specId: useRoute().params.id,
  educations: [],
  work: [],
});
const rules = ref({
  title: [
    {
      required: true,
      message: "заполнить бланк",
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
      message: "заполнить бланк",
      trigger: "blur",
    },
    {
      min: 3,
      message: "текст должно состоять более чем из 3 букв",
    },
  ],
  subtexts: [
    {
      required: true,
      message: "заполнить бланк",
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
      message: "Введите специальность",
      trigger: "change",
    },
  ],
  certificate: [
    {
      required: true,
      message: "Введите специальность",
      trigger: "change",
    },
  ],
});

//Reset form
const addSpecialist = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      moreSpec.value.educations = [eduObj.value, ...moreSpec.value.educations];
      moreSpec.value.work = [workObj.value, ...moreSpec.value.work];
      console.log(moreSpec.value);
      if (doctorID.value) {
        save_viewSpec(moreSpec.value);
        ElNotification({
          title: "Успешный",
          message: "Обновлено",
          type: "success",
        });
      } else {
        new_viewSpec(moreSpec.value);
        ElNotification({
          title: "Успешный",
          message: "Информация отправлена",
          type: "success",
        });
      }
    } else {
      ElNotification({
        title: "Ошибка",
        message: "информация не отправлена",
        type: "error",
      });
    }
  });
};

const delForm = (id) => {
  delete_viewSpec(id);
};








const provider = async(id)=> {
  await get_viewSpec(id).then(res => {
    console.log(res.data);
    moreSpec.value = res.data
    moreSpec.value.img[0].url = `${url.value}/${moreSpec.value.img[0].response}`
    moreSpec.value.certificate.forEach((item) => {
      item.url = `${url.value}/${item.response}`
    })


    eduObj.value = res.data.educations[0]
    workObj.value = res.data.work[0]
    workObj.value.startDate = new Date().getFullYear(workObj.value.startDate)
    workObj.value.endDate = new Date().getFullYear(workObj.value.endtDate)
    
    setDoctorID(res.data._id)
  })
}
onMounted(async () => {
  setDoctorID(false)
provider(useRoute().params.id)
});
</script>

<style lang="scss">
.more-form {
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.educations {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.edu-title {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.img-wrapper {
  display: flex;
  gap: 100px;
}
</style>
