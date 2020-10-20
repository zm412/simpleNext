
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';

export default function Login({response}){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

   fetch('/api/login',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({login, password})
  } )
    .then(response => response.text())
      .then(result => console.log(result))

    
    
     })
  

 // useEffect(() => {
 //   // Prefetch the dashboard page
 //   router.prefetch('/dashboard')
 // }, [])

      

  return(
    <>
    <form method='post'>
      <TextField
            id="login-login"
            label="Login"
            defaultValue={login}
            variant="outlined"
            onChange={(e) => setLogin(e.target.value)}
          />
    <p>{login}</p>
      <TextField
            type='password' 
            id="password-login"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
    <p>{password}</p>
    <Button color="primary" onClick={handleSubmit}>Sing In</Button>
    <Button color="primary" onClick={() => router.push('/auth/register') }>Register</Button>
    </form>

    </>
  )

}


//Login.getInitialProps = async (ctx) => {
//
//  console.log(ctx)
//if(marker){
//  const response = await fetch('http://jsonplaceholder.typicode.com/posts',{
//    method: 'POST',
//    mode: "no-cors",
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({login, password, passwordConfirm})
//  } )
//    
//    
//  console.log(login, password)
//
//  return {
//    response
//  }
//}
//}
