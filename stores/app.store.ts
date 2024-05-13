import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isProcessing: true as boolean,
    uploadedNotePath: null as any,
    hiddenPageIndexes: [] as number[],
    selectedCombineOption: "" as string,
    isConvertBlackToWhite: false as boolean,
    triggerAction: null as any,
  }),
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}