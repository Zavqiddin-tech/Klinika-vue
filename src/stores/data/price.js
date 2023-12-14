import {ref} from 'vue'
import {defineStore} from 'pinia'
import { useApiStore } from "@/stores/admin/helpers/api";


export const usePriceStore = defineStore('price', ()=> {


    const api = useApiStore()


    const get_all_price = async () => {
        return await api.getAxios({
            url: `serviceprice/front`
        })
    }

    return {
        get_all_price
    }


})