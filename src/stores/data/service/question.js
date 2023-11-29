import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "@/stores/admin/helpers/api";
import { ElNotification } from "element-plus";

export const useQuestionStore = defineStore("question", () => {
  const questions = ref([]);

  const api = useApiStore();

  // barcha questionlarni olib beradi
  const get_all_question = async (id) => {
    await api
      .getAxios({
        url: `servicequestion/${id}`,
      })
      .then((res) => {
        questions.value = [ ...res.data ];
      });
  };

  // yangi question qo'shish
  const new_question = async (data) => {
    await api
      .postAxios({
        url: "servicequestion",
        data,
      })
      .then((res) => {
        questions.value = [res.data, ...questions.value];
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta question olish
  const get_question = async (_id) => {
    console.log(_id);
    return await api.getAxios({
      url: `servicequestion/find/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_question = async (data) => {
    console.log(data);
    await api
      .putAxios({
        url: "servicequestion",
        data,
      })
      .then((res) => {
        console.log(res);
        questions.value = questions.value.map((item) => {
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

  // questionni o'chirish
  const delete_question = async (_id) => {
    await api
      .deleteAxios({
        url: `servicequestion/${_id}`,
      })
      .then(() => {
        questions.value = questions.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // incication holatini o'zgartirish
  const status_question = async (_id) => {
    let res = await api.getAxios({
      url: `servicequestion/change/${_id}`,
    });
    if (res.status == 200) {
      questions.value = questions.value.map((questionStatus) => {
        if (questionStatus._id == _id)
          return {
            ...questionStatus,
            status: questionStatus.status == 0 ? 1 : 0,
          };
        return questionStatus;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    questions,
    get_all_question,
    new_question,
    get_question,
    save_question,
    delete_question,
    status_question,
  };
});
