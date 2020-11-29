
let React = require('react');
import Grid from '@material-ui/core/Grid';
import styles from '../../../styles/Home.module.scss';
import {makeStyles} from '@material-ui/core/styles';
import { IconButton, Button ,Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';




const url = '../../../public/img/image3.jpg' ;
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
    borderRadius: '10px',
    color: 'white',
    border: '1px solid black',
    marginTop: theme.spacing(2),
    height: '130px',
  },


}))


export default function Block3({buttonsName, forClick, fullName}){

  const classes = useStyles();
  let iconButt = buttonsName == 'РЕДАКТИРОВАТЬ' ? <CreateIcon /> : <CloseIcon />  ;
    
  return ( <Container maxWidth='lg'  className={classes.root}>
    <Grid direction='row' justify='flex-end' alignItems='right'>
    <Grid item className={styles.block3Icon1}></Grid>
    <Grid item className={styles.block3Text1}>{fullName}</Grid>
        <Grid item>
          <Button href="#text-buttons"  onClick={forClick} color="primary" startIcon={iconButt} >{buttonsName}</Button>
        </Grid>

    </Grid>
    </Container>
    )
  }




module.exports = Block3;






