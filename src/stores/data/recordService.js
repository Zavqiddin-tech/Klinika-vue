import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";


export const useRecordServiceStore = defineStore("recordService", () => {

  const recordService = ref([]);
  const api = useApiStore();

  const recordServi = ref(false);
  const editRecordServi = ref(false);
  const serviId = ref("");
  const setRecordServi = (val) => (recordServi.value = val);
  const setEditRecordServi = (val) => (editRecordServi.value = val);
  const setServiId = (val) => (serviId.value = val);

  const detailToggle = ref(true)
  const setDetailToggle = (val) => detailToggle.value = val

  const temporary = ref({})
  const setTemporary = (val) => {
    temporary.value = val
  }

  // barcha recordServiceServicelarni olib beardi
  const get_all_recordService = async (params) => {
    let obj = { type: params }
    await api.getAxios({
      url: "consult",
      search: obj
    }).then((res) => {
      recordService.value = res.data.reviews
      console.log(recordService.value);
    })
  };


  // yangi recordService qo'shish
  const new_recordService = async (data) => {
    console.log(data);
    await api
      .postAxios({
        url: "consult",
        data,
      })
      .then((res) => {
        console.log(res.data);
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

  // konsultatsiya holatini o'zgartirish
  const status_consul = async (_id, status) => {
    let res = await api.getAxios({
      url: `consult/change/${_id}`,
      search: {
        status: status
      },
    });
    if (res.status == 200) {
      console.log(res.data);
      recordService.value = recordService.value.map((list) => {
        if (list._id == res.data._id) return res.data;
        return list;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    recordServi,
    editRecordServi,
    serviId,
    setRecordServi,
    setEditRecordServi,
    setServiId,

    recordService,
    temporary,
    detailToggle,
    setTemporary,
    setDetailToggle,
    get_all_recordService,
    new_recordService,
    get_recordService,
    save_recordService,
    delete_recordService,
    status_consul
  };
});
