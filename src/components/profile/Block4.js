
let React = require('react');
import { borders } from '@material-ui/system';
import CreateGrid from './genpage/CreateGrid';
import ButtonSave from './genpage/ButtonSave';
import styles from '../../../styles/Home.module.scss';
import { IconButton,Grid, Button ,Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ( {
  root: {
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(1),
    backgroundSize:'cover',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    marginTop: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  paper: {
    margin: theme.spacing(2),
    backgroundColor: 'white',
    textAlign: 'center',
  },
} ));


export default function Block4({ collection }){
    
  const classes = useStyles();

  const getWrap = (listOrder) => collection.regimRedact ? <Box className={classes.paper}> {listOrder} </Box> : listOrder ; 
     
    let list = collection.idArr.map((item, index) => <CreateGrid idEl={item} key={index}  collection={collection} />)
    let button = collection.regimRedact ?  <ButtonSave  closeRedact={collection.changeRegim} currentValue={collection.currentValue} dataObj={collection.data} /> : '';
    let checkedList = getWrap(list);


  return ( <Container maxWidth='lg'>
    <Grid container spacing={3} className={classes.root}>
                    {list}
    {
      button && (
          <Grid item xs={12} md={5} alignItems='center' className={classes.paper}>
                          {button}
          </Grid>
      )
    }
    </Grid>
    </Container>
  )
}










