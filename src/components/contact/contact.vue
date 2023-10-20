<template >
    <div class="contact">
        <div class="container">
            <div class="title">Контакты</div>
            <el-row class="contact-card__items">
                <el-col :span="12" :sm="16" :md="12" :xs="22" class="contact-card__item">
                    <contact-slider />
                </el-col>
                <el-col :span="12" :sm="16" :md="12" :xs="22" class="contact-card__item">
                    <contact-info />
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script setup>
import contactSlider from './contact-comp/contact-slider.vue';
import contactInfo from './contact-comp/contact-info.vue';
</script>


<style lang="scss">
    .contact {
        &-card__items {
            padding-top: 42px;
            margin-left: -16px;
            margin-right: -16px;
        }
        &-card__item {
            padding: 0px 16px;
        }
        .swiper-pagination {
            display: flex;
            justify-content: center;
            bottom: 10px !important;
        }
    }

    @media (max-width: 1000px) {
        .contact {
            .el-row {
                justify-content: center;
                gap: 40px;
            }
            &-card__item {
                padding: 0;
            }
        }
    }

    @media (max-width: 768px) {
        .contact {
            padding-top: 50px;
            &-card__items {
                padding-top: 30px;
            }
            .container > {
                .title {
                padding-left: 20px;
            }
            }
        }
    }
    @media (max-width: 550px) {
        .contact {
            .title {
                padding-left: 0px;
            }
        }
    }
</style>