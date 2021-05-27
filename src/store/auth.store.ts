import { AxiosError } from 'axios';
import create, { State } from 'zustand';
import { api } from '../api';
import { LoginInput, SignupInput, User } from '../types';

interface AuthState extends State {
  user: User | null;
  error: AxiosError | null;
  isLoading: boolean;
  isRefreshing: boolean;
  login: (loginInput: LoginInput) => Promise<void>;
  signup: (signupInput: SignupInput) => Promise<void>;
  refreshToken: () => Promise<void>;
  logout: () => Promise<void>;
  resetAuthState: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isRefreshing: true,
  error: null,

  login: async (loginInput) => {
    set({ isLoading: true, error: null });
    try {
      const user = await api.login(loginInput);
      set({ user });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  refreshToken: async () => {
    set({ isRefreshing: true });
    try {
      const user = await api.refreshToken();
      set({ user });
      // eslint-disable-next-line no-empty
    } catch (error) {
    } finally {
      set({ isRefreshing: false });
    }
  },

  signup: async (signupInput) => {
    set({ isLoading: true, error: null });
    try {
      const user = await api.signup(signupInput);
      set({ user });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await api.logout();
      set({ user: null });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },

  resetAuthState: () => set({ error: null, user: null, isLoading: false }),
}));
