<template>
  <el-table :data="experts" style="width: 100%">
    <el-table-column  label="#" type="index" fixed/>
    <el-table-column fixed label="ф.и.о" width="250">
      <template #default="scope">
        <div class="d-flex align-center">
          <el-image
            class="table-img"
            style="width: 50px; height: 50px"
            :src="`${url}/${scope.row.avatar[0].response}`"
            fit="cover"
            v-if="scope.row.avatar[0].response"
          />
          <span>{{ scope.row.name }} {{ scope.row.lname }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Специальность" width="200">
      <template #default="scope">
        <p v-for="item of scope.row.profession">{{ item.title }}</p>
      </template>
    </el-table-column>
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
    <el-table-column label="Detail" align="center">
      <template #default="scope">
        <span 
        @click="moreExpert(scope.row._id)"
         class="material-symbols-outlined table-icon"
        > 
         page_info
        </span>
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
              <el-dropdown-item @click="editExpert(scope.row._id)">
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
const emit = defineEmits(["edit"]);
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router/";

import { useHelperStore } from "../../../stores/admin/helpers";
const { url } = storeToRefs(useHelperStore());

import { useExpertsStore } from "../../../stores/data/expert";
const { experts } = storeToRefs(useExpertsStore());
const { status_expert, delete_expert } = useExpertsStore();

import { useDialogStore } from "../../../stores/dialog/dialog";
const dialog = useDialogStore();

const changeStatus = (_id) => {
  status_expert(_id);
};

const remove = (_id) => {
  if (confirm("Удаление")) {
    delete_expert(_id);
  }
};

const editExpert = (_id) => {
  emit("edit", _id);
  dialog.setToggle(true);
  dialog.setEditToggle(true);
};

const moreExpert = (id) => {
  router.push(`/more-spec/${id}`);
};
</script>

<style lang="scss">
.table-img {
  margin-right: 10px;
  border-radius: 50%;
}
.table-icon {
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #1577FF;
  }
}
</style>
