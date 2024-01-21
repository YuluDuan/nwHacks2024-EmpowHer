import { create } from "zustand";

type ReactInterestState = {
  interests: any;
  updateInterests: (updatedInterests: any) => void;
};

const useFlowStore = create<ReactInterestState>((set) => ({
  interests: null,
  updateInterests: (updatedInterests: any) =>
    set(() => ({ interests: updatedInterests })),
}));

export default useFlowStore;
