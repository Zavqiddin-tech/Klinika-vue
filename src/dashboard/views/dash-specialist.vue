<template>
  <div class="dash-specialist">
    <div class="dash-specialist__nav">
      <h1>Специалисты</h1>
      <el-button type="primary" @click="openDialog()">Добавлять</el-button>
      <el-dialog
        v-model="dialogVisible"
        title="Добавить эксперта"
        width="30%"
        :before-close="handleClose"
      >
        <el-form
          ref="dashSpecialistForm"
          :model="specialists"
          :rules="rules"
          labelPosition="top"
        >
          <el-form-item label="Имя" prop="name">
            <el-input v-model="specialists.name" />
          </el-form-item>
          <el-form-item label="Фамилия" prop="surname">
            <el-input v-model="specialists.surname" />
          </el-form-item>
          <el-form-item label="Специальность" prop="specialty">
            <el-input v-model="specialists.specialty" />
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElNotification } from 'element-plus'
const dialogVisible = ref(false);
const openDialog = () => {
  dialogVisible.value = true;
};

const dashSpecialistForm = ref();
const specialists = ref({});

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
  surname: [
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
  specialty: [
    {
      required: true,
      message: "Введите ваше специальность",
      trigger: "blur",
    },
    {
      min: 3,
      message: "Специальность должно состоять более чем из 3 букв",
    },
  ],
});

const addSpecialist = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      handleClose();
      ElNotification({
        title: "Успешный",
        message: "данные отправлены",
        type: "success",
      });
      specialists.value = {};
    } else {
      ElNotification({
        title: "Ошибка",
        message: "информация не отправлена",
        type: "error",
      });
    }
  });
};
</script>

<style lang="scss">
.dash-specialist {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
