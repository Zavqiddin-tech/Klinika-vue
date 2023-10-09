<template>
  <div class="services-process">
    <div class="title">Как проходит процесс</div>
    <el-row>
        <el-col :span="8" :xs=10 v-for="item of process">
            <div class="services-process__item">
                <div class="services-process__title">{{ item.title }}</div>
                <div class="services-process__text">{{ item.text }}</div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps(['process'])
</script>

<style lang="scss">
.services-process {
    padding-top: 98px;
    .title {
        padding-bottom: 40px;
    }
    .el-row {
        padding-top: 40px;
        border-top: 2px solid #9A888A;
        .el-col {
            padding-left: 90px;
        }
    }
    &__title {
        padding-bottom: 30px;
        font-size: 20px;
        font-weight: 600;
        color: #546272;
    }
    &__text {
        font-size: 16px;
        line-height: 24px;
        font-weight: 200;
    }
}


@media (max-width: 900px) {
    .services-process {
        padding-top: 60px;
        &__title {
            padding-bottom: 20px;
            font-size: 17px;
        }
        &__text {
            font-size: 14px;
        }
    }
}

@media (max-width: 768px) {
    .services-process {
        .el-row {
            gap: 30px;
            justify-content: center;
            .el-col {
                padding-left: 0;
            }
        }
        .title {
            padding-bottom: 10px;
        }
    }
}

@media (max-width: 375px) {
    .services-process {
        .el-row {
            .el-col-xs-10 {
                max-width: 80%;
                flex: 0 0 80%;
            }
        }
    }
}
</style>
