import { ref } from 'vue'
import {defineStore} from 'pinia'

export const useMenuToggleStore = defineStore("menu", ()=> {
    
    const menuToggle = ref(false)
    const setMenuToggle = (val) => {
        menuToggle.value = val
            document.body.classList.toggle('over-hidden')
    }



    return {
        menuToggle,
        setMenuToggle
    }
})