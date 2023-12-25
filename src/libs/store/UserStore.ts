import { create } from "zustand";

interface UserInfo {
  isLoggedIn: boolean;
  userEmail: string;
  userToken: string;
  dateKey: string;

  setIsLoggedIn: (val: boolean) => void;
  setUserEmail: (val: string) => void;
  setUserToken: (val: string) => void;
  setDateKey: (val: string) => void;
}

// export default create<UserInfo>((set) => ({
//   isLoggedIn: false,
//   userEmail: "",
//   userId: "",

//   setIsLoggedIn: (val: boolean) => {
//     set({ isLoggedIn: val });
//   },
//   setUserEmail: (val: string) => {
//     set({ userEmail: val });
//   },
//   setUserId: (val: string) => {
//     set({ userId: val });
//   },
// }));

export const userStore = create<UserInfo>((set) => ({
  isLoggedIn: false,
  userEmail: "",
  userToken: "",
  dateKey: "",

  setIsLoggedIn: (val: boolean) => {
    set({ isLoggedIn: val });
  },
  setUserEmail: (val: string) => {
    set({ userEmail: val });
  },
  setUserToken: (val: string) => {
    set({ userToken: val });
  },
  setDateKey: (val: string) => {
    set({ dateKey: val });
  },
}));
