<template>
  <div class="analitic">
    <el-row v-if="aboutData">
      <el-col :span="6" :xs="12" v-for="item of aboutData[0].arr">
        <div class="analitic-item">
          <div class="analitic-number">
            {{ item.number }}
            <span v-if="item.plus" class="material-symbols-outlined"> add </span>
          </div>
          <div class="analitic-title">{{ item.title }}</div>
        </div>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="6" :xs="12" v-for="anim of 4">
        <div class="analitic-item">
          <div class="analitic-number"><el-skeleton :rows="1" animated /></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps(["aboutData"]);
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 58px;
    color: $brownBlack;
    span {
      font-size: 40px;
    }
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
