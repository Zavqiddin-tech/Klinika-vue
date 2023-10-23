<template>
  <div class="regis">
    <el-form
      ref="regisForm"
      class="regis-form"
      :model="user"
      :rules="rules"
      label-position="top"
      @submit.prevent="regis(regisForm)"
    >
      <el-form-item label="Логин" prop="login">
        <el-input v-model="user.login" @keypress.enter="regis(regisForm)" />
      </el-form-item>
      <el-form-item label="Парол" prop="password">
        <el-input v-model="user.password" @keypress.enter="regis(regisForm)" show-password/>
      </el-form-item>
      <el-button type="success" @click="regis(regisForm)">Kirish</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElNotification } from 'element-plus'

import { useAuthStore } from "@/stores/admin/user/auth";
const authStore = useAuthStore();

const regisForm = ref();
const user = ref({});
const rules = ref({
  login: [
    {
      required: true,
      message: "введите логин",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "введите пароль",
      trigger: "blur",
    },
    {
      trigger: "blur",
      min: 3,
      max: 15,
      message: "минимум 3 символа",
    },
  ],
});
const regis = async (regisForm) => {
  if (!regisForm) return;
  await regisForm.validate((valid, fields) => {
    if (valid) {
      authStore.login({
        login: user.value.login,
        password: user.value.password,
      });
    } else {
      ElNotification({
        title: "ошибка",
        message: "заполните все поля",
        type: "error",
      });
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="scss">
.regis {
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #183642;
  &-form {
    width: 300px;
    height: 300px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    background-size: 400px;
    border-radius: 5px;
  }
  .el-form-item {
    width: 100%;
  }
  .el-button {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
