<template>
    <div class="setting">
        <h1>Настройки</h1>
        <div class="setting-nav">
            <div class="setting-title">Социальные сети</div>
            <el-button type="primary" round @click="openModal()">Добавлять</el-button>
        </div>
    </div>
    <settingDIalog />
</template>
<script setup>
import settingDIalog from '@/components/page/dialog/settingDIalog.vue';


import { useDialogStore } from "@/stores/dialog/dialog";
const { setToggle } = useDialogStore();

const openModal = () => {
    setToggle(true)
}

</script>
<style lang="scss">
    .setting {
        &-title {
            font-size: 20px;
        }
        &-nav {
            padding-top: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>