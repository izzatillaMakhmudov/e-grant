import { defineStore } from "pinia";
import { ref } from "vue";

export const useCore = defineStore("core", () => {
  const lang = ref(localStorage.getItem("lang") || "uz");
  const loaderMain = ref(false);
  const toast = ref(null);
  const collapsed = ref(false);
  const isShowBurger = ref(false);
  const isError = ref(false);
  const error = ref(null);

  const setMainLoader = (load) => {
    loaderMain.value = load;
  };

  return {
    loaderMain,
    setMainLoader,
  };
});
