import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebarStore", {
  state: () => ({
    isSidebarOpen: true,
  }),
  actions: {
    tuggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
});
