import { useState, useRef, useContext } from 'react';
import classes from './Login.module.css';
import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  let history = useNavigate()

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    try {
      const response = await fetch(
        isLogin
          ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSsp6vGK1Grj3LZ0kRt9Dj-OX_budM8ZM'
          : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSsp6vGK1Grj3LZ0kRt9Dj-OX_budM8ZM',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        alert(data.error.message )
      }
      authCtx.logIn(data.idToken)
      history('/products')
      console.log(data)
      setIsLogin(true)
      

    } catch (error) {
      console.error(error);
      alert('An error occurred.')
    }
  };


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
        <button>
              {isLogin ? 'Login' : 'Create a new account'}
            </button>
          
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;

 


//AIzaSyCipmPxx-C8SxvVI6SQNJ1aChk38b5Z7n0

 


//AIzaSyCSsp6vGK1Grj3LZ0kRt9Dj-OX_budM8ZM