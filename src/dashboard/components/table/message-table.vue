<template>
  <el-table :data="consuls" style="width: 100%">
    <el-table-column lebel="#" type="index" />
    <el-table-column prop="phone" label="Номер телефона" />
    <el-table-column prop="createdTime" label="Дата" />
    <el-table-column prop="status" label="Статус">
      <template #default="scope">
        <div class="form-status">
          <el-popconfirm
            title="Статус изменен!"
            @confirm="changeStatus(scope.row._id, scope.row.status)"
          >
            <template #reference>
              <el-button :type="statusList[scope.row.status]" round plain>
                {{ statusText[scope.row.status] }}
              </el-button>
            </template>
          </el-popconfirm>

          <span class="material-symbols-outlined"> {{ statusCheck[scope.row.status] }} </span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["consuls"]);
const statusList = ref(["info", "warning", "success"]);
const statusText = ref(["не видел", "был замечен", "позвонил"]);
const statusCheck = ref(['', 'check', 'done_all'])

import { useFormaStore } from "@/stores/forma/forma";
const { status_consul } = useFormaStore();

const changeStatus = (_id, status) => {
  status_consul(_id, status);
};
</script>

<style lang="scss">
.el-table {
  margin-top: 30px;
}
.form-status {
  display: flex;
  align-items: end;
  gap: 5px;
  .material-symbols-outlined {
    font-size: 20px;
    color: #a5a5a5;
  }
}
</style>
