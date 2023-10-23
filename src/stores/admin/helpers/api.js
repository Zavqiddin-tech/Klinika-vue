import axios from "axios";
import { defineStore } from "pinia";
import { useHelperStore } from ".";
import { useTokenStore } from "../user/token";
import { ElMessage } from "element-plus";
import { ElNotification } from 'element-plus'


export const useApiStore = defineStore("api", () => {
  const helperStore = useHelperStore();
  const { url } = helperStore;

  const tokenStore = useTokenStore();
  const { token, header } = tokenStore;

  const getAxios = (payload) => {
    return axios
      .get(`${url}/${payload.url}`, {
        ...header,
      })
      .catch((e) => {
        ElMessage.error(e.response.data);
      });
  };

  const postAxios = (payload) => {
    return axios
      .post(`${url}/${payload.url}`, payload.data, {
        ...header,
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
        ...header,
      })
      .catch((e) => {
        ElMessage.error(e.response.data);
      });
  };

  const deleteAxios = (payload) => {
    return axios
      .delete(`${url}/${payload.url}`, payload.data, {
        ...header,
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
