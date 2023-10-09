<template>
  <div class="analitic">
    <el-row>
      <el-col :span="array.length == 3 ? 8 : 6" :xs="12" v-for="item in array">
        <div class="analitic-item">
          <div class="analitic-number">{{ item.number }}</div>
          <div class="analitic-title">{{ item.text }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps(['array'])
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
