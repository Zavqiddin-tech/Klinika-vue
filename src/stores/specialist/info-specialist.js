import { ref } from "vue";
import { defineStore } from "pinia";


export const infoSpecialistStore = defineStore("info-specialist", () => {

  const title = ref("Екатерина Николаевна");
  const titleItalic = ref("Бекетова");
  const textGroup = ref([
    {
      text: "Дерматовенеролог | Трихолог | Косметолог",
    },
    {
      text: "Стаж 11 лет",
    },
    {
      text: "Стоимость приема от",
      price: "1200 ₽",
    },
  ]);
  const btnText = ref("Записаться");


  return {
    title,
    titleItalic,
    textGroup,
    btnText
  }
});
