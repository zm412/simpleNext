
import styles from '../../styles/Home.module.scss'
import Block1 from '../components/profile/Block1';
import Block2 from '../components/profile/Block2';
import { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import Link from 'next/link'
import {Breadcrumbs, Container} from  '@material-ui/core';
import jwt from 'jsonwebtoken'



export default function Home(){

  const [isAuth, setIsAuth] = useState(false);
  const [openNext, setOpenNext] = useState('Войти в аккаунт');
  

   useEffect( () => {
      let data = JSON.parse( sessionStorage.getItem('login') ); 
 
       jwt.verify(data.token, process.env.NEXT_PUBLIC_SECRET_KEY, function(err, decoded) {
         if(!err && decoded){
           setOpenNext('Личный кабинет');
            console.log(decoded)
         }
    });

   }, []);

 
      
  return <Container maxWidth='lg' className={styles.profile}>
            <Block1  chapter={ openNext }/>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                  Главная
                </Link>
              </Breadcrumbs>
          </Container>
}


