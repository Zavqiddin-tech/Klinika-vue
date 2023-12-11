<template>
  <div class="ques">
    <div class="ques-nav">
      <h2>Ответы на вопросы</h2>
      <el-button type="success" @click="openDialog()">добавить</el-button>
    </div>

    <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :autoplay="{
          delay: 2000,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item of questions">
          <div class="ques-item">
            <div class="text-right">
              <span @click="edit(item._id)" class="material-symbols-outlined"> border_color </span>
              <span @click="remove(item._id)" class="material-symbols-outlined"> delete </span>
            </div>
            <div class="ques-title">{{ item.question }}❓</div>
            <div class="ques-text">🟢{{ item.answer }}</div>
          </div>
        </swiper-slide>
      </swiper>

    <el-dialog
      v-model="quesToggle"
      :title="editQues ? 'Редактировать вопросы и ответы' : 'Вопросы и ответы'"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        ref="indicationRef"
        :model="quesObj"
        :rules="rules"
        label-position="top"
        @submit.prevent="add(indicationRef)"
      >
        <el-form-item label="вопросы" prop="question">
          <el-input v-model="quesObj.question" />
        </el-form-item>
        <el-form-item label="ответы" prop="answer">
          <el-input v-model="quesObj.answer" />
        </el-form-item>
        <el-button @click="handleClose()">отменить</el-button>
        <el-button type="primary" @click="add(indicationRef)">
          сохранять
        </el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage, ElNotification } from "element-plus";
import { useRoute } from "vue-router";
const paramsId = useRoute().params.id;


// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
const modules = ref([Autoplay, Navigation]);
// swiper


// store
import { useMoreDialogStore } from "@/stores/dialog/serviceDialog";
import { useQuestionStore } from "@/stores/data/service/question";
const { quesToggle, editQues } = storeToRefs(useMoreDialogStore());
const { setQuesToggle, setEditQues } = useMoreDialogStore();
const {questions} = storeToRefs(useQuestionStore())
const { get_all_question, get_question, save_question, new_question, delete_question } = useQuestionStore();
// store
const indicationRef = ref();
const quesObj = ref({
  serviceItemId: paramsId,
});
const rules = ref({
  question: [
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
  answer: [
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

const handleClose = () => {
  quesObj.value = {
    serviceItemId: paramsId,
    indications: [{}],
    contraindication: [{}],
  };
  setQuesToggle(false);
  setEditQues(false);
};
const openDialog = () => {
  setQuesToggle(true);
};

const editId = ref("");
const setEditId = (val) => (editId.value = val);
const edit = (id) => {
  setQuesToggle(true);
  setEditQues(true);
  setEditId(id);
};
const remove = (id) => {
  if(confirm('удалить')) {
    delete_question(id)
  }
}

watch(editQues, async () => {
  if (editQues.value) {
    await get_question(editId.value).then((res) => {
      quesObj.value = { ...res.data };
    });
  }
});

const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (editQues.value) {
        save_question(quesObj.value);
      } else {
        new_question(quesObj.value);
      }
      handleClose();
    } else {
      ElMessage.warning('Заполнить бланки')
    }
  });
};

onMounted(() => {
  get_all_question(paramsId);
});
</script>

<style lang="scss">
.ques {
  padding-top: 50px;
  &-nav {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  &-item {
    padding: 20px;
    color: #fff;
    background-color: #3c3c3b;
    border-radius: 20px;
    span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  &-title {
    padding-bottom: 10px;
    font-size: 20px;
  }
}
</style>
