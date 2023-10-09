import { ref } from 'vue'
import {defineStore} from 'pinia'

export const useMenuToggleStore = defineStore("menu", ()=> {
    
    const menuToggle = ref(false)
    const setMenuToggle = (val) => {
        menuToggle.value = val
    }


    return {
        menuToggle,
        setMenuToggle
    }
})