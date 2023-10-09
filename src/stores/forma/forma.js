import { ref } from "vue";
import { defineStore } from "pinia";

export const useFormaStore = defineStore("forma", () => {
  const switchForm = ref(false);
  const buttonForm = ref(true);

  const setSwitchForm = (val) => {
    if (val) {
      buttonForm.value = false;
    } else {
      buttonForm.value = true;
    }
  };

  return {
    switchForm,
    buttonForm,
    setSwitchForm,
  };
});
