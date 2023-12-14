import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";

export const useRecordDoctorStore = defineStore("recordDoctor", () => {
  const recordSpec = ref(false);
  const editRecordSpec = ref(false);
  const doctorId = ref("");
  const setRecordSpec = (val) => (recordSpec.value = val);
  const setEditRecordSpec = (val) => (editRecordSpec.value = val);
  const setDoctorId = (val) => (doctorId.value = val);

  const records = ref([]);
  const api = useApiStore();

  // barcha recordlarni olib beardi
  const get_all_records = async () => {
    await api
      .getAxios({
        url: "consult",
      })
      .then((res) => {
        records.value = [...res.data.reviews];
      });
  };

  // yangi recordService qo'shish
  const new_record = async (data) => {
    await api
      .postAxios({
        url: "consult",
        data,
      })
      .then((res) => {
        console.log(res.data);
        records.value = [res.data, ...records.value];
        ElNotification({
          title: "Успешный",
          message: "Отправил",
          type: "success",
        });
      });
  };

  // bitta recordni olish
  const get_record = async (_id) => {
    return await api.getAxios({
      url: `consult/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_record = async (data) => {
    await api
      .putAxios({
        url: "consult",
        data,
      })
      .then((res) => {
        records.value = res.data.map((item) => {
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

  // recordni o'chirish
  const delete_record = async (_id) => {
    console.log(_id);
    await api
      .deleteAxios({
        url: `consult/${_id}`,
      })
      .then(() => {
        records.value = records.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // record holatini o'zgartirish
  const status_record = async (_id) => {
    let res = await api.getAxios({
      url: `consult/change/${_id}`,
    });
    if (res.status == 200) {
      records.value = records.value.map((item) => {
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
    recordSpec,
    editRecordSpec,
    doctorId,
    setRecordSpec,
    setEditRecordSpec,
    setDoctorId,
    records,
    get_all_records,
    new_record,
    get_record,
    save_record,
    delete_record,
    status_record,
  };
});
