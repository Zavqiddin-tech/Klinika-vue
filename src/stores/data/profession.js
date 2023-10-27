import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";

export const useProfessionStore = defineStore("profession", () => {
  const profs = ref([]);
  const profsCount = ref(0);
  const activeProfs = ref([])

  const api = useApiStore();

  // barcha kasb turlarini olib beradi
  const get_all_profs = async () => {
    let res = await api.getAxios({
      url: "profession",
    });
    if (res.status == 200) {
      profs.value = [...res.data.professions];
      profsCount.value = res.data.count;
    }
  };
  // barcha Aktiv kasb turlarini olib beradi
  const get_active_profs = async () => {
    let res = await api.getAxios({
      url: "profession/active",
    });
    if (res.status == 200) {
      activeProfs.value = [...res.data]
    }
  };

  // yangi kasb qo'shish
  const new_prof = async (data) => {
    await api
      .postAxios({
        url: "profession",
        data,
      })
      .then((res) => {
        profs.value = [res.data, ...profs.value];
        profsCount.value += 1;
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая профессия",
          type: "success",
        });
      });
  };

  // bitta kasbni olish
  const get_prof = async (_id) => {
    return await api.getAxios({
      url: `profession/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_prof = async (data) => {
    await api
      .putAxios({
        url: "profession",
        data,
      })
      .then((res) => {
        profs.value = profs.value.map((profession) => {
          if (profession._id == res.data._id) return res.data;
          return profession;
        });
      });
  };

  // kasbni o'chirish
  const delete_prof = async (_id) => {
    await api
      .deleteAxios({
        url: `profession/${_id}`,
      })
      .then(() => {
        profs.value = profs.value.filter((profession) => {
          if (profession._id == _id) return false;
          return profession;
        });
      });
  };

  // kasb holatini o'zgartirish
  const status_prof = async (_id) => {
    let res = await api.getAxios({
      url: `profession/change/${_id}`,
    });
    if (res.status == 200) {
      profs.value = profs.value.map((profession) => {
        if (profession._id == _id)
          return {
            ...profession,
            status: profession.status == 0 ? 1 : 0,
          };
        return profession;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    profs,
    profsCount,
    activeProfs,
    get_all_profs,
    get_active_profs,
    new_prof,
    get_prof,
    save_prof,
    delete_prof,
    status_prof,
  };
});
