import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('pryme_token'));
  const [username, setUsername] = useState(localStorage.getItem('pryme_admin'));

  const login = (tok, user) => {
    localStorage.setItem('pryme_token', tok);
    localStorage.setItem('pryme_admin', user);
    setToken(tok);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem('pryme_token');
    localStorage.removeItem('pryme_admin');
    setToken(null);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ token, username, login, logout, isAdmin: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
