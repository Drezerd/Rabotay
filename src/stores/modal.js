import { defineStore } from "pinia";

export const useModalData = defineStore("modal", {
  state: () => ({
    isActive: false,
    type: null,
    text: null,
  }),
  actions: {
    activateModal(text, type) {
      this.text = text;
      this.isActive = true;
      this.type = type;

      setTimeout(() => {
        this.isActive = false;
      }, 2500);
    },
  },
});
