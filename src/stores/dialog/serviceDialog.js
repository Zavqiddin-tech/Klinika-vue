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

  const indiToggle = ref(false)
  const editIndi = ref(false)
  const setIndiToggle = val => indiToggle.value = val
  const setEditIndi = val => editIndi.value = val
  
  const quesToggle = ref(false)
  const editQues = ref(false)
  const setQuesToggle = val => quesToggle.value = val
  const setEditQues = val => editQues.value = val

  const pricesToggle = ref(false)
  const editPrices = ref(false)
  const setPricesToggle = val => pricesToggle.value = val
  const setEditPrices = val => editPrices.value = val
  

  return {
    problemToggle,
    editProb,
    processToggle,
    editProcess,
    indiToggle,
    editIndi,
    quesToggle,
    editQues,
    pricesToggle,
    editPrices,
    setProblemToggle,
    setEditProb,
    setProcessToggle,
    setEditProcess,
    setIndiToggle,
    setEditIndi,
    setQuesToggle,
    setEditQues,
    setPricesToggle,
    setEditPrices,
  }
});
