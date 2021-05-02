import createStore, { State } from 'zustand';
import { api } from '../api';
import { LoginInput, SignupInput, User } from '../types';

interface AuthState extends State {
  user: User | null;
  isLoading: boolean;
  login: (loginInput: LoginInput) => Promise<void>;
  signup: (signupInput: SignupInput) => Promise<void>;
  refreshToken: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = createStore<AuthState>((set) => ({
  user: null,
  isLoading: true,

  login: async (loginInput) => {
    set({ isLoading: true });
    try {
      const user = await api.login(loginInput);
      set({ user });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  refreshToken: async () => {
    set({ isLoading: true });
    try {
      const user = await api.refreshToken();
      set({ user });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async (signupInput) => {
    set({ isLoading: true });
    try {
      const user = await api.signup(signupInput);
      set({ user });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await api.logout();
      set({ user: null });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
