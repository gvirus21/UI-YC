import create from "zustand";


export interface SasiBlockData {
  id: number;
  action: string | null;
  protocol: string | null;
  selection1: string | null;
  selection2: string | null;
}

const useSasiBlocks = create<{ 
    sasiBlocks: SasiBlockData[];
    addSasiBlock:(block:SasiBlockData)=>void;
    block:SasiBlockData;
}>((set) => ({
  sasiBlocks: [{id:0,action:"Stake",protocol:"PancakeSwap",selection1:"Cake",selection2:"Cake"}],
  block:{id:0,action:"Stake",protocol:"PancakeSwap",selection1:"Cake",selection2:"Cake"},
  addSasiBlock: (block: SasiBlockData) =>
    set((state) => ({
      ...state,
      sasiBlocks: [
        ...state.sasiBlocks,
        {
          id: state.sasiBlocks.length,
          action: block.action,
          protocol: block.protocol,
          selection1: block.selection1,
          selection2: block.selection2,
        },
      ],
    })),
}));

export default useSasiBlocks;