import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";

export const useViewSpecStore = defineStore("viewSpecession", () => {
  const oneSpec = ref({});
  const api = useApiStore();

  const doctorID = ref("");
  const setDoctorID = (val) => {
    doctorID.value = val;
  };

  // bittasini front uchun
  const get_viewSpecAll = async (_id) => {
    return await api.getAxios({
      url: `viewspec/all/${_id}`,
    });
  };

  // yangi shifokor qo'shish
  const new_viewSpec = async (data) => {
    await api
      .postAxios({
        url: "viewspec",
        data,
      })
      .then((res) => {
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая информация",
          type: "success",
        });
      });
  };

  // bittasini olish
  const get_viewSpec = async (_id) => {
    return await api.getAxios({
      url: `viewspec/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_viewSpec = async (data) => {
    await api.putAxios({
      url: "viewspec",
      data,
    });
  };

  //  o'chirish
  const delete_viewSpec = async (_id) => {
    console.log(_id);
    await api.deleteAxios({
      url: `viewspec/${_id}`,
    });
  };

  return {
    oneSpec,
    doctorID,
    get_viewSpecAll,
    get_viewSpec,
    setDoctorID,
    new_viewSpec,
    save_viewSpec,
    delete_viewSpec,
  };
});
