import React from 'react';
import Auth from './Auth';

export default function LoginView(props) {

  function login(event)
  {    
    event.preventDefault();    
    Auth.authenticate(event.target['username'].value, event.target['password'].value)
      .then(result =>
        {
          props.loginSuccess();
          props.history.push(props.redirectPathOnSuccess);
        })
      .catch(() => {
        props.loginFail();
      })
    
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
      Use your UserName and Password to Login 
      </div>

      <form onSubmit={ login }>
        <div>
          Username <input type="text" name="username" />
        </div>
        <div>
          Password <input type="text" name="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>



    </div>
  )
}