export interface User {
  id: string;
  name: string;
  role: 'admin' | 'operator' | 'medical' | 'engineer';
  email: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  register: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}