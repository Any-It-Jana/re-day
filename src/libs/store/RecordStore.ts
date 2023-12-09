import { create } from "zustand";

interface RecordStore {
  dateKey: string;

  setDateKey: (val: string) => void;
}

export default create<RecordStore>((set) => ({
  dateKey: "",

  setDateKey: (val: string) => {
    set({ dateKey: val });
  },
}));
