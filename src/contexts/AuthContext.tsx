import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('rewear_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Mock authentication - in real app, this would be an API call
      const mockUser: User = {
        id: email === 'admin@rewear.com' ? 'admin-1' : 'user-1',
        email,
        name: email === 'admin@rewear.com' ? 'Admin User' : 'John Doe',
        points: 150,
        role: email === 'admin@rewear.com' ? 'admin' : 'user',
        createdAt: new Date(),
      };
      
      setUser(mockUser);
      localStorage.setItem('rewear_user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Mock signup - in real app, this would be an API call
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name,
        points: 50, // Welcome bonus
        role: 'user',
        createdAt: new Date(),
      };
      
      setUser(newUser);
      localStorage.setItem('rewear_user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rewear_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
