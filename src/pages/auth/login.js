
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';
import useFetch from '../../hooks/useFetch';

export default function Login(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [{resp, isLoading, error}, setFetch] = useFetch('/api/login');
  

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setFetch({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({login, password})
    })
    
     });
  

 // useEffect(() => {
 //   // Prefetch the dashboard page
 //   router.prefetch('/dashboard')
 // }, [])

      

  return(
    <form method='post'>
      <p>{resp ? resp.error : ''}</p>
      <TextField
            id="login"
            label="Login"
            defaultValue={login}
            error={ resp ? resp.fields.includes('login') : false}
            variant="outlined"
            onChange={(e) => setLogin(e.target.value)}
          />
    <p>{login}</p>
      <TextField
            type='password' 
            id="password"
            error={ resp ? resp.fields.includes('password') : false}
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
    <p>{password}</p>
    <Button color="primary" onClick={handleSubmit}>Sing In</Button>
    <Button color="primary" onClick={() => router.push('/auth/register') }>Register</Button>
    </form>
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
