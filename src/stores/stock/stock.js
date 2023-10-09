import {ref} from 'vue'
import {defineStore} from 'pinia'

import specialist1 from '@/assets/img/specialist-1.png'

export const useStock = defineStore('stock', ()=> {
    const orderStock = ref(false)

    const setOrderStock = (val)=> {
        orderStock.value = val
    }


    const stockPersons = ref([
        {
            title: "Бондарь Мария Викторовна",
            text: "Специалист по перманентному макияжу (дермапигментации)",
            img: specialist1,
        },
        {
            title: "Бондарь Мария Викторовна",
            text: "Специалист по перманентному макияжу (дермапигментации)",
            img: specialist1,
        },
        {
            title: "Бондарь Мария Викторовна",
            text: "Специалист по перманентному макияжу (дермапигментации)",
            img: specialist1,
        },
    ])

    return {
        stockPersons,
        orderStock,
        setOrderStock
    }
})