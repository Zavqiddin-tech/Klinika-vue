import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";


const f = new Intl.DateTimeFormat('eng-us', {
  dataStyle: 'short',
  timeStyle: 'full'
})

export const useFormaStore = defineStore("forma", () => {
  const switchForm = ref(false);
  const buttonForm = ref(true);
  const setSwitchForm = (val) => {
    if (val) {
      buttonForm.value = false;
    } else {
      buttonForm.value = true;
    }
  };

  const api = useApiStore();
  const consuls = ref([]);
  const unread = ref(0)

  const get_all_consul = async () => {
    await api
      .getAxios({
        url: "addconsul",
      })
      .then((res) => {
        consuls.value = res.data.addConsuls.map(item => {
          return {
             ...item, 
             createdTime: new Date(item.createdTime).toLocaleString()
            }
        })
        unread.value = res.data.countUnread
      });
  };

  // yangi konsultatsiya uchun ariza yuborish
  const new_consul = async (data) => {
    console.log(data);
    await api.postAxios({
      url: "addconsul",
      data,
    });
  };

  // konsultatsiya holatini o'zgartirish
  const status_consul = async (_id, status) => {
    let res = await api.getAxios({
      url: `addconsul/change/${_id}`,
      search: {
        status,
      },
    });
    if (res.status == 200) {
      consuls.value = consuls.value.map((list) => {
        if (list._id == res.data._id) return res.data;
        return list;
      });
      get_all_consul()
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    switchForm,
    buttonForm,
    consuls,
    unread,
    setSwitchForm,
    get_all_consul,
    new_consul,
    status_consul,
  };
});
