<template>
  <div class="dash-prof">
    <div class="dash-prof__top">
      <h1>Профессии</h1>
      <el-button type="primary" @click="openDialog()">Добавлять</el-button>
      <el-dialog 
        v-model="toggle" 
        :title="editToggle ? 'Редактирование название профессии' : 'Название профессии'" 
        width="30%"
        :before-close="handleClose"
      >
        <el-form
          ref="ruleFormRef"
          :model="profession"
          :rules="rules"
          label-position="top"
          @submit.prevent="add(ruleFormRef)"
        >
          <el-form-item label="Профессия" prop="title">
            <el-input v-model="profession.title" @keypres.enter="add(ruleFormRef)"/>
          </el-form-item>

          <el-button @click="handleClose()">отменить</el-button>
          <el-button type="primary" @click="add(ruleFormRef)">
            сохранять
          </el-button>
        </el-form>
      </el-dialog>
    </div>
    <profession-table @edit="edit"/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage, ElNotification } from "element-plus";

import professionTable from '../../components/table/profession-table.vue'

import { useDialogStore } from "@/stores/dialog/dialog";
const { toggle, editToggle } = storeToRefs(useDialogStore());
const { setToggle, setEditToggle } = useDialogStore();

import { useProfessionStore } from "@/stores/data/profession";
const store = useProfessionStore();
const {get_all_profs, new_prof, save_prof, get_prof } = store;

const ruleFormRef = ref();
const profession = ref({});
const rules = ref({
  title: [
    { required: true, message: "введите название профессии", trigger: "blur" },
    { min: 3, message: "минимум 3 слова" },
  ],
});

const openDialog = () => {
  setToggle(true)
}
const handleClose = ()=> {
  setEditToggle(false)
  setToggle(false);
}

const add = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if(editToggle.value) {
        save_prof(profession.value)
      } else {
        new_prof(profession.value);
      }
      profession.value = {}
      handleClose()
    } else {
      ElMessage.error("Заполнить бланки");
    }
  });
};

const id = ref('')
const edit = (val) => {
  id.value = val
}



onMounted(()=> {
  get_all_profs()
})


watch(editToggle, async ()=> {
  if(editToggle.value) {
    await get_prof(id.value) 
    .then(res => {
      profession.value = {...res.data}
    }) 
  }
})
</script>

<style lang="scss">
.dash-prof {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dialog-footer {
    text-align: right;
  }
}
</style>
