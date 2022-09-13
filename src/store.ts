import create from "zustand";

// Zustand implementation
export interface Action{
    action:string|null,
    protocol:string|null,
    reward:string|null,
    stake:string|null
}


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
