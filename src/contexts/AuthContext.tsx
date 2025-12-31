import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginBackend: (username: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logoutBackend: () => Promise<void>;
  checkSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// IMPORTANT: Set this to your Flask backend URL
// For production, this should be HTTPS to avoid mixed-content issues
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://13.61.232.203';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check session with backend on load and page refresh
  const checkSession = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/session`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.authenticated && data.user) {
          setUser({ username: data.user.username || data.user.email });
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      // Network error - likely CORS or backend not reachable
      console.error('Session check failed (CORS or network issue):', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Check session on mount
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  // Login via backend - sets HttpOnly cookie
  const loginBackend = useCallback(async (username: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // After successful login, verify session with backend
        await checkSession();
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error: any) {
      console.error('Login error (CORS or network issue):', error);
      return { 
        success: false, 
        message: 'Cannot reach server. Check if backend is running with HTTPS and CORS configured.' 
      };
    }
  }, [checkSession]);

  // Logout via backend - clears HttpOnly cookie
  const logoutBackend = useCallback(async () => {
    try {
      await fetch(`${API_BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear frontend state
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      isAuthenticated: !!user, 
      loginBackend, 
      logoutBackend,
      checkSession 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
