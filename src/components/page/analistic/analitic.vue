<template>
  <div class="analitic">
    <el-row v-if="obj">
      <el-col :span="8" :xs="12">
        <div class="analitic-item">
          <div class="analitic-number">{{ obj.seans }}</div>
          <div class="analitic-title">минут занимает один сеанс</div>
        </div>
      </el-col>
      <el-col :span="8" :xs="12">
        <div class="analitic-item">
          <div class="analitic-number">{{ obj.procedure }}</div>
          <div class="analitic-title">процедура для видимого эффекта</div>
        </div>
      </el-col>
      <el-col :span="8" :xs="12">
        <div class="analitic-item">
          <div class="analitic-number">{{ obj.result }}</div>
          <div class="analitic-title">года сохраняется результат</div>
        </div>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="8" :xs="12">
        <div class="analitic-item">
          <div class="analitic-number"><el-skeleton :rows="1" animated /></div>
          <div class="analitic-title">минут занимает один сеанс</div>
        </div>
      </el-col>
      <el-col :span="8" :xs="12">
        <div class="analitic-item">
          <div class="analitic-number"><el-skeleton :rows="1" animated /></div>
          <div class="analitic-title">процедура для видимого эффекта</div>
        </div>
      </el-col>
      <el-col :span="8" :xs="12">
        <div class="analitic-item">
          <div class="analitic-number"><el-skeleton :rows="1" animated /></div>
          <div class="analitic-title">года сохраняется результат</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps(["obj"]);
</script>

<style lang="scss">
@import "@/styles/vars/colors.scss";
.analitic {
  padding: 24px 30px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
  .el-row {
    .el-col {
      border-right: 1px solid $brownBlack;
    }
    .el-col:last-child {
      border-right: unset;
    }
  }
  &-item {
    .el-skeleton {
      padding: 20px;
    }
  }
  &-number {
    text-align: center;
    font-size: 58px;
    color: $brownBlack;
  }
  &-title {
    text-align: center;
    font-size: 20px;
    color: $gray;
  }
}

@media (max-width: 1000px) {
  .analitic {
    margin-top: 40px;
  }
  .analitic-number {
    font-size: 38px;
  }
  .analitic-title {
    font-size: 16px;
  }
}

@media (max-width: 1000px) {
  .analitic {
    margin-top: 50px;
  }
  .analitic-number {
    font-size: 30px;
  }
  .analitic-title {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .analitic {
    padding-top: 0;
    .el-row {
      .el-col {
        margin-top: 30px;
      }
      .el-col:nth-child(2) {
        border-right: unset;
      }
    }
  }
}
@media (max-width: 375px) {
  .analitic {
    .el-row {
      .el-col {
        border: unset;
      }
      .el-col-xs-12 {
        max-width: 100%;
        flex: 0 0 100%;
      }
    }
  }
}
</style>
