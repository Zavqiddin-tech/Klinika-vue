<template>
    <div class="form-wrapper">
        <div :class="noClass ? '' : 'container'">
            <div class="title text-center">{{ title }}</div>
            <div class="text text-center">{{ text }}</div>     
            <forma-input />
            <div class="form-agree">
                <el-switch 
                @click="switchToggle()"
                v-model="switchForm" 
                style="--el-switch-on-color: #9A888A; --el-switch-off-color: #ccc"
                />
                <div class="form-agree__text">
                    {{ agreeText }}
                </div>
            </div>
        </div>
    </div>
</template>






<script setup>
import {ref} from 'vue'
import { storeToRefs } from 'pinia';
const props = defineProps(['noClass', 'title', 'text', 'agreeText'])
import formaInput from './form-comp/forma-input.vue';


import { useFormaStore } from '../../stores/forma/forma';
const {switchForm} = storeToRefs(useFormaStore())
const {setSwitchForm}  = useFormaStore()


const switchToggle = ()=> {
    if(switchForm.value) {
        setSwitchForm(true)
    } else {
        setSwitchForm(false)
    }
}

</script>





<style lang="scss">
@import '@/styles/vars/colors.scss';
.form-wrapper {
        padding: 95px 0px;
        .container {
            padding: 32px 0px;
            background-color: $brown;
            border-radius: 24px;
            .title {
                padding-bottom: 15px;
            }
        }
    }
    .form-agree {
        width: 600px;
        max-width: 600px;
        margin: auto;
        display: flex;
        gap: 20px;
        &__text {
            font-size: 12px;
            font-weight: 200;
        }
    }


    .form-agree {
        width: 90%;
  }


</style>