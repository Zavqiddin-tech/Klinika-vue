<template>
  <h1>salomlar</h1>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="name" label="Ism" width="180" />
    <el-table-column prop="lname" label="Familya" width="180" />
    <el-table-column label="Shifokor">
      <template #default="scope">
        <div class="doctor-line">
          <span class="material-symbols-outlined"> ecg_heart </span>
          {{ scope.row.specialistId.name }}
          {{ scope.row.specialistId.lname }}
        </div>
      </template>
    </el-table-column>
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

          <span class="material-symbols-outlined">
            {{ statusCheck[scope.row.status] }}
          </span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Редактирование" align="right">
      <template #default="scope">
        <div>
          <el-button type="primary">
            <el-icon>
              <editPen @click="editItem(scope.row._id)" />
            </el-icon>
          </el-button>

          <!-- delete -->
          <!-- <el-popconfirm
            title="будет удален!"
            @confirm="deleteItem(scope.row._id)"
          >
            <template #reference>
              <el-button type="danger">
                <el-icon>
                  <delete />
                </el-icon>
              </el-button>
            </template>
          </el-popconfirm> -->
          <!-- delete -->
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const props = defineProps(["data"]);
import { ref } from "vue";
const statusList = ref([ "info", "warning", "success"]);
const statusText = ref(["не видел", "был замечен", "позвонил"]);
const statusCheck = ref([" ", "check", "done_all"]);

import { useRecordServiceStore } from "@/stores/data/recordService";
const { delete_recordService, status_consul } = useRecordServiceStore();

const deleteItem = (id) => {
  delete_recordService(id);
};
const changeStatus = (id, status) => {
  status_consul(id, status)
}
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
.doctor-line {
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: red;
  }
}
</style>
