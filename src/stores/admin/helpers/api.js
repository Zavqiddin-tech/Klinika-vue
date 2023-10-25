import axios from "axios";
import { defineStore } from "pinia";
import { useHelperStore } from ".";
import { useTokenStore } from "../user/token";
import { ElMessage } from "element-plus";
import { ElNotification } from 'element-plus'
import router from "../../../router";


export const useApiStore = defineStore("api", () => {
  const helperStore = useHelperStore();
  const { url } = helperStore;

  const tokenStore = useTokenStore();

  const getAxios = (payload) => {
    return axios.get(`${url}/${payload.url}`, {
        ...tokenStore.header,
      })
      .catch((e) => {
        if(e.response.status == 401) {
          ElMessage.error('Sizga bu sahifaga ruxsat yoq')
          router.push({name: 'login'})
          return false
        }
        ElMessage.error(e.response.data);
      });
  };

  const postAxios = (payload) => {
    return axios.post(`${url}/${payload.url}`, payload.data, {
        ...tokenStore.header,
      })
      .catch((e) => {
        ElNotification({
          title: e.response.data,
          message: 'Не найдено',
          type: "warning",
        });
      });
  };

  const putAxios = (payload) => {
    return axios
      .put(`${url}/${payload.url}`, payload.data, {
        ...tokenStore.header,
      })
      .catch((e) => {
        ElMessage.error(e.response.data);
      });
  };

  const deleteAxios = (payload) => {
    return axios
      .delete(`${url}/${payload.url}`, {
        ...tokenStore.header,
      })
      .catch((e) => {
        ElMessage.error(e.response.data);
      });
  };
  return {
    getAxios,
    postAxios,
    putAxios,
    deleteAxios,
  };
});
