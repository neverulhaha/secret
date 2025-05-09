import { create } from 'zustand';

interface AuthState {
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: null,
  isAuthenticated: false,

register: async (name, email, password) => {
  set({ isLoading: true, error: null });
  try {
    const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/register`, 
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  }
);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Ошибка регистрации');
    }

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Неизвестная ошибка';
    set({ error: message });
    throw error;
  } finally {
    set({ isLoading: false });
  }
},

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      throw new Error(data.error || 'Ошибка входа');
    }

    set({ isAuthenticated: true });
  } catch (error) {
      const message = error instanceof Error ? error.message : 'Неизвестная ошибка';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({ isAuthenticated: false });
  }
}));