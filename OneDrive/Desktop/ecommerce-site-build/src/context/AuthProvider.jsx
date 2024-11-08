import { createContext, useState } from "react";

// Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
  };
  const logOut = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
