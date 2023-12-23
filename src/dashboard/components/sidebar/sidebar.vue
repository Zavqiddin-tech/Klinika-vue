<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo" :router="true">
      <el-menu-item v-for="item of dashMenuLink" :index="item.path">
        <el-icon>
          <span class="material-symbols-outlined">
            {{ item.icon }}
          </span>
          <div v-if="item.icon == 'mail' && unread >= 1" class="sidebar-unread">
            <span></span>
          </div>
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
    <div class="sidebar-bottom">
      <span class="material-symbols-outlined" @click="support()"> support_agent </span>
      <router-link to="/setting" class="d-flex">
        <span class="material-symbols-outlined"> settings </span>
      </router-link>
      <span class="material-symbols-outlined" @click="logOut()"> logout </span>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import cookies from "vue-cookies";

import { dashMenuLink } from "../../../router/menu";

import { useFormaStore } from "@/stores/forma/forma";
const { unread } = storeToRefs(useFormaStore());

import {useAuthStore} from "@/stores/admin/user/auth"
const {checkUser} = useAuthStore()
const logOut = () => {
  if(confirm("Chiqish")) {
    cookies.remove("clinik-token")
    cookies.remove("clinik-user")
    checkUser()
    location.reload()
  }
};

const support = ()=> {
  alert("🔴 Hozircha Support bo'limi mavjud emas❗")
}
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid #e5e7eb;
  .el-menu {
    border-right: 0;
    &-item {
      font-size: 16px;
      font-family: "Inter", sans-serif;
    }
  }
  &-bottom {
    height: 200px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
    background-image: url('@/assets/wave-4.svg');
    background-repeat: no-repeat;
    background-position: bottom;
    span {
      font-size: 25px;
      font-weight: 400;
      color: #fff;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        transform: translateY(-2px);
        color: #9ac4ff;
      }
    }
  }
  &-unread {
    position: relative;
    span {
      top: -12px;
      left: -7px;
      position: absolute;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #f56c6c;
    }
  }
}
</style>
