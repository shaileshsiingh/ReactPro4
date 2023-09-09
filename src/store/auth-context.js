import React, { useState } from "react";

const AuthContext = React.createContext({
  token: '',
  email: '', 
  isLoggedIn: false,
  logIn: (token, email) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const initialState = localStorage.getItem('token');
  
  const [token, setToken] = useState(initialState);
  const [email, setEmail] = useState('');

  const userLoggedIn = !!token;

  const loginHandler = async (token, userEmail) => {
    try {
      setToken(token);
      setEmail(userEmail);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const logOutHandler = () => {
    setToken(null);
    setEmail(''); 
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userLoggedIn,
    logIn: loginHandler,
    logOut: logOutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
