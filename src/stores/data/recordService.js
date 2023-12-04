import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";


export const useRecordServiceStore = defineStore("recordService", () => {

  const recordService = ref([]);
  const api = useApiStore();

  const temporary = ref({})
  const temporaryId = ref('')
  const setTemporary = (val) => {
    console.log(val._id);
    temporary.value = {...val}
    temporaryId.value = val._id
  }

  // barcha recordServiceServicelarni olib beardi
  const get_all_recordService = async () => {
    await api.getAxios({
      url: "consult",
    }).then((res) => {
      recordService.value = [...res.data]
    })
  };


  // yangi recordService qo'shish
  const new_recordService = async (data) => {
    await api
      .postAxios({
        url: "consult",
        data,
      })
      .then((res) => {
        console.log(res.data);
        recordService.value = [res.data, ...recordService.value];
        ElNotification({
          title: "Успешный",
          message: "Отправил",
          type: "success",
        });
      });
  };

  // bitta recordServiceni olish
  const get_recordService = async (_id) => {
    return await api.getAxios({
      url: `consult/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_recordService = async (data) => {
    await api
      .putAxios({
        url: "consult",
        data,
      })
      .then((res) => {
        recordService.value = recordService.value.map((item) => {
          if (item._id == res.data._id) return res.data;
          return item;
        });
        ElNotification({
          title: "Обновлено",
          message: "информация",
          type: "success",
        });
      });
  };

  // recordServiceni o'chirish
  const delete_recordService = async (_id) => {
    console.log(_id);
    await api
      .deleteAxios({
        url: `consult/${_id}`,
      },)
      .then(() => {
        recordService.value = recordService.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // recordServiceService holatini o'zgartirish
  const status_recordService = async (_id) => {
    let res = await api.getAxios({
      url: `consult/change/${_id}`,
    });
    if (res.status == 200) {
      recordService.value = recordService.value.map((item) => {
        if (item._id == _id)
          return {
            ...item,
            status: item.status == 0 ? 1 : 0,
          };
        return item;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    recordService,
    temporary,
    temporaryId,
    setTemporary,
    get_all_recordService,
    new_recordService,
    get_recordService,
    save_recordService,
    delete_recordService,
    status_recordService,
  };
});
