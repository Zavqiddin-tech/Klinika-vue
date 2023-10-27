import { defineStore } from "pinia";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";

export const useExpertsStore = defineStore("expertession", () => {
  const experts = ref([]);
  const expertsCount = ref(0);

  const api = useApiStore();

  // barcha expertlarni olib beardi
  const get_all_experts = async () => {
    await api.getAxios({
      url: "specialist",
    }).then((res) => {
      experts.value = [...res.data.specialists];
      expertsCount.value = res.data.count;
    })
    
  };

  // yangi expert qo'shish
  const new_expert = async (data) => {
    console.log(data);
    await api
      .postAxios({
        url: "specialist",
        data,
      })
      .then((res) => {
        console.log(res.data);
        experts.value = [res.data, ...experts.value];
        expertsCount.value += 1;
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta expertni olish
  const get_expert = async (_id) => {
    return await api.getAxios({
      url: `specialist/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_expert = async (data) => {
    await api
      .putAxios({
        url: "specialist",
        data,
      })
      .then((res) => {
        experts.value = experts.value.map((expertession) => {
          if (expertession._id == res.data._id) return res.data;
          return expertession;
        });
        ElNotification({
          title: "Обновлено",
          message: "Экспертная информация",
          type: "success",
        });
      });

  };

  // expertni o'chirish
  const delete_expert = async (_id) => {
    console.log(_id);
    await api
      .deleteAxios({
        url: `specialist/${_id}`,
      },)
      .then(() => {
        experts.value = experts.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // expert holatini o'zgartirish
  const status_expert = async (_id) => {
    let res = await api.getAxios({
      url: `specialist/change/${_id}`,
    });
    if (res.status == 200) {
      experts.value = experts.value.map((expertession) => {
        if (expertession._id == _id)
          return {
            ...expertession,
            status: expertession.status == 0 ? 1 : 0,
          };
        return expertession;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    experts,
    expertsCount,
    get_all_experts,
    new_expert,
    get_expert,
    save_expert,
    delete_expert,
    status_expert,
  };
});
