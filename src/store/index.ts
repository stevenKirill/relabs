import { create } from 'zustand';

interface LoginState {
  isLoggedIn: boolean;
  setLoggedIn: () => void;
  setLoggedOut: () => void;
  socket: WebSocket | null;
  setSocket: (socket: WebSocket) => void;
}

export const useStore = create<LoginState>((set) => ({
  isLoggedIn: false,
  setLoggedIn: () => set(() => ({ isLoggedIn: true })),
  setLoggedOut: () => set(() => ({ isLoggedIn: false })),
  socket: null,
  setSocket: (socket: WebSocket) => set(() => ({ socket })),
}));
