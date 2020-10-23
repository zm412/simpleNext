
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';
import useFetch from '../../hooks/useFetch';
import Layout from '../../../components/layout';

export default function Login(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const router = useRouter();
  const url = '/api/' + router.query.enter;
  const [{resp, isLoading, error}, setFetch] = useFetch(url);

  const greeting = router.query.enter === 'registration' ? 'Registration' : 'Login';


  const fetchingData = () => {

    const data = { login, password, passwordConfirm };


    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    } 
    console.log(config)

    setFetch(config)
  }

  const loginButton = useCallback((e) => {
    e.preventDefault()
    router.query.enter == 'login' ? fetchingData() : router.push('/auth/login');
     });
  

  const registrationButton = useCallback((e) => {
    e.preventDefault()
    router.query.enter == 'registration' ? fetchingData() : router.push('/auth/registration');
     });
  

 // useEffect(() => {
 //   // Prefetch the dashboard page
 //   router.prefetch('/dashboard')
 // }, [])

      

  return(
  <Layout>
    <form method='post'>
    <h1>{greeting}</h1>
      <p>{resp ? resp.error : ''}</p>
      <TextField
            id="login"
            label="Login"
            defaultValue={login}
            error={ !resp ? false : !resp.fields ? false : resp.fields.includes('login')}
            variant="outlined"
            onChange={(e) => setLogin(e.target.value)}
          />
    <p>{login}</p>
      <TextField
            type='password' 
            id="password"
            error={ !resp ? false : !resp.fields ? false : resp.fields.includes('password')}
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
    <p>{password}</p>
    {
      router.query.enter === 'registration' && (

      <TextField
            id="password-confirm-register"
            label="Password confirm"
            error={ !resp ? false : !resp.fields ? false : resp.fields.includes('passwordConfirm')}
            defaultValue={passwordConfirm}
            type='password'
            variant="outlined"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
 
      )
    }

    <Button color="primary" onClick={loginButton}>Sing In</Button>
    <Button color="primary" onClick={registrationButton}>Registration</Button>
    </form>
  </Layout>
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
