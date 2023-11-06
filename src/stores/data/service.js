import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";

export const useServiceStore = defineStore('service', ()=> {
    const services = ref([])
    const servicesActive = ref([])
    const servicesCount = ref(0)

    const api = useApiStore()





  // barcha xizmatlarni olib beardi
  const get_all_services = async () => {
    await api.getAxios({
      url: "service",
    }).then((res) => {
      services.value = [...res.data.services];
      servicesCount.value = res.data.count;
    })
  };
  
  
  // barcha Aktive xizmatlarni olib beardi
  const get_active_services = async () => {
    await api.getAxios({
      url: "service/active",
    }).then((res) => {
        servicesActive.value = [...res.data];
    })
  };

  // yangi xizmat qo'shish
  const new_service = async (data) => {
    await api
      .postAxios({
        url: "service",
        data,
      })
      .then((res) => {
        services.value = [res.data, ...services.value];
        servicesCount.value += 1;
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta xizmatni olish
  const get_service = async (_id) => {
    return await api.getAxios({
      url: `service/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_service = async (data) => {
    await api
      .putAxios({
        url: "service",
        data,
      })
      .then((res) => {
        services.value = services.value.map((servicesStatus) => {
          if (servicesStatus._id == res.data._id) return res.data;
          return servicesStatus;
        });
        ElNotification({
          title: "Обновлено",
          message: "Экспертная информация",
          type: "success",
        });
      });
  };

  // xizmatni o'chirish
  const delete_service = async (_id) => {
    await api
      .deleteAxios({
        url: `service/${_id}`,
      },)
      .then(() => {
        services.value = services.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // xizmat holatini o'zgartirish
  const status_service = async (_id) => {
    let res = await api.getAxios({
      url: `service/change/${_id}`,
    });
    if (res.status == 200) {
      services.value = services.value.map((servicesStatus) => {
        if (servicesStatus._id == _id)
          return {
            ...servicesStatus,
            status: servicesStatus.status == 0 ? 1 : 0,
          };
        return servicesStatus;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };


  return {
    services,
    servicesActive,
    servicesCount,
    get_all_services,
    get_active_services,
    new_service,
    get_service,
    save_service,
    delete_service,
    status_service,
  };
})