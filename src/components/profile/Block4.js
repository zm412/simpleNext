
let React = require('react');
import { borders } from '@material-ui/system';
import CreateGrid from './genpage/CreateGrid';
import ButtonSave from './genpage/ButtonSave';
import styles from '../../../styles/Home.module.scss';
import { IconButton,Grid, Button ,Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ( {
  root: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    height: '250px',
    marginTop: theme.spacing(2)

  },

  paper: {
    height: '120px',
    borderRadius: '10px',
    backgroundColor: 'white',
  }
} ));


export default function Block4({ collection }){
    
    const classes = useStyles();
     
    let list = collection.idArr.map((item, index) => <CreateGrid idEl={item} key={index}  collection={collection} />)
    let button = collection.regimRedact ?  <ButtonSave  closeRedact={collection.changeRegim} currentValue={collection.currentValue} dataObj={collection.data} /> : '';


  return ( 
    < Grid spacing={4} className={classes.root}>
                <form action="" method="post" >
                    {list}
                    {button}
                </form>
    </Grid>
  )
}










