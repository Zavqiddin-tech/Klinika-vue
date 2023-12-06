import { defineStore } from "pinia";
import { ref } from "vue";
import cookies from "vue-cookies";
import router from "@/router/index";
import { useApiStore } from "../helpers/api";
import { useTokenStore } from "./token";

export const useAuthStore = defineStore("auth", () => {
  const user = ref({});
  const setUser = (payload) => {
    cookies.set("clinik-user", payload);
    user.value = payload;
  };
  const apiStore = useApiStore();

  const tokenStore = useTokenStore();

  const login = async (payload) => {
    let res = await apiStore.postAxios({
      url: "auth/login",
      data: payload,
    });
    if (res.status == 200) {
      setUser(res.data.user);
      tokenStore.setToken(res.data.token);
      router.push({ name: "dashboard" });
    }
  };

  const checkUser = async () => {
    if (cookies.isKey("clinik-token")) {
      tokenStore.setToken(cookies.get("clinik-token"));
    }
    let res = await apiStore.getAxios({
      url: "auth/checkuser",
    });
    if (res.status == 200) {
      setUser(res.data);
    }
  };

  return {
    user,
    login,
    checkUser,
  };
});
