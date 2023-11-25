<template>
  <div class="more-detail">
    <div class="more-detail__wrapper">
      <div class="more-detail__nav">
        <h2>Как проходит процесс</h2>
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
        <swiper-slide v-for="item of process">
          <div class="process-item">
            <div class="btn-group">
              <el-button round @click="edit(item._id)"
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
            <div class="process-title">{{ item.title }}</div>
            <div class="process-text">{{ item.text }}</div>
          </div>
        </swiper-slide>
      </swiper>
      <el-dialog
        v-model="processToggle"
        :title="editProcess ? 'Редактировать процессы' : 'Процессы ввода'"
        width="30%"
        :before-close="handleClose"
      >
        <el-form
          ref="processObjRef"
          :model="processObj"
          :rules="rules"
          label-position="top"
          @submit.prevent="add(processObjRef)"
        >
          <el-form-item label="title" prop="title">
            <el-input v-model="processObj.title" />
          </el-form-item>
          <el-form-item label="text" prop="text">
            <el-input v-model="processObj.text" />
          </el-form-item>
          <el-button @click="handleClose()">отменить</el-button>
          <el-button type="primary" @click="add(processObjRef)">
            сохранять
          </el-button>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
const paramsId = useRoute().params.id

// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
const modules = ref([Autoplay, Navigation]);
// swiper

// Store
import { useMoreDialogStore } from "@/stores/dialog/serviceDialog";
import { useProcessStore } from "@/stores/data/service/process";
const { processToggle, editProcess } = storeToRefs(useMoreDialogStore());
const { setProcessToggle, setEditProcess } = useMoreDialogStore();
const { process } = storeToRefs(useProcessStore());
const {
  get_all_process,
  get_process,
  new_process,
  save_process,
  delete_process,
} = useProcessStore();
// Store

const processObjRef = ref();
const processObj = ref({
  serviceItemId: paramsId,
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

const handleClose = () => {
  setProcessToggle(false);
  setEditProcess(false);
  processObj.value = {
  serviceItemId: paramsId,
  };
};

const remove = (id) => {
  if (confirm("delete")) {
    delete_process(id);
  }
};

const idProcess = ref("");
const setId = (val) => (idProcess.value = val);
const edit = (id) => {
  setId(id);
  setProcessToggle(true);
  setEditProcess(true);
};
const openDialog = () => {
  setProcessToggle(true);
};

watch(editProcess, async () => {
  if (editProcess.value) {
    await get_process(idProcess.value).then((res) => {
      processObj.value = res.data;
    });
  }
});

const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (editProcess.value) {
        save_process(processObj.value);
      } else {
        new_process(processObj.value);
      }
      handleClose();
    } else {
      ElMessage.error("Заполнить бланки");
    }
  });
};

onMounted(() => {
  get_all_process(useRoute().params.id);
});
</script>

<style lang="scss">
.process {
  &-item {
    padding: 20px;
    background-color: #3c3c3b;
    color: #fff;
    border-radius: 20px;
    .btn-group {
      text-align: right;
    }
  }
  &-title {
    padding-top: 10px;
    padding-bottom: 20px;
    font-size: 20px;
  }
  &-text {
    font-size: 14px;
  }
}
</style>
