import { create } from "zustand";

interface UserInfo {
  isLoggedIn: boolean;
  email: string;
  userId: string;

  setIsLoggedIn: (val: boolean) => void;
  setEmail: (val: string) => void;
  setUserId: (val: string) => void;
}

export default create<UserInfo>((set) => ({
  isLoggedIn: false,
  email: "",
  userId: "",

  setIsLoggedIn: (val: boolean) => {
    set({ isLoggedIn: val });
  },
  setEmail: (val: string) => {
    set({ email: val });
  },
  setUserId: (val: string) => {
    set({ userId: val });
  },
}));
