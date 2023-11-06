import { ref } from "vue";
import { defineStore } from "pinia";


export const useLoaderStore = defineStore('loader', ()=> {
    const loaderToggle = ref(true)
    const setLoaderToggle = (val) => {
        loaderToggle.value = val
    } 


    return {
        loaderToggle,
        setLoaderToggle
    }
})