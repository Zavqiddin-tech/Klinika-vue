<template>
  <el-table :data="profs" style="width: 100%">
    <el-table-column lebel="#" type="index"/>
    <el-table-column prop="title" label="Специальности" />
    <el-table-column prop="status" label="Статус">
      <template #default="scope">
        <el-popconfirm
          title="Статус изменен!"
          @confirm="changeStatus(scope.row._id)"
        >
          <template #reference>
            <el-button :type="scope.row.status == 1 ? 'success' : 'danger'">
              <el-icon>
                <check v-if="scope.row.status == 1" />
                <close v-else />
              </el-icon>
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column> 
    <el-table-column label="Редактировать" align="right">
      <template #default="scope">
        <el-dropdown>
          <el-button>
            <el-icon>
              <more />
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="editProf(scope.row._id)">
                <el-icon>
                  <editPen />
                </el-icon>
                Tahrirlash
              </el-dropdown-item>
              <el-dropdown-item @click="remove(scope.row._id)">
                <el-icon>
                  <delete />
                </el-icon>
                O'chirish
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const emit = defineEmits([
  'edit'
])
import { storeToRefs } from "pinia";
import { ElNotification } from 'element-plus'

import { useProfessionStore } from "../../../stores/data/profession";
const store = useProfessionStore();
const { profs } = storeToRefs(store);
const { status_prof, delete_prof } = store;

import { useDialogStore } from "../../../stores/dialog/dialog";
const {setToggle, setEditToggle} = useDialogStore()

const changeStatus = (_id) => {
  status_prof(_id);
};
;
const remove = (_id) => {
  if (confirm("удаляется")) {
    delete_prof(_id);
    ElNotification({
      title: "Удалено",
      type: "warning",
    });
  }
};
const editProf = (_id)=> {
  emit('edit', _id)
  setToggle(true)
  setEditToggle(true)
}
</script>

<style lang="scss">
.el-table {
    margin-top: 30px;
}
</style>
