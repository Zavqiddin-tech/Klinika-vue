<template>
  <div class="dash-consul">
    <recordDoctor />
    <recordService />
    <h1>Consult</h1>
    <el-button-group>
      <el-button type="primary" @click="doctorRequest(1)">Shifokor qabuli</el-button>
      <el-button type="primary" @click="serviceRequest(2)">Xizmat qabuli</el-button>
    </el-button-group>
    <consulTable />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import recordDoctor from "@/components/page/dialog/recordDoctor.vue"
import recordService from "@/components/page/dialog/recordService.vue"
import consulTable from "@/dashboard/components/table/consul-table.vue";

import {useServiceStore} from '@/stores/data/service/service'
import {useRecordServiceStore} from '@/stores/data/recordService'
const {get_all_servicesAll} = useServiceStore()
const {services} = storeToRefs(useServiceStore())
const {get_all_recordService} = useRecordServiceStore()

const doctorRequest = (e) => {
    get_all_recordService(e)
}
const serviceRequest = (e) => {
    get_all_recordService(e)
}


onMounted(()=> {
    get_all_recordService(2)
    get_all_servicesAll()
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
