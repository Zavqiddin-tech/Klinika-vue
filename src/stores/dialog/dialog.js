import { ref } from "vue";
import { defineStore } from "pinia";

export const useDialogStore = defineStore("dialog", () => {
  const recordDialog = ref(false);
  const signDialog = ref(false);
  const regisDialog = ref(false);
  const feedbackDialog = ref(false);

  const setRecordDialog = (val) => {
    recordDialog.value = val;
  };
  const setSignDialog = (val) => {
    signDialog.value = val;
  };
  const setRegisDialog = (val) => {
    regisDialog.value = val;
  };
  const setFeedbackDialog = (val) => {
    feedbackDialog.value = val;
  };

  return {
    recordDialog,
    signDialog,
    regisDialog,
    feedbackDialog,
    setRecordDialog,
    setSignDialog,
    setRegisDialog,
    setFeedbackDialog,
  };
});
