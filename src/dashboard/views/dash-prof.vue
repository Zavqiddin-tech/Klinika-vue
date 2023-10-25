<template>
  <div class="dash-prof">
    <div class="dash-prof__top">
      <h1>Профессии</h1>
      <el-button type="primary" @click="setToggle(true)">Добавлять</el-button>
      <el-dialog
        v-model="toggle"
        title="Название профессии"
        width="30%"
        
      >
        <el-form
          ref="ruleFormRef"
          :model="profession"
          :rules="rules"
          label-position="top"
        >
          <el-form-item label="Профессия" prop="title">
            <el-input v-model="profession.title" />
          </el-form-item>
          
              <el-button @click="setToggle(false)">отменить</el-button>
              <el-button type="primary" @click="add(ruleFormRef)">
                сохранять
              </el-button>
           
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage, ElNotification } from "element-plus";

import { useDialogStore } from "../../stores/dialog/dialog";
const { toggle } = storeToRefs(useDialogStore());
const { setToggle } = useDialogStore();

import { useProfessionStore } from "../../stores/data/profession";
const store = useProfessionStore();
const { new_prof, delete_prof } = store;


const ruleFormRef = ref()
const profession = ref({})
const rules = ref({
  title: [
    { required: true, message: 'введите название профессии', trigger: 'blur' },
    {min: 3, message: 'минимум 3 слова'}
  ],
})

const add = async (formEl)=> {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      new_prof(profession.value)
      setToggle(false)
    } else {
      ElMessage.error("Заполнить бланки")
    }
  })
}
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
