import { createContext, useContext, useState, useEffect } from 'react';
import api, { csrf } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await api.get('/user');
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    await csrf();
    const res = await api.post('/login', { email, password });
    setUser(res.data.user);
    return res.data;
  };

  const register = async (name, email, password, password_confirmation) => {
    await csrf();
    const res = await api.post('/register', { name, email, password, password_confirmation });
    setUser(res.data.user);
    return res.data;
  };

  const logout = async () => {
    await api.post('/logout');
    setUser(null);
  };

  const updateProfile = async (data) => {
    const res = await api.put('/profile', data);
    setUser(res.data.user);
    return res.data;
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, register, logout, fetchUser, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
