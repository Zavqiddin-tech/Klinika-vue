<template>
  <div class="more-indi">
    <div class="more-indi__nav">
      <h2>Показания и противопоказания к процедуре</h2>
      <el-button type="success" @click="openDialog()">добавить</el-button>
    </div>
    <div class="more-indi__lists" v-for="item of indications">
      <div class="more-indi__list">
        <ul>
          <div class="text-right">
            <span @click="edit(item._id)" class="material-symbols-outlined">
              border_color
            </span>
          </div>
          <li v-for="list of item.indication">
            🔘{{ list.title }}
          </li>
        </ul>
      </div>
      <div class="more-indi__list">
        <ul>
          <div class="text-right">
            <span @click="edit(item._id)" class="material-symbols-outlined">
              border_color
            </span>
          </div>
          <li v-for="list of item.contraindication">
            🔘{{ list.title }}
          </li>
        </ul>
      </div>
    </div>
    <el-dialog
      v-model="indiToggle"
      :title="
        editIndi ? 'Редактировать процессы' : 'Показания и противопоказания'
      "
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        ref="indicationRef"
        :model="indiObj"
        :rules="rules"
        label-position="top"
        @submit.prevent="add(indicationRef)"
      >
        <div class="more-indi__wrapper">
          <div class="more-indi__left">
            <div class="more-indi__title">Показания</div>
            <el-form-item
              label="title"
              prop="title"
              v-for="item of indiObj.indication"
            >
              <el-input @input="inputIndi" v-model="item.title" />
            </el-form-item>
          </div>
          <div class="more-indi__right">
            <div class="more-indi__title">Противопоказания</div>
            <el-form-item
              label="title"
              prop="title"
              v-for="item of indiObj.contraindication"
            >
              <el-input @input="inputCont" v-model="item.title" />
            </el-form-item>
          </div>
        </div>
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
import { useRoute } from "vue-router";
const paramsId = useRoute().params.id;

// store

import { useMoreDialogStore } from "@/stores/dialog/serviceDialog";
import { useIndicationStore } from "@/stores/data/service/indication";
const { indiToggle, editIndi } = storeToRefs(useMoreDialogStore());
const { setIndiToggle, setEditIndi } = useMoreDialogStore();
const { indications } = storeToRefs(useIndicationStore());
const { get_all_indication, get_indication, new_indication, save_indication } =
  useIndicationStore();
// store
const indicationRef = ref();
const indiObj = ref({
  serviceItemId: paramsId,
  indication: [{}],
  contraindication: [{}],
});
const rules = ref({});
const inputIndi = (e) => {
  if (e) {
    let index = indiObj.value.indication.length - 1;
    if (indiObj.value.indication[index].title) {
      indiObj.value.indication.push({});
    }
  }
};
const inputCont = (e) => {
  if (e) {
    let index = indiObj.value.contraindication.length - 1;
    if (indiObj.value.contraindication[index].title) {
      indiObj.value.contraindication.push({});
    }
  }
};
const handleClose = () => {
  indiObj.value = {
    serviceItemId: paramsId,
    indication: [{}],
    contraindication: [{}],
  };
  setIndiToggle(false);
  setEditIndi(false);
};
const openDialog = () => {
  setIndiToggle(true);
};

const editId = ref("");
const setEditId = (val) => (editId.value = val);
const edit = (id) => {
  setIndiToggle(true);
  setEditIndi(true);
  setEditId(id);
};

watch(editIndi, async () => {
  if (editIndi.value) {
    await get_indication(editId.value).then((res) => {
      indiObj.value = { ...res.data };
    });
  }
});

const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (editIndi.value) {
        save_indication(indiObj.value);
      } else {
        new_indication(indiObj.value);
      }
      handleClose();
    } else {
      ElMessage.error("Заполнить бланки");
    }
  });
};

onMounted(() => {
  get_all_indication(paramsId);
});
</script>

<style lang="scss">
.more-indi {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__left {
    width: 40%;
  }
  &__right {
    width: 40%;
  }
  &__title {
    font-size: 20px;
  }
  &__lists {
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    justify-content: space-around;
    color: #fff;
  }
  &__list {
    width: 50%;
    padding: 20px;
    ul {
      padding: 20px;
      border-radius: 20px;
      height: 100%;
      background-color: #3c3c3b;
      span {
        cursor: pointer;
      }
      li {
        padding-bottom: 15px;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
        &:last-child {
          display: none;
        }
      }
    }
  }
}
</style>
