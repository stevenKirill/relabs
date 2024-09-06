import { create } from 'zustand';

interface LoginState {
  isLoggedIn: boolean;
  setLoggedIn: () => void;
  setLoggedOut: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isLoggedIn: false,
  setLoggedIn: () => set(() => ({ isLoggedIn: true })),
  setLoggedOut: () => set(() => ({ isLoggedIn: false })),
}));
