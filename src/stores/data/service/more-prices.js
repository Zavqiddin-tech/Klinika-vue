import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "@/stores/admin/helpers/api";
import { ElNotification } from "element-plus";

export const usePricesStore = defineStore("prices", () => {
  const prices = ref([]);

  const api = useApiStore();

  // barcha priceslarni olib beradi
  const get_all_prices = async (id) => {
    await api
      .getAxios({
        url: `serviceprice/${id}`,
      })
      .then((res) => {
        prices.value = [ ...res.data ];
      });
  };

  // yangi prices qo'shish
  const new_prices = async (data) => {
    await api
      .postAxios({
        url: "serviceprice",
        data,
      })
      .then((res) => {
        console.log(res);
        prices.value = [res.data, ...prices.value];
        ElNotification({
          title: "Успешный",
          message: "добавлена ​​новая эксперт",
          type: "success",
        });
      });
  };

  // bitta prices olish
  const get_prices = async (_id) => {
    console.log(_id);
    return await api.getAxios({
      url: `serviceprice/find/${_id}`,
    });
  };

  //ma'lumotni yangilab saqlash
  const save_prices = async (data) => {
    console.log(data);
    await api
      .putAxios({
        url: "serviceprice",
        data,
      })
      .then((res) => {
        console.log(res);
        prices.value = prices.value.map((item) => {
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

  // pricesni o'chirish
  const delete_prices = async (_id) => {
    await api
      .deleteAxios({
        url: `serviceprice/${_id}`,
      })
      .then(() => {
        prices.value = prices.value.filter((item) => {
          if (item._id == _id) return false;
          return item;
        });
      });
  };

  // incication holatini o'zgartirish
  const status_prices = async (_id) => {
    let res = await api.getAxios({
      url: `serviceprice/change/${_id}`,
    });
    if (res.status == 200) {
      prices.value = prices.value.map((pricesStatus) => {
        if (pricesStatus._id == _id)
          return {
            ...pricesStatus,
            status: pricesStatus.status == 0 ? 1 : 0,
          };
        return pricesStatus;
      });
      ElNotification({
        title: "Обновлено",
        message: "Статус изменен",
        type: "success",
      });
    }
  };

  return {
    prices,
    get_all_prices,
    new_prices,
    get_prices,
    save_prices,
    delete_prices,
    status_prices,
  };
});
