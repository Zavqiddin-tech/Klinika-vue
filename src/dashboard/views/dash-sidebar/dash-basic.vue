<template>
  <div class="dash">
    <h1>Overview</h1>
    <div class="dash-main">
      <el-row class="dash-analitic">
        <el-col v-for="i of 3" :span="8">
          <div class="dash-analitic__box">
            <el-row>
              <el-col :span="12">
                <div class="static-box one">
                  <span>Total Doctor's</span>
                  <div class="static-number">225</div>
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
import { onMounted } from "vue";
import { useProfessionStore } from "@/stores/data/profession";
const { get_all_profs } = useProfessionStore();

onMounted(() => {
  get_all_profs();
});
</script>

<style lang="scss">
.dash {
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
      &:nth-child(1) {
        .dash-analitic__box {
          background-color: #ebeef8;
        }
      }
      &:nth-child(2) {
        .dash-analitic__box {
          background-color: #f9f4e7;
        }
      }
      &:nth-child(3) {
        .dash-analitic__box {
          background-color: #e7f4f9;
        }
      }
    }
    &__box {
      height: 200px;
      padding: 20px 10px;
      border-radius: 20px;
      span {
        color: #1577FF;
        font-size: 15px;
      }
      .static-number {
        font-size: 35px;
        font-weight: 500;
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
          color: #62CC7F;
        }
        .uzex-number {
          display: flex;
          align-items: center;
          span {
            font-size: 30px;
            &.up {
            color: #62CC7F;
            }
            &.down {
              color: #F16C84;
            }
          }
        }
      }
    }
  }
}
</style>
