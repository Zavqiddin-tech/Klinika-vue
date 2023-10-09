import {ref} from 'vue'
import {defineStore} from 'pinia'


export const specialistStore = defineStore('specialist', ()=> {
    const specialistToggle = ref(true)

    const setSpecialist = (val)=> {
        specialistToggle.value = val
    }

    return {
        specialistToggle,
        setSpecialist
    }
})