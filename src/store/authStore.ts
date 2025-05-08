import { create } from 'zustand';

type AuthStore = {
  user: null | { id: string; name: string; email: string };
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Ошибка входа');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      set({ 
        user: data.user,
        isAuthenticated: true,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Ошибка входа',
        isLoading: false 
      });
      throw error;
    }
  },

  register: async (name, email, password) => {
  set({ isLoading: true, error: null });
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json().catch(() => {
      throw new Error('Неверный формат ответа сервера');
    });

    if (!response.ok) {
      throw new Error(data.error || 'Ошибка регистрации');
    }

    set({ isLoading: false });
    return data;

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Неизвестная ошибка';
    set({ error: message, isLoading: false });
    throw error;
  }
},

  logout: () => {
    localStorage.removeItem('token');
    set({ 
      user: null,
      isAuthenticated: false 
    });
  }
}));