<template>
    <div class="indications">
        <div class="title">Показания и противопоказания к процедуре</div>
        <el-row>
            <el-col :span="12" v-for="item in 2">
                <div class="indications-item">
                    <div class="title-small">Показания</div>
                    <ul class="indications-lists">
                        <li class="indications-list">Морщины</li>
                        <li class="indications-list">Морщины</li>
                        <li class="indications-list">Морщины</li>
                        <li class="indications-list">Морщины</li>
                        <li class="indications-list">Морщины</li>
                        <li class="indications-list">Морщины</li>
                        <li class="indications-list">Морщины</li>
                        <li class="indications-list">Морщины</li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.indications {
    padding-top: 58px;
    .el-row {
        margin-left: -16px;
        margin-right: -16px;
        padding-top: 40px;
        .el-col {
            padding: 0px 16px;
            &:last-child {
                .indications-item {
                    background-color: #EBEBEB;
                }
            }
        }
    }
    &-item {
        padding: 32px;
        border-radius: 24px;
        background-color: #E7E1E0;
    }
    &-lists {
        padding-top: 26px;
        padding-left: 20px;
        list-style-type: disc;
        display: flex;
        flex-direction: column;
        gap: 25px;
        li {
            font-weight: 200;
            color: #546272;
        }
    }
}

@media (max-width: 550px) {
    .indications {
        .el-row {
            gap: 30px;
            justify-content: center;
            .el-col-12 {
                max-width: 80%;
                flex: 0 0 80%;
            }
        }
    }
}
@media (max-width: 375px) {
    .indications {
        .el-row {
            padding-top: 30px;
            justify-content: center;
            .el-col-12 {
                max-width: 100%;
                flex: 0 0 100%;
            }
        }
    }
}

</style>