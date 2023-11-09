import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "@/stores/admin/helpers/api";
import { ElNotification } from "element-plus";

export const useProcessStore = defineStore("process", () => {
  const process = ref([]);

  const api = useApiStore();

  // barcha muammolarni olib beradi
  const get_all_process = async (id) => {
    await api
      .getAxios({
        url: `process/${id}`,
      })
      .then((res) => {
        console.log(res.data);
        process.value = [...res.data];
      });
  };

  // yangi muammo qo'shish
  const new_process = async (data) => {
    console.log(data);
    await api
      .postAxios({
        url: "process",
        data,
      })
      .then((res) => {
        console.log(res);
        process.value = [res.data, ...process.value];
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta muammoni olish
  const get_process = async (_id) => {
    console.log(_id);
    return await api.getAxios({
      url: `process/find/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_process = async (data) => {
    console.log(data);
    await api
      .putAxios({
        url: "process",
        data,
      })
      .then((res) => {
        console.log(res);
        process.value = process.value.map((item) => {
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
  const delete_process = async (_id) => {
    await api
      .deleteAxios({
        url: `process/${_id}`,
      })
      .then(() => {
        process.value = process.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // xizmat holatini o'zgartirish
  const status_process = async (_id) => {
    let res = await api.getAxios({
      url: `process/change/${_id}`,
    });
    if (res.status == 200) {
      process.value = process.value.map((processStatus) => {
        if (processStatus._id == _id)
          return {
            ...processStatus,
            status: processStatus.status == 0 ? 1 : 0,
          };
        return processStatus;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    process,
    get_all_process,
    new_process,
    get_process,
    save_process,
    delete_process,
    status_process,
  };
});
