import React, {  useState } from "react";

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},

});

export const AuthContextProvider = (props) => {
  const initialState = localStorage.getItem('token')
  const [token, setToken] = useState(initialState);

  const userLoggedIn = !!token;

  const loginHandler = async (token) => {
    try {
      setToken(token);
      localStorage.setItem('token', token)
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  const logOutHandler = () =>{
    setToken(null)
    localStorage.removeItem('token')

  }
  
  
  const contextValue = {
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