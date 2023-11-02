<template>
  <div class="more-form" :data="moreSpec">
    <el-button type="info" round @click="backPage()">
      back <i class="bx bx-log-out-circle"></i>
    </el-button>
    <h2>Информация доктора</h2>
    <div class="btn-group">
      <el-button type="danger" @click="delForm(moreSpec._id)">
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
      <div class="educations" v-for="item of moreSpec.educations">
        <el-form-item label="Edu title">
          <el-input @input="eduInput(item)" v-model="item.title" />
        </el-form-item>
        <el-form-item label="Edu direction">
          <el-input @input="eduInput(item)" v-model="item.direction" />
        </el-form-item>
        <el-form-item label="Edu year">
          <el-input-number @input="eduInput(item)" v-model="item.year" />
        </el-form-item>
      </div>
    </div>
    <div class="education-wrapper">
      <div class="edu-title">Work</div>
      <div class="educations" v-for="item of moreSpec.work">
        <el-form-item label="Work title">
          <el-input v-model="item.title" @input="workInput"/>
        </el-form-item>
        <el-form-item label="Work position">
          <el-input v-model="item.position" @input="workInput"/>
        </el-form-item>
        <el-form-item label="startDate date">
          <el-date-picker
            @change="workInput"
            v-model="item.startDate"
            placeholder="время начала"
          />
        </el-form-item>
        <el-form-item label="end date">
          <el-date-picker
            @change="workInput"
            v-model="item.endDate"
            placeholder="время окончания"
          />
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
          :limit="3"
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
          :limit="4"
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
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElNotification } from "element-plus";
import router from "@/router/index";
import { useRoute } from "vue-router";

// Stores
import { useTokenStore } from "@/stores/admin/user/token";
const { header } = storeToRefs(useTokenStore());

import { useHelperStore } from "@/stores/admin/helpers";
const { url } = storeToRefs(useHelperStore());

import { useViewSpecStore } from "@/stores/data/viewspec";
const { doctorID } = storeToRefs(useViewSpecStore());
const {
  get_viewSpec,
  new_viewSpec,
  save_viewSpec,
  delete_viewSpec,
  setDoctorID,
} = useViewSpecStore();
// Stores

const moreSpecForm = ref();
const moreSpec = ref({
  _id: doctorID,
  title: "",
  subtitle: "",
  specId: useRoute().params.id,
  educations: [{}],
  work: [{}],
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

const addSpecialist = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
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

const provider = async (id) => {
  await get_viewSpec(id).then((res) => {
    moreSpec.value = res.data;
    console.log(moreSpec.value);
    moreSpec.value.img.forEach((item) => {
      item.url = `${url.value}/${item.response}`;
    });
    moreSpec.value.certificate.forEach((item) => {
      item.url = `${url.value}/${item.response}`;
    });

    setDoctorID(res.data._id);
  });
};

const eduInput = () => {
  const last = moreSpec.value.educations.length - 1;
  if (
    moreSpec.value.educations[last].title &&
    moreSpec.value.educations[last].direction &&
    moreSpec.value.educations[last].year
  ) {
    moreSpec.value.educations.push({});
  }
};
const workInput = () => {
  const last = moreSpec.value.work.length - 1;
  if (
    moreSpec.value.work[last].title &&
    moreSpec.value.work[last].position &&
    moreSpec.value.work[last].startDate &&
    moreSpec.value.work[last].endDate
  ) {
    moreSpec.value.work.push({});
  }
};
const backPage = () => {
  router.push(`/more-spec/${moreSpec.value.specId._id}`);
};
onMounted(async () => {
  setDoctorID(false);
  provider(useRoute().params.id);
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
