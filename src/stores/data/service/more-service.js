import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "@/stores/admin/helpers/api";
import { ElNotification } from "element-plus";

export const useMoreServiceStore = defineStore('moreService', ()=> {
    const moreServices = ref([])
    const moreServicesActive = ref([])

    const api = useApiStore()




  // barcha xizmatlarni olib beardi front uchun
  const get_moreServicesAll = async (id) => {
    return await api.getAxios({
      url: `serviceitem/all/${id}`,
    })
  };

  
  // barcha xizmatlarni olib beardi
  const get_all_moreServices = async (id) => {
    await api.getAxios({
      url: `serviceitem/${id}`,
    }).then((res) => {
      console.log(res.data);
      moreServices.value = [...res.data]
    })
  };
  
  
  // barcha Aktive xizmatlarni olib beardi
  const get_active_moreServices = async () => {
    await api.getAxios({
      url: "serviceitem",
    }).then((res) => {
        moreServicesActive.value = [...res.data];
    })
  };

  // yangi xizmat qo'shish
  const new_moreService = async (data) => {
    await api
      .postAxios({
        url: "serviceitem",
        data,
      })
      .then((res) => {
        moreServices.value = [res.data, ...moreServices.value];
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta xizmatni olish
  const get_moreService = async (_id) => {
    return await api.getAxios({
      url: `serviceitem/find/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_moreService = async (data) => {
    console.log(data);
    await api
      .putAxios({
        url: "serviceitem",
        data,
      })
      .then((res) => {
        moreServices.value = moreServices.value.map((item) => {
          if (item._id == res.data._id) return res.data;
          return item;
        });
        ElNotification({
          title: "Обновлено",
          message: "Экспертная информация",
          type: "success",
        });
      });
  };

  // xizmatni o'chirish
  const delete_moreService = async (_id) => {
    await api
      .deleteAxios({
        url: `serviceitem/${_id}`,
      },)
      .then(() => {
        moreServices.value = moreServices.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // xizmat holatini o'zgartirish
  const status_moreService = async (_id) => {
    let res = await api.getAxios({
      url: `serviceitem/change/${_id}`,
    });
    if (res.status == 200) {
      moreServices.value = moreServices.value.map((moreServicesStatus) => {
        if (moreServicesStatus._id == _id)
          return {
            ...moreServicesStatus,
            status: moreServicesStatus.status == 0 ? 1 : 0,
          };
        return moreServicesStatus;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };


  return {
    moreServices,
    moreServicesActive,
    get_moreServicesAll,
    get_all_moreServices,
    get_active_moreServices,
    new_moreService,
    get_moreService,
    save_moreService,
    delete_moreService,
    status_moreService,
  };
})