
import Layout from '../../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Block1 from '../components/profile/Block1';
import Block2 from '../components/profile/Block2';
import { useState, useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import  jwt from 'jsonwebtoken';



export default function Dashboard({props}){

  const [isAuth, setIsAuth] = useState(false)
  console.log(isAuth)
  const openNext = props.login ? 'Личный кабинет': 'Войти в аккаунт';

//  useEffect(() => {
//    let store;
//    if(window.sessionStorage.getItem("login")){
//      store = JSON.parse(window.sessionStorage.getItem('login'));
//      setIsAuth(true)
//  }
//    
//  }, isAuth)
  const token = props.store;
  console.log(token)
  jwt.verify(token, secret, function(err, decoded) {
    if(err) console.log(err);
    console.log(decoded)
  // err
  // decoded undefined
});
  
      
  return <Layout>
    <div className={styles.profile}>
    <Container maxWidth="lg">
    <Grid container spacing={4}>
        <Grid item xs={4}>ГЛАВНАЯ</Grid>
        <Grid item xs={7}></Grid>
    </Grid>
    <Grid container spacing={4}>
      <Block1  chapter={ openNext }/>
    <p>{console.log( props )}</p>
    </Grid>
 
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

  </Layout>
}

