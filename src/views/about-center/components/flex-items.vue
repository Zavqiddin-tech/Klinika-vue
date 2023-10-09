<template>
  <div class="flex-items">
    <div class="title">Место для вашей красоты</div>
    <el-row class="el-row__main">
      <el-col :span="24">
        <el-row>
          <el-col :span="12">
            <div class="flex-box">
              <img src="@/assets/img/flex-1.png" alt="" />
            </div>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="24">
                <div class="flex-box">
                  <img src="@/assets/img/flex-2.png" alt="" />
                </div>
              </el-col>
              <el-col :span="24">
                <div class="flex-box">
                  <img src="@/assets/img/flex-3.png" alt="" />
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24">
        <el-row>
      <el-col :span="10">
        <div class="flex-box">
          <img src="@/assets/img/flex-4.png" alt="" />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="flex-box">
          <img src="@/assets/img/flex-5.png" alt="" />
        </div>
      </el-col>
    </el-row>
      </el-col>
    </el-row>
    <div class="d-flex justify-center">
        <el-button round class="btn-white__defalut">Показать еще</el-button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.flex {
  &-items {
    padding-top: 60px;
    .el-row__main {
      padding-top: 40px;
      padding-bottom: 24px;
      margin-left: -12px;
      margin-right: -12px;
    }
  }
  &-box {
    padding: 12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
