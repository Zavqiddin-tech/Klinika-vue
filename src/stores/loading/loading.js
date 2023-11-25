import { ref } from "vue";
import { defineStore } from "pinia";


export const useLoadingStore = defineStore('loader', ()=> {
    const loading = ref(true)
    const setLoading = (val) => {
        loading.value = val
    } 


    return {
        loading,
        setLoading,
    }
})