<template>
    <div class="specialist">
        <div class="container">
            <service-top :title="title" :text="text"/> 
            <el-row>
                <el-col :span="8" :sm="10" :md="8" :xs="20" v-for="item of persons">
                    <specialists-card :img="item.img" :title="item.title" :text="item.text"/>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import serviceTop from '../service/service-comp/service-top.vue';
import specialistsCard from './specialists-comp/specialists-card.vue';

import {ref} from 'vue'
const title = ref('Наши специалисты')
const text = ref('Все специалисты')


import specialist4 from '@/assets/img/specialist-4.png'

const persons = ref([
    {
        img: specialist4,
        title: 'Бекетова Екатерина Николаевна',
        text: 'Дерматовенеролог cтаж 11 лет'
    },
    {
        img: specialist4,
        title: 'Бекетова Екатерина Николаевна',
        text: 'Дерматовенеролог cтаж 11 лет'
    },
    {
        img: specialist4,
        title: 'Бекетова Екатерина Николаевна',
        text: 'Дерматовенеролог cтаж 11 лет'
    },
])

</script>

<style lang="scss">
    .specialist {
        padding-top: 160px;
        .el-row {
            margin-left: -15px;
            margin-right: -15px;
            .el-col {
                padding: 15px;
            }
        }
    }

    @media (max-width: 1000px) {
        .specialist {
            .el-row {
                justify-content: center;
            }
        }
    }
</style>