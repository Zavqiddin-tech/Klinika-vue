<template>
    <div class="header-nav">
        <div class="logo" @click="pressLogo()">
            <router-link to="/main">
                <img src="@/assets/logo/nav-logo.png" alt="logo">
            </router-link>
        </div>
        <div class="header-number">
           <a href="#">8 (861) <span>202-0-202</span></a>
        </div>
        <div class="header-btn-group">
            <el-button class="nav-btn" round>Записаться</el-button>
            <el-button class="btn-white" :icon="User" round>Войти</el-button>
        </div>
        <div class="menu-toggle" @click="menuOpen()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>


<script setup>
import { User } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';
import { useMenuToggleStore } from '../../../stores/menu/menuToggle';
const {menuToggle} = storeToRefs(useMenuToggleStore())
const {setMenuToggle} = useMenuToggleStore()

import {useMenuStore} from '@/router/menu'
const {noActiveLink} = useMenuStore()

const pressLogo = ()=> {
    noActiveLink()
}

const menuOpen = ()=> {
    if (menuToggle.value) {
        setMenuToggle(false)
    } else {
        setMenuToggle(true)
    }
}
</script>
<style lang="scss">
    .header {
        &-nav {
            padding-bottom: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #546272;
            .logo {
                padding-left: 17px;
            }
        }
        .nav-btn {
            background-color: #546272;
            color: #fff;
            &:hover {
                opacity: 0.8;
            }
        }
        &-number {
            font-size: 18px;
            font-weight: 200;   
            a {
                color: #546272;

            }
            span {
                font-weight: 600;
                color: #546272;
            }
            &:hover {
                text-decoration: underline;
            }
        }
        &-btn-group {
            .el-button {
                padding: 18px 20px;
                font-size: 15px;
                &:hover {
                    transform: translateY(-2px);
                }
                &:active {
                    transform: translateY(2px);
                }
                
            }
        }
    }

    .menu-toggle {
        width: 30px;
        display: none;
        flex-direction: column;
        gap: 5px;
        z-index: 100;
        display: none;
        cursor: pointer;
        &:hover {
            .line {
                &:nth-child(1) {
                    width: 90%;
                }
                &:nth-child(2) {
                    width: 30%;
                }
                &:nth-child(3) {
                    width: 90%;
                }
                
            }
        }
        .line {
            width: 100%;
            height: 2px;
            background-color: #6D696A;
            border-radius: 30px;
            transition: 0.3s;
            &:nth-child(1) {
                width: 70%;
            }
            &:nth-child(2) {
                width: 90%;
            }
        }
    }
    


    @media (max-width: 650px) {
        .header {
            .header-number {
                display: none;
            }
            .header-btn-group {
                display: none;
            }
            .menu-toggle {
                display: flex;
            }
        }
    }
</style>