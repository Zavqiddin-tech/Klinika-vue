<template>
  <div class="more-detail">
    <div class="more-detail__wrapper">
      <div class="more-detail__nav">
        <h2>Какие проблемы решает</h2>
        <el-button type="success" @click="openDialog('problem')"
          >добавить</el-button
        >
      </div>
      <swiper
        :slidesPerView="2"
        :spaceBetween="30"
        :autoplay="{
          delay: 2000,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item of problems">
          <div class="more-detail__item">
            <div class="btn-group">
              <el-button round @click="editProblem(item._id)"
                ><span class="material-symbols-outlined">
                  edit
                </span></el-button
              >
              <el-button round @click="remove(item._id)"
                ><span class="material-symbols-outlined">
                  delete
                </span></el-button
              >
            </div>
            <el-row>
              <el-col :span="15">
                <div class="more-detail__box">
                  <div class="btn-text">{{ item.btnText }}</div>
                  <div class="more-title">{{ item.title }}</div>
                  <div class="more-text">{{ item.text }}</div>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="more-detail__box img">
                  <img
                    v-if="item.image"
                    :src="`${url}/${item.image[0].response}`"
                    alt=""
                  />
                </div>
              </el-col>
            </el-row>

          </div>
        </swiper-slide>
      </swiper>
      <el-dialog
        v-model="problemToggle"
        :title="
          editProb ? 'Редактирование название проблемы' : 'Название проблемы'
        "
        width="30%"
        :before-close="handleClose"
      >
        <el-form
          ref="problemRef"
          :model="problem"
          :rules="rules"
          label-position="top"
          @submit.prevent="add(problemRef)"
        >
          <el-form-item label="title" prop="title">
            <el-input v-model="problem.title" />
          </el-form-item>
          <el-form-item label="text" prop="text">
            <el-input v-model="problem.text" />
          </el-form-item>
          <el-form-item label="btnText" prop="btnText">
            <el-input v-model="problem.btnText" />
          </el-form-item>
          <el-form-item label="Картина" prop="image">
            <el-upload
              v-model:file-list="problem.image"
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
          <el-button @click="handleClose()">отменить</el-button>
          <el-button type="primary" @click="addProb(problemRef)">
            сохранять
          </el-button>
        </el-form>
      </el-dialog>
      <moreServiceProcess />
      <moreIndication />
      <moreQuestion />
      <morePrice />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import moreServiceProcess from "./more-serviceProcess.vue";
import moreIndication from "./more-indication.vue";
import moreQuestion from "./more-question.vue";
import morePrice from "./more-price.vue";

// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,  Navigation } from "swiper/modules";
const modules = ref([Autoplay,  Navigation])
// swiper

// Store
import { useHelperStore } from "@/stores/admin/helpers/index";
import { useTokenStore } from "@/stores/admin/user/token";
import { useMoreDialogStore } from "@/stores/dialog/serviceDialog";
import { useProblemStore } from "@/stores/data/service/problem";

const { url } = storeToRefs(useHelperStore());
const { header } = storeToRefs(useTokenStore());
const { problemToggle, editProb } = storeToRefs(useMoreDialogStore());
const { setProblemToggle, setEditProb } = useMoreDialogStore();
const { problems } = storeToRefs(useProblemStore());
const {
  get_all_problems,
  new_problem,
  delete_problem,
  save_problem,
  get_problem,
} = useProblemStore();
// Store

const problemRef = ref();
const problem = ref({
  serviceItemId: useRoute().params.id,
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
  btnText: [
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

  image: [
    {
      required: true,
      message: "выбрать картину",
      trigger: "change",
    },
  ],
});

const handleClose = () => {
  setProblemToggle(false);
  setEditProb(false);
  problem.value = {}
};

const remove = (id) => {
  if (confirm("delete")) {
    delete_problem(id);
  }
};

const idProblem = ref("");
const setId = (val) => (idProblem.value = val);
const editProblem = (id) => {
  setId(id);
  setProblemToggle(true);
  setEditProb(true);
};
const openDialog = (val) => {
  if (val == "problem") {
    setProblemToggle(true);
  }
};

watch(editProb, async () => {
  if (editProb.value) {
    await get_problem(idProblem.value).then((res) => {
      problem.value = res.data;
      if (problem.value.image) {
        problem.value.image.forEach((item) => {
          item.url = `${url.value}/${item.response}`;
        });
      }
    });
  }
});

const addProb = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (editProb.value) {
        save_problem(problem.value);
      } else {
        new_problem(problem.value);
      }
      handleClose();
    } else {
      ElMessage.error("Заполнить бланки");
    }
  });
};

onMounted(() => {
  get_all_problems(useRoute().params.id);
});
</script>

<style lang="scss">
.more-detail {
  .swiper {
    margin-bottom: 50px;
  }
  &__nav {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    height: 350px;
    padding: 20px;
    padding-bottom: 0;
    border-radius: 20px;
    background-color: #3c3c3b;
    color: #fff;
    .btn-group {
      text-align: right;
    }
  }
  .more-title {
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .more-text {
    font-size: 14px;
    line-height: 30px;
  }
  &__box {
    &.img {
      padding-top: 30px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
