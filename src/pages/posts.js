
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Block1 from '../components/profile/Block1';
import Block2 from '../components/profile/Block2';
import { useState, useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
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

 
      
  return <div className={styles.profile}>
    <Container maxWidth="lg">
    <Grid container spacing={4}>
        <Grid item xs={4}>ГЛАВНАЯ</Grid>
        <Grid item xs={7}></Grid>
    </Grid>
      <Block1  chapter={ openNext }/>
 
    <Grid container spacing={4}>
        <Grid item xs={6}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                  Главная
                </Link>
              </Breadcrumbs>
        </Grid>
   </Grid>

</Container>
    </div>
}


