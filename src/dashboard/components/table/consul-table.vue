<template>
  <div v-if="recordService[0]">
    <div class="consul-title" v-if="recordService[0].type == 1">
      Shifokorga ariza
    </div>
    <div class="consul-title" v-if="recordService[0].type == 2">
      Xizmatga ariza
    </div>
    <el-table
      v-if="recordService[0].type == 1"
      :data="recordService"
      style="min-width: 100%"
    >
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
            <el-button type="primary" @click="editDoctor(scope.row._id)">
              <el-icon>
                <editPen />
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
    <el-table
      v-if="recordService[0].type == 2"
      :data="recordService"
      style="min-width: 100%"
    >
      <el-table-column prop="name" label="Ism" width="180" />
      <el-table-column prop="lname" label="Familya" width="180" />
      <el-table-column label="Xizmat">
        <template #default="scope">
          <div>
            {{ scope.row.serviceId.title }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Xizmatning bo'limi">
        <template #default="scope">
          <div>
            {{ scope.row.serviceItemId.title }}
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
            <el-button type="primary" @click="editService(scope.row._id)">
              <el-icon>
                <editPen />
              </el-icon>
            </el-button>
            <!-- delete -->
            <!--  <el-popconfirm
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
const statusList = ref(["info", "warning", "success"]);
const statusText = ref(["не видел", "был замечен", "позвонил"]);
const statusCheck = ref([" ", "check", "done_all"]);

import { useRecordServiceStore } from "@/stores/data/recordService";
import { useRecordDoctorStore } from "@/stores/data/recordDoctor";
const { recordService } = storeToRefs(useRecordServiceStore());
const {
  delete_recordService,
  status_consul,
  setRecordServi,
  setEditRecordServi,
  setServiId,
} = useRecordServiceStore();
const { setRecordSpec, setEditRecordSpec, setDoctorId } =
  useRecordDoctorStore();

const deleteItem = (id) => {
  delete_recordService(id);
};
const changeStatus = (id, status) => {
  status_consul(id, status);
};
const editDoctor = (id) => {
  setRecordSpec(true);
  setEditRecordSpec(true);
  setDoctorId(id);
};
const editService = (id) => {
  setServiId(id);
  setRecordServi(true);
  setEditRecordServi(true)
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
.doctor-line {
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    color: red;
  }
}
.consul-title {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  color: #546272;
}
</style>
