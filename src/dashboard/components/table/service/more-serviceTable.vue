<template>
    <el-table :data="moreServices" style="width: 100%">
      <el-table-column fixed label="#" type="index"/>
      <el-table-column fixed label="image" width="90">
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
      <el-table-column prop="title" label="title" width="150"/>
      <el-table-column prop="subtitle" label="subtitle" width="200"/>
      <el-table-column prop="text" label="text" width="200"/>
      <el-table-column prop="seans" label="seans" align="center"/>
      <el-table-column prop="result" label="result" align="center"/>
      <el-table-column prop="procedure" label="procedure" align="center" width="100"/>
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
      <el-table-column label="Detail" align="center">
      <template #default="scope">
        <span 
        @click="nextPage(scope.row._id)"
         class="material-symbols-outlined table-icon"
        > 
         page_info 
        </span>
      </template>
    </el-table-column>
      <el-table-column label="Редактировать" width="130" align="right">
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
  import router from '@/router/index'
  
  import {useHelperStore} from '@/stores/admin/helpers/index'
  import { useDialogStore } from "@/stores/dialog/dialog";
  import { useMoreServiceStore } from "@/stores/data/service/more-service";
  const {url} = storeToRefs(useHelperStore())
  const {setToggle, setEditToggle} = useDialogStore()
  const { moreServices } = storeToRefs(useMoreServiceStore());
  const {status_moreService, delete_moreService} = useMoreServiceStore()
  
  
  
  const changeStatus = (id) => {
      status_moreService(id)
  }
  const remove = (id) => {
      if(confirm('удалить')) {
        delete_moreService(id)
      }
  }
  const editProf = (_id)=> {
    emit('edit', _id)
    setToggle(true)
    setEditToggle(true)
  }
  
  const nextPage = (id) => {
    router.push(`/more-serviceDetail/${id}`)
  }
  </script>
  
  <style lang="scss"></style>
  