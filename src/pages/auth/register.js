
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';

export default function Register(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [answ, setAnsw] = useState('');
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
    .then(result => {
        setAnsw(JSON.parse(result));
        console.log(result);
      }
  )
  });

  return(
    <form method='post'>
    <p>{answ ? answ.error : ''}</p>
      <TextField
            id="login-register"
            label="Login"
            error={ answ ? answ.fields.includes('login') : false}
            defaultValue={login}
            variant="outlined"
            onChange={(e) => setLogin(e.target.value)}
          />

      <TextField
            id="register-register"
            label="Password"
            error={ answ ? answ.fields.includes('password') : false}
            defaultValue={password}
            variant="outlined"
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

      <TextField
            id="password-confirm-register"
            label="Password confirm"
            error={ answ ? answ.fields.includes('passwordConfirm') : false}
            defaultValue={passwordConfirm}
            type='password'
            variant="outlined"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
 

    <Button color="primary" onClick={() => router.push('/auth/login')}>Sing In</Button>
    <Button color="primary" onClick={handleSubmit}>Register</Button>
    </form>
  )
}
