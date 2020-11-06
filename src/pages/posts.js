
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/profile/Header';
import Block1 from '../components/profile/Block1';
import Block2 from '../components/profile/Block2';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';



export default function Home(){
  const onClickFunc = (e) => {
    
  }

  return <div className={styles.profile}>
    <Container maxWidth="lg">
    <Header />
    <Grid container spacing={4}>
        <Grid item xs={4}>ГЛАВНАЯ</Grid>
        <Grid item xs={7}></Grid>
    </Grid>
      <Block1  chapter="Личный профиль" />
 
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


