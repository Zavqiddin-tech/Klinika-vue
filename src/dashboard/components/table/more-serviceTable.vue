<template>
    <el-table :data="moreServices" style="width: 100%">
      <el-table-column lebel="#" type="index"/>
      <el-table-column label="image">
        <template #default="scope">
          <el-image
            v-if="scope.row.image"
            class="table-img"
            style="width: 50px; height: 50px"
            :src="`${url}/${scope.row.image[0].response}`"
            fit="cover"
          />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="title" />
      <el-table-column prop="subtitle" label="subtitle" />
      <el-table-column prop="text" label="text" />
      <el-table-column prop="seans" label="seans" />
      <el-table-column prop="result" label="result" />
      <el-table-column prop="procedure" label="procedure" />
      <el-table-column prop="status" label="status">
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
  
  import {useHelperStore} from '../../../stores/admin/helpers/index'
  import { useDialogStore } from "../../../stores/dialog/dialog";
  import { useMoreServiceStore } from "../../../stores/data/more-service";
  const {url} = storeToRefs(useHelperStore())
  const {setToggle, setEditToggle} = useDialogStore()
  const { moreServices } = storeToRefs(useMoreServiceStore());
  const {status_moreService, delete_moreService} = useMoreServiceStore()
  
  
  
  const changeStatus = (id) => {
      status_moreService(id)
  }
  const remove = (id) => {
      delete_moreService(id)
  }
  const editProf = (_id)=> {
    emit('edit', _id)
    setToggle(true)
    setEditToggle(true)
  }
  
  </script>
  
  <style lang="scss"></style>
  