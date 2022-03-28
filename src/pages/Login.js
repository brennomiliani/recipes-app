import React, { useState } from 'react';
import validateEmail from '../helpers/validateEmail';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const MIN_PASSWORD_LENGTH = 7;

  return (
    <form>
      <input
        type="email"
        placeholder="E-mail"
        data-testid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !validateEmail(email) || password.length < MIN_PASSWORD_LENGTH }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
