import { defineStore } from "pinia";
import { ref } from "vue";
import cookies from "vue-cookies";
import router from '@/router/index'
import {useApiStore} from '../helpers/api'


export const useAuthStore = defineStore('auth', ()=> {
    const user = ref({})
    const apiStore = useApiStore()

    const login = async (payload) => {
        console.log(payload);
        let res = await apiStore.postAxios({
            url: 'auth/login',
            data: payload
        })
        if(res.status == 200) {
            console.log(res.data);
            router.push({name: 'dashboard'})
        }
    }

    return {
        user,
        login
    }
})

  