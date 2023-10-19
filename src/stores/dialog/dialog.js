import { ref } from "vue";
import { defineStore } from "pinia";

export const useDialogStore = defineStore('dialog', ()=> {
    const recordDialog = ref(false)
    const signDialog = ref(false)
    const regisDialog = ref(false)

    const setRecordDialog = (val)=> {
        recordDialog.value = val
    }
    const setSignDialog = (val)=> {
        signDialog.value = val
    }
    const setRegisDialog = (val)=> {
        regisDialog.value = val
    }

    return {
        recordDialog,
        signDialog,
        regisDialog,
        setRecordDialog,
        setSignDialog,
        setRegisDialog
    }
}) 