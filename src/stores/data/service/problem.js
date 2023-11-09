import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "@/stores/admin/helpers/api";
import { ElNotification } from "element-plus";

export const useProblemStore = defineStore('problem', ()=> {
    const problems = ref([])

    const api = useApiStore()




  // barcha muammolarni olib beradi
  const get_all_problems = async (id) => {
    await api.getAxios({
      url: `serviceitemproblem/${id}`,
    }).then((res) => {
      problems.value = [...res.data]
    })
  };
  


  // yangi muammo qo'shish
  const new_problem = async (data) => {
    console.log(data);
    await api
      .postAxios({
        url: "serviceitemproblem",
        data,
      })
      .then((res) => {
        console.log(res);
        problems.value = [res.data, ...problems.value];
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta muammoni olish
  const get_problem = async (_id) => {
    return await api.getAxios({
      url: `serviceitemproblem/find/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_problem = async (data) => {
    console.log(data);
    await api
      .putAxios({
        url: "serviceitemproblem",
        data,
      })
      .then((res) => {
        console.log(res);
        problems.value = problems.value.map((item) => {
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
  const delete_problem = async (_id) => {
    await api
      .deleteAxios({
        url: `serviceitemproblem/${_id}`,
      },)
      .then(() => {
        problems.value = problems.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // xizmat holatini o'zgartirish
  const status_problem = async (_id) => {
    let res = await api.getAxios({
      url: `serviceitemproblem/change/${_id}`,
    });
    if (res.status == 200) {
      problems.value = problems.value.map((problemsStatus) => {
        if (problemsStatus._id == _id)
          return {
            ...problemsStatus,
            status: problemsStatus.status == 0 ? 1 : 0,
          };
        return problemsStatus;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };


  return {
    problems,
    get_all_problems,
    new_problem,
    get_problem,
    save_problem,
    delete_problem,
    status_problem,
  };
})