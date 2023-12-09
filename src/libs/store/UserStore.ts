import { create } from "zustand";

interface UserInfo {
  isLoggedIn: boolean;
  email: string;

  setIsLoggedIn: (val: boolean) => void;
  setEmail: (val: string) => void;
}

export default create<UserInfo>((set) => ({
  isLoggedIn: false,
  email: "",

  setIsLoggedIn: (val: boolean) => {
    set({ isLoggedIn: val });
  },
  setEmail: (val: string) => {
    set({ email: val });
  },
}));
