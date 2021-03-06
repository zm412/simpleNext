
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useCallback } from 'react';
import {useRouter} from 'next/router';
import useFetch from '../../hooks/useFetch';
import Layout from '../../../components/layout';
import InputEl from '../../components/parts/inputEl'
import jwt from 'jsonwebtoken'

export default function Login(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const url = '/api/' + router.query.enter;
  const [{resp, isLoading, error}, setFetch] = useFetch(url);
  const [stateRegim, setStateRegim] = useState(router.query.enter);
  const [regimRegister, setRegimRegister] = useState(false);
  const [statusResp, setStatusResp] = useState(false)
  const [isAuthorizated, setIsAuthorizated] = useState(false);

    //let store1 = JSON.parse(sessionStorage.getItem('login'));
    //console.log(store1)
    //console.log(store1.login)

    useEffect(() => {
    if(resp != null && resp.ok){

       jwt.verify(resp.token, process.env.NEXT_PUBLIC_SECRET_KEY, function(err, decoded) {
         if(!err && decoded){
            sessionStorage.setItem('login', JSON.stringify({login: true, id: resp.dataId, token: resp.token})) ;
            setIsAuthorizated(true);
            router.push('/posts')
           console.log(decoded)
           console.log(isAuthorizated)
         }
    });
    }
    
  }, [resp])


  const greeting = router.query.enter === 'registration' ? 'Registration' : 'Login';
  let dataId, status;

   useEffect(() => {
    router.push('/auth/login', undefined, { shallow: true })
  }, []);


  const fetchingData = () => {

    const data = router.query.enter === 'login'? {login, password} : { login, password, passwordConfirm, name, email, phoneNumber };
    console.log(data)


    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    } 

    setFetch(config)


  }

   
  useEffect(() => {

    router.query.enter == 'registration' ? setRegimRegister(true) : setRegimRegister(false);
    
  }, [router.query.enter]);


  const loginButton = useCallback((e) => {
    e.preventDefault()
    router.query.enter == 'login' ?  fetchingData(): router.push('/auth/login');
     });
  

  const registrationButton = useCallback((e) => {
    e.preventDefault()
    router.query.enter == 'registration' ?  fetchingData()  : router.push('/auth/registration');
     });
 
  const onChangeValue = (e) => {
    e.preventDefault()
    let key = 'set' + e.target.id + '("' + e.target.value + '")';
    eval(key);
  }

    let info = {
          Login: {
          label: 'Логин',
          isError: !resp ? false : !resp.fields ? false : resp.fields.includes('login'),

        },
        Password:{
          label: 'Пароль',
          isError: !resp ? false : !resp.fields ? false : resp.fields.includes('password')
        },
        PasswordConfirm:{
          label: 'Подтверждение пароля',
          isError: !resp ? false : !resp.fields ? false : resp.fields.includes('passwordConfirm')
        },
        Name: { 
          label: "Имя",
          isError: false 
        },
        Email: {
          label: "Email",
          isError: false 
        },
        PhoneNumber:{
          label: "Номер телефона",
          isError: false 
        }
      }

    let idArr = !regimRegister ? ['Login', 'Password'] : ['Login', 'Password', 'PasswordConfirm', 'Name', 'Email', 'PhoneNumber'];

    let collection = {data: info, response: resp, idArr: idArr, regimRegister: regimRegister, funcOnChange: onChangeValue};
   
    let list = idArr.map((item, index) => <InputEl idEl={item} key={index}  collection={collection} />)

  return(
  <Layout>
    <form method='post'>
    <h1>{greeting}</h1>
      <p>{resp ? resp.message : ''}</p>

      {list}
    
    <Button color="primary" onClick={loginButton}>Sing In</Button>
    <Button color="primary" onClick={registrationButton}>Registration</Button>
    </form>
      
  </Layout>
  )
  

}


//Login.getInitialProps = async (ctx) => {
//
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
//
//  return {
//    response
//  }
//}
//}

