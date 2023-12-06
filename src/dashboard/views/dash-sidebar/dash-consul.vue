<template>
  <div class="dash-consul">
    <h1 class="title">Consult</h1>
    <el-button-group>
      <el-button type="primary" @click="doctorRequest(1)">Shifokor qabuli</el-button>
      <el-button type="primary" @click="serviceRequest(2)">Xizmat qabuli</el-button>
    </el-button-group>
    <consulTable :data="recordService"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import consulTable from "@/dashboard/components/table/consul-table.vue";

import {useRecordServiceStore} from '@/stores/data/recordService'
const {recordService} = storeToRefs(useRecordServiceStore())
const {get_all_recordService} = useRecordServiceStore()

const doctorRequest = (e) => {
    get_all_recordService(e)
}
const serviceRequest = (e) => {
    get_all_recordService(e)
}


onMounted(()=> {
    get_all_recordService(1)
})
</script>

<style lang="scss">
.dash {
  &-consul {
    .title {
      padding-bottom: 30px;
    }
  }
}
</style>
