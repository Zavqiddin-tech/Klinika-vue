<template>
  <div class="dash">
    <video autoplay loop muted plays-inline class="background-clip">
      <source src="@/assets/clinic-video.mp4" type="video/mp4" />
    </video>
    <h1>Overview</h1>
    <div class="dash-main">
      <el-row class="dash-analitic">
        <el-col :span="8">
          <div class="dash-analitic__box">
            <el-row>
              <el-col :span="12">
                <div class="static-box one">
                  <span>Всего врачей</span>
                  <div class="static-number">
                    <span class="material-symbols-outlined"> diversity_1 </span>
                    {{ experts.length }}
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="static-box two">
                  <div class="uzex-top">+60%</div>
                  <div class="uzex-bottom">
                    <div class="uzex-number">
                      <span class="material-symbols-outlined up">
                        arrow_drop_up </span
                      >100
                    </div>
                    <div class="uzex-number">
                      <span class="material-symbols-outlined down">
                        arrow_drop_down </span
                      >20
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="dash-analitic__box">
            <el-row>
              <el-col :span="12">
                <div class="static-box one">
                  <span>Всего профессий</span>
                  <div class="static-number">
                    <span class="material-symbols-outlined"> cardiology </span>
                    {{ profs.length }}
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="static-box two">
                  <div class="uzex-top">+60%</div>
                  <div class="uzex-bottom">
                    <div class="uzex-number">
                      <span class="material-symbols-outlined up">
                        arrow_drop_up </span
                      >100
                    </div>
                    <div class="uzex-number">
                      <span class="material-symbols-outlined down">
                        arrow_drop_down </span
                      >20
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="dash-analitic__box">
            <el-row>
              <el-col :span="12">
                <div class="static-box one">
                  <span>Заявки</span>
                  <div class="static-number">
                    <span class="material-symbols-outlined"> box </span>
                    {{  doctor + service }}
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="static-box two">
                  <div class="uzex-top">+60%</div>
                  <div class="uzex-bottom">
                    <div class="uzex-number">
                      <span class="material-symbols-outlined up">
                        arrow_drop_up </span
                      >100
                    </div>
                    <div class="uzex-number">
                      <span class="material-symbols-outlined down">
                        arrow_drop_down </span
                      >20
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
const doctor = ref('')
const service = ref('')

import { useExpertsStore } from "@/stores/data/expert";
import { useProfessionStore } from "@/stores/data/profession";
import {useRecordServiceStore} from '@/stores/data/recordService'
import {useRecordDoctorStore} from '@/stores/data/recordDoctor'
const { get_all_experts } = useExpertsStore();
const { experts } = storeToRefs(useExpertsStore());
const { get_all_profs } = useProfessionStore();
const {profs} = storeToRefs(useProfessionStore())
const {get_all_recordService} = useRecordServiceStore()
const {recordService} = storeToRefs(useRecordServiceStore())
const {get_all_records} = useRecordDoctorStore()
const {records} = storeToRefs(useRecordDoctorStore())


onMounted(async () => {
  await get_all_experts();
  await get_all_profs();
  await get_all_records()
  await get_all_recordService(2)
  service.value = recordService.value.length 
  doctor.value =  records.value.length
});
</script>

<style lang="scss">
.dash {
  height: 100%;
  padding: 0 10px;
  position: relative;
  border-radius: 5px;
  h1 {
    text-align: right;
  }
  .background-clip {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  overflow-x: hidden;
  &-main {
    padding-top: 30px;
  }
  &-analitic {
    font-family: "Poppins", sans-serif;
    margin-left: -20px;
    margin-right: -20px;
    .el-col {
      padding: 0 20px;
      .dash-analitic__box {
        background-color: rgba(240, 240, 240, 0.5);
        backdrop-filter: blur(10px);
      }
    }
    &__box {
      height: 200px;
      padding: 20px 10px;
      border-radius: 20px;
      span {
        color: #006aff;
        font-size: 15px;
      }
      .static-number {
        font-size: 35px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 15px;
        span {
          font-size: 35px;
          color: #fff;
        }
      }
    }
    .static-box {
      border-radius: 15px;
      &.two {
        padding: 10px;
        background-color: #fff;
        .uzex-bottom {
          display: flex;
        }
        .uzex-top {
          color: #62cc7f;
        }
        .uzex-number {
          display: flex;
          align-items: center;
          span {
            font-size: 30px;
            &.up {
              color: #62cc7f;
            }
            &.down {
              color: #f16c84;
            }
          }
        }
      }
    }
  }
}

@media (min-aspect-ratio: 16/9) {
  .dash {
    .background-clip {
      width: 100%;
      height: auto;
    }
  }
}
@media (max-aspect-ratio: 16/9) {
  .dash {
    .background-clip {
      width: auto;
      height: 100%;
    }
  }
}
</style>
