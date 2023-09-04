import React, { useState } from "react";

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},
  

});

export const AuthContextProvider = (props) => {
  const initialState = localStorage.getItem('token')
  const [token, setToken] = useState(initialState);
  const [email, setEmail] = useState('')

  const userLoggedIn = !!token;

  const loginHandler = async (token, email) => {
    try {
      setToken(token);
      setEmail(email); // Store the user's email
      localStorage.setItem('token', token);
      localStorage.setItem('email', email); // Store the user's email in localStorage
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const logOutHandler = () =>{
    setToken(null)
    localStorage.removeItem('token')

  }
  const contextValue = {
    email : email,
    token: token,
    isLoggedIn: userLoggedIn,
    logIn: loginHandler,
    logOut : logOutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;