import { create } from "zustand";

type ReactFlowState = {
  content: any;
  updateContent: (updatedContent: any) => void;
};

const useFlowStore = create<ReactFlowState>((set) => ({
  content: "",
  updateContent: (updatedContent: any) =>
    set(() => ({ content: updatedContent })),
}));

export default useFlowStore;
