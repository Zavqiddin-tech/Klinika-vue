<template>
    <nav class="navbar-dash">
        <div class="navbar-dash__left">
            <router-link to="/dashboard">
                <div class="navbar-dash__title"><span>Med</span>ments</div>
            </router-link>
            <form-dash />
        </div>
        <div class="navbar-dash__right">
            <router-link to="dash-regis">
                <div class="navbar-dash__notif">
                    <i class='bx bxs-bell'></i>
                    <span v-if="unread >= 1">{{ unread }}</span>
                </div>
            </router-link>
            <div class="navbar-dash__avatar">
                <img src="@/assets/logo/Avatar.png" alt="">
            </div>
        </div>
    </nav>
</template>

<script setup>
import { storeToRefs } from "pinia";
import formDash from "./form-dash.vue";

import { useFormaStore } from "@/stores/forma/forma";
const {unread} = storeToRefs(useFormaStore())
</script>

<style lang="scss">
    .navbar-dash {
        min-height: 10vh;
        position: sticky;
        top: 0;
        z-index: 10;
        padding: 12px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-bottom: 2px solid #E5E7EB;
        &__title {
            font-size: 28px;
            font-weight: 700;
            color: #333;
            font-family: 'Poppins', sans-serif;
            span {
                color: #1577FF;
            }
        }
        &__left {
            display: flex;
            align-items: center;
            gap: 100px;
            img {
                cursor: pointer;
            }
        }
        &__right {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        &__avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
        &__notif {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
                font-size: 25px;
                color: #000;
                transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                &:hover {
                    transform: rotate(20deg);
                }
            }
            span {
                top: -7px;
                right: -5px;
                width: 17px;
                height: 17px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                border-radius: 50%;
                color: #fff;
                background-color: #F56C6C;
            }
        }
    }
</style>