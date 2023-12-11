<template>
  <el-dialog
    v-model="feedbackDialog"
    title="Оставить отзыв"
    width="500px"
    :before-close="handleClose"
  >
    <el-form
      ref="servisForm"
      :model="ruleForm"
      :rules="rules"
      labelPosition="top"
    >
      <!-- <el-form-item label="Имя" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Фамилия" prop="surname">
        <el-input v-model="ruleForm.surname" />
      </el-form-item> -->
      <el-form-item label="Kомментарий" prop="text">
        <el-input
          v-model="ruleForm.text"
          type="textarea"
          placeholder="Оставьте свой комментарий"
          :rows="3"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose()">отмена</el-button>
        <el-button @click="serviceAdd(servisForm)" type="primary">
          отправлять
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
const paramsId = useRoute().params.id

import { useReviewStore } from "@/stores/data/review";
import { useDialogStore } from "@/stores/dialog/dialog";
const { feedbackDialog } = storeToRefs(useDialogStore());
const { setFeedbackDialog } = useDialogStore();
const {new_review} = useReviewStore()



const servisForm = ref();
let ruleForm = ref({specialistId: paramsId});

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
  text: [
    {
      required: true,
      message: "Введите ваше комментарий",
      trigger: "blur",
    },
    {
      min: 10,
      message: "комментарий должно состоять более чем из 10 букв",
    },
  ],
});

const handleClose = () => {
  setFeedbackDialog(false);
  ruleForm.value = {specialistId: paramsId}
};
const serviceAdd = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      new_review(ruleForm.value)
      handleClose();
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
.el-overlay {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.055);
  .el-dialog {
    box-shadow: unset;
  }
}

@media (max-width: 500px) {
  .el-dialog {
    width: 95%;
  }
}
</style>
