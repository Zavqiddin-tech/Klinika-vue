import { ref } from "vue";
import { defineStore } from "pinia";

export const useDialogStore = defineStore("dialog", () => {
  const recordDialog = ref(false);
  const recordSpec = ref(false);
  const signDialog = ref(false);
  const regisDialog = ref(false);
  const feedbackDialog = ref(false);
  const toggle = ref(false);
  const editToggle = ref(false);

  const setRecordDialog = (val) => (recordDialog.value = val);
  const setRecordSpec = (val) => (recordSpec.value = val);
  const setSignDialog = (val) => (signDialog.value = val);
  const setRegisDialog = (val) => (regisDialog.value = val);
  const setFeedbackDialog = (val) => (feedbackDialog.value = val);
  const setToggle = (val) => (toggle.value = val);
  const setEditToggle = (val) => (editToggle.value = val);

  return {
    recordDialog,
    recordSpec,
    signDialog,
    regisDialog,
    feedbackDialog,
    toggle,
    editToggle,
    setRecordDialog,
    setRecordSpec,
    setSignDialog,
    setRegisDialog,
    setFeedbackDialog,
    setToggle,
    setEditToggle,
  };
});
