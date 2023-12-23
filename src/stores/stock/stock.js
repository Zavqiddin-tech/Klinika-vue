import {ref} from 'vue'
import {defineStore} from 'pinia'


export const useStock = defineStore('stock', ()=> {
    const orderStock = ref(false)

    const setOrderStock = (val)=> {
        orderStock.value = val
    }



    return {
        orderStock,
        setOrderStock
    }
})