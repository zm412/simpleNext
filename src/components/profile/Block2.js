
let React = require('react');
import Link from 'next/link'
import styles from '../../../styles/Home.module.scss';
import { Button, Grid ,Box,Typography, Container,  Breadcrumbs, AppBar, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ( {
  root: {
    flexGrow: 1,
  },
  main:{
    flexGrow: 1,
  },
  title: {
    marginLeft: 1,
    flexGrow: 1,
    color: 'white'
  },
  bread: {
    color: 'white',
    underline: 'hover'
  }


} )) 

export default function Block2(){

  const classes = useStyles();
 
    
  return (
    <Container maxWidth='lg' className={classes.main}>
        <Typography variant='h6' className={classes.title}>ЛИЧНЫЙ ПРОФИЛЬ</Typography>
           <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
            <Link href="/" >
              <Typography className={classes.bread}> Главная </Typography>
            </Link>
                <Typography className={classes.bread}>Личный профиль</Typography>
            </Breadcrumbs>
                
    </Container>
    )
}










