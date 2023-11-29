<template>
  <div class="price">
    <div class="price-nav">
      <h2>Стоимость услуги</h2>
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
      <swiper-slide v-for="item of prices">
        <div class="price-item">
          <div class="text-right">
            <span @click="edit(item._id)" class="material-symbols-outlined">
              border_color
            </span>
            <span @click="remove(item._id)" class="material-symbols-outlined">
              delete
            </span>
          </div>
          <div class="price-title">📌 {{ item.title }}</div>
          <div class="price-text">
            {{ item.price }}
            <span class="material-symbols-outlined"> currency_ruble </span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <el-dialog
      v-model="pricesToggle"
      :title="
        editPrices ? 'Редактировать стоимость услуги' : 'Стоимость услуги'
      "
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        ref="pricesRef"
        :model="priceObj"
        :rules="rules"
        label-position="top"
        @submit.prevent="add(pricesRef)"
      >
        <el-form-item label="title" prop="title">
          <el-input v-model="priceObj.title" />
        </el-form-item>
        <el-form-item label="price" prop="price">
          <el-input-number v-model="priceObj.price" />
        </el-form-item>
        <el-button @click="handleClose()">отменить</el-button>
        <el-button type="primary" @click="add(pricesRef)">
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
import { usePricesStore } from "@/stores/data/service/more-prices";
const { pricesToggle, editPrices } = storeToRefs(useMoreDialogStore());
const { setPricesToggle, setEditPrices } = useMoreDialogStore();
const { prices } = storeToRefs(usePricesStore());
const { get_all_prices, get_prices, new_prices, save_prices, delete_prices } =
  usePricesStore();
// store
const pricesRef = ref();
const priceObj = ref({
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
  price: [
    {
      required: true,
      message: "заполните поле",
      trigger: "blur",
    },
  ],
});

const handleClose = () => {
  priceObj.value = {
    serviceItemId: paramsId,
  };
  setPricesToggle(false);
  setEditPrices(false);
};
const openDialog = () => {
  setPricesToggle(true);
};

const editId = ref("");
const setEditId = (val) => (editId.value = val);
const edit = (id) => {
  setPricesToggle(true);
  setEditPrices(true);
  setEditId(id);
};
const remove = (id) => {
  if(confirm('удалить')) {
    delete_prices(id)
  }
}
watch(editPrices, async () => {
  if (editPrices.value) {
    await get_prices(editId.value).then((res) => {
      priceObj.value = { ...res.data };
    });
  }
});

const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (editPrices.value) {
        save_prices(priceObj.value);
      } else {
        new_prices(priceObj.value);
      }
      handleClose();
    } else {
      ElMessage.warning("Заполнить бланки");
    }
  });
};

onMounted(() => {
  get_all_prices(useRoute().params.id);
});
</script>

<style lang="scss">
.price {
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
    .text-right {
      span {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  &-title {
    padding-bottom: 10px;
    font-size: 20px;
  }
  &-text {
    span {
      font-size: 14px;
    }
  }
}
</style>
