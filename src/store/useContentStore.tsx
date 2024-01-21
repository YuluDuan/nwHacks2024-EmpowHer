import { create } from "zustand";

type ReactContentState = {
  content: any;
  updateContent: (updatedContent: any) => void;
};

const useFlowStore = create<ReactContentState>((set) => ({
  content: "",
  updateContent: (updatedContent: any) =>
    set(() => ({ content: updatedContent })),
}));

export default useFlowStore;
