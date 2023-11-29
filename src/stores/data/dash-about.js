import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";
export const useAboutStore = defineStore("aboutDataession", () => {

  const aboutData = ref([]);
  const api = useApiStore();


  
  // barcha ma'lumotlarni olib beardi
  const get_all_aboutData = async () => {
    await api.getAxios({
      url: "about",
    }).then((res) => {
      console.log(res.data);
      aboutData.value = [...res.data.about]
    })
  };

  // yangi ma'lumot qo'shish
  const new_aboutData = async (data) => {
    await api
      .postAxios({
        url: "about",
        data,
      })
      .then((res) => {
        console.log(res.data);
        aboutData.value = [res.data, ...aboutData.value];
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta ma'lumotni olish
  const get_aboutData = async (_id) => {
    return await api.getAxios({
      url: `about/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_aboutData = async (data) => {
    await api
      .putAxios({
        url: "about",
        data,
      })
      .then((res) => {
        aboutData.value = aboutData.value.map((item) => {
          if (item._id == res.data._id) return res.data;
          return item;
        });
        ElNotification({
            title: "Обновлено",
            message: "изменение было сделано",
            type: "success",
        });
      });
  };

  // ma'lumotni o'chirish
  const delete_aboutData = async (_id) => {
    console.log(_id);
    await api
      .deleteAxios({
        url: `about/${_id}`,
      },)
      .then(() => {
        aboutData.value = aboutData.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };


  return {
    aboutData,
    get_all_aboutData,
    new_aboutData,
    get_aboutData,
    save_aboutData,
    delete_aboutData,
  };
});
