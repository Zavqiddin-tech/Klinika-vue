<template>
  <el-table :data="services" style="width: 100%">
    <el-table-column lebel="#" type="index"/>
    <el-table-column>
      <template #default="scope">
        <el-image
        @click="nextPage(scope.row._id)"
          class="table-img"
          style="width: 50px; height: 50px"
          :src="`${url}/${scope.row.img[0].response}`"
          fit="cover"
          v-if="scope.row.img[0].response"
        />
      </template>
    </el-table-column>
    <el-table-column prop="title" label="Услуги" />
    <el-table-column prop="text" label="О сервисе" />
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
import router from "@/router/index";

import {useHelperStore} from '../../../stores/admin/helpers/index'
const {url} = storeToRefs(useHelperStore())
import { useDialogStore } from "../../../stores/dialog/dialog";
const {setToggle, setEditToggle} = useDialogStore()
import { useServiceStore } from "../../../stores/data/service";
const { services } = storeToRefs(useServiceStore());
const {status_service, delete_service} = useServiceStore()



const changeStatus = (id) => {
    status_service(id)
}
const remove = (id) => {
    delete_service(id)
}
const editProf = (_id)=> {
  emit('edit', _id)
  setToggle(true)
  setEditToggle(true)
}


const nextPage = (id)=> {
  router.push(`/more-service/${id}`)
}
</script>

<style lang="scss"></style>
