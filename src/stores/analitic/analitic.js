import { ref } from "vue";
import { defineStore } from "pinia";

export const useAnaliticStore = defineStore('analitic', ()=> {
    const aboutCenterAnalitic = ref([
        {
            number: "15",
            text: "лет средний стаж специалистов"
        },
        {
            number: "50+",
            text: "лет средний стаж специалистов"
        },
        {
            number: "8000+",
            text: "лет средний стаж специалистов"
        },
        {
            number: "20000+",
            text: "лет средний стаж специалистов"
        },
    ])
          
    const servicesAboutAnalitic = ref([
        {
            number: "40",
            text: "минут занимает один сеанс"
        },
        {
            number: "1",
            text: "процедура для видимого эффекта"
        },
        {
            number: "2",
            text: "года сохраняется результат"
        },
    ])

    return {
        aboutCenterAnalitic,
        servicesAboutAnalitic
    }
})