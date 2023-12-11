import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiStore } from "../admin/helpers/api";
import { ElNotification } from "element-plus";

export const useReviewStore = defineStore("review", () => {
  const api = useApiStore();


  // barchasini olish
  const get_reviewAll = async (_id) => {
    await api.getAxios({
      url: `review`,
    })
    .then((res) => {
        console.log(res);
    })
  };

  // yangi izoh qo'shish
  const new_review = async (data) => {
    await api
      .postAxios({
        url: "review",
        data,
      })
      .then((res) => {
        console.log(res);
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая информация",
          type: "success",
        });
      });
  };

  // bittasini olish
  const get_review = async (_id) => {
    return await api.getAxios({
      url: `review/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_review = async (data) => {
    await api.putAxios({
      url: "review",
      data,
    });
  };

  //  o'chirish
  const delete_review = async (_id) => {
    await api.deleteAxios({
      url: `review/${_id}`,
    });
  };

  return {
    get_reviewAll,
    get_review,
    new_review,
    save_review,
    delete_review,
  };
});
