import { create } from "zustand";

type ReactInterestState = {
  interests: any;
  updateInterests: (updatedInterests: any) => void;
};

const useFlowStore = create<ReactInterestState>((set) => ({
  interests: [],
  updateInterests: (updatedInterests: any) =>
    set(() => ({ interests: updatedInterests })),
}));

export default useFlowStore;
