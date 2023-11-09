import { ref } from "vue";
import { defineStore } from "pinia";

export const useMoreDialogStore = defineStore("moreDialog", () => {
  const problemToggle = ref(false);
  const editProb = ref(false);
  const setProblemToggle = val =>  problemToggle.value = val
  const setEditProb = val => editProb.value = val
  
  const processToggle = ref(false);
  const editProcess = ref(false);
  const setProcessToggle = val =>  processToggle.value = val
  const setEditProcess = val => editProcess.value = val


  return {
    problemToggle,
    editProb,
    processToggle,
    editProcess,
    setProblemToggle,
    setEditProb,
    setProcessToggle,
    setEditProcess
  }
});
