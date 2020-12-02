
let React = require('react');
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import { IconButton, Button ,Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import Image from 'next/image';




const url = '../../../public/img/image3.jpg' ;
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
    borderRadius: '10px',
    color: 'white',
    border: '1px solid black',
    marginTop: theme.spacing(2),
    marginButtom: theme.spacing(2),
    height: '130px',
  },

  paper: {
    padding: theme.spacing(2),
    width: '50%',
  },

  button: {
    textAlign: 'right'
  },

  icon: {
    borderRadius: '50%',
    verticalAlign: 'middle',
    padding: theme.spacing(2)
  }
  

}))


export default function Block3({buttonsName, forClick, fullName}){

  const classes = useStyles();
  let iconButt = buttonsName == 'РЕДАКТИРОВАТЬ' ? <CreateIcon /> : <CloseIcon />  ;
    
  return ( <Container maxWidth='lg'  className={classes.root}>
    <Toolbar>
      <Box mr={3}>
           <Image
              src="/img/image3.png"
              alt="Picture of the author"
              width={75}
              height={75}
              className={classes.icon}
            />
    </Box>
      <Box mr={3} className={classes.paper}><Typography variant='h4'>{fullName}</Typography></Box>
      <Box item mr={3} className={classes.button} >
        <Button href="#text-buttons"  onClick={forClick} color="primary" startIcon={iconButt} >{buttonsName}</Button>
      </Box>
    </Toolbar>
    </Container>
    )
  }




module.exports = Block3;






