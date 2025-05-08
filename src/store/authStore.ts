import { create } from 'zustand';
import { AuthState } from '../types/auth';

const mockUser = {
  id: '1',
  name: 'Demo User',
  role: 'operator' as const,
  email: 'demo@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  
  login: async () => {
    set({ user: mockUser, isAuthenticated: true });
  },

  register: async () => {
    set({ user: mockUser, isAuthenticated: true });
  },

  logout: async () => {
    set({ user: null, isAuthenticated: false });
  },
}));