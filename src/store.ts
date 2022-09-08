import create from "zustand";

// Zustand implementation

type Store = {
  vaultAction: string;
  updateAction: (text: string) => void;
};

const useStore = create<Store>((set) => ({
  vaultAction: "Stake token",
  updateAction(text: string) {
    set((state) => ({
      ...state,
      vaultAction:text,
    }));
  },
}));

export default useStore;
