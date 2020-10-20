
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';

export default function Register(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

   const router = useRouter()

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login,
        password,
        passwordConfirm
      })
     })
    .then(response => response.text())
      .then(result => console.log(result))
    

  }
  )
  return(
    <>
      <TextField
            id="login-register"
            label="Login"
            defaultValue={login}
            variant="outlined"
            onChange={(e) => setLogin(e.target.value)}
          />
      <TextField
            id="register-register"
            label="Password"
            defaultValue={password}
            variant="outlined"
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
      <TextField
            id="password-confirm-register"
            label="Password confirm"
            defaultValue={passwordConfirm}
            type='password'
            variant="outlined"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
 

    <Button color="primary" onClick={() => router.push('/auth/login')}>Sing In</Button>
    <Button color="primary" onClick={handleSubmit}>Register</Button>
    </>
  )


}
