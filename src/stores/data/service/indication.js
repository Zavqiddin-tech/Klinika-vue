import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "@/stores/admin/helpers/api";
import { ElNotification } from "element-plus";

export const useIndicationStore = defineStore("indication", () => {
  const indications = ref([]);

  const api = useApiStore();

  // barcha indicationlarni olib beradi
  const get_all_indication = async (id) => {
    await api
      .getAxios({
        url: `procedure/${id}`,
      })
      .then((res) => {
        indications.value = {...res.data}
      });
  };

  // yangi indication qo'shish
  const new_indication = async (data) => {
    await api
      .postAxios({
        url: "procedure",
        data,
      })
      .then((res) => {
        console.log(res);
        indications.value = [res.data, ...indications.value];
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta indication olish
  const get_indication = async (_id) => {
    console.log(_id);
    return await api.getAxios({
      url: `procedure/find/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_indication = async (data) => {
    console.log(data);
    await api
      .putAxios({
        url: "procedure",
        data,
      })
      .then((res) => {
        console.log(res);
        indications.value = indications.value.map((item) => {
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

  // indicationni o'chirish
  const delete_indication = async (_id) => {
    await api
      .deleteAxios({
        url: `procedure/${_id}`,
      })
      .then(() => {
        indications.value = indications.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // incication holatini o'zgartirish
  const status_indication = async (_id) => {
    let res = await api.getAxios({
      url: `procedure/change/${_id}`,
    });
    if (res.status == 200) {
      indications.value = indications.value.map((indicationStatus) => {
        if (indicationStatus._id == _id)
          return {
            ...indicationStatus,
            status: indicationStatus.status == 0 ? 1 : 0,
          };
        return indicationStatus;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    indications,
    get_all_indication,
    new_indication,
    get_indication,
    save_indication,
    delete_indication,
    status_indication,
  };
});
