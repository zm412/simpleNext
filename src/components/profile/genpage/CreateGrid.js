
let React = require('react');
import { borders } from '@material-ui/system';
import styles from '../../../../styles/Home.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, IconButton, Button ,Box,Typography, Container,  Breadcrumps,TextField, AppBar, Toolbar} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyle = makeStyles((theme) => ({
  root: {
  },
  paper: {
    height: '120px',
    display: 'flex',
    borderRadius: '5px',
    backgroundColor: 'white',
    borderLeft: '2px solid #01BDA7',
    marginTop: theme.spacing(2),
  },

  smallPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  field: {
    height: '100%',
    width: '100%',
  },
  icon: {
    color: '#01BDA7',
    paddingLeft: theme.spacing(1)
  }
  



}))

export default function CreateGrid({collection, idEl}){


  const classes = useStyle();

    let {data, idArr, funcOnChange, regimRedact} = collection;
    let currentId = idEl;
    let defineProfile;
    let label = data[currentId].label;
    let meaning = data[currentId].meaning;
    let temp = data[currentId].temp;
    let err = data[currentId].isError;
    let messageErr = data[currentId].messageErr;
    let styleRedact = styles[data[currentId].classNameRedact] ;
  
  const iconSign = idEl == 'name' ? <AssignmentIndIcon /> : idEl == 'email' ? <AlternateEmailIcon /> : <PhoneIcon />  ;

    if(regimRedact){
     return <Grid item xs={12} md={4} alignContent='center' className={classes.paper}>
          <Box mr={3} className={classes.icon}>{iconSign}</Box>
            <TextField
                label={label} 
                id={currentId} 
                error={err} 
                helperText={err ? messageErr : '' } 
                size="normal"
                defaultValue={meaning}
                variant="outlined" 
                onChange={funcOnChange} />
       </Grid> 
      
    }else{
      return <Grid xs={12} alignItems={'center'} className={classes.paper}  >
        <Box mr={3} className={classes.icon}>{iconSign}</Box>
              <Typography variant='h6'> {meaning} </Typography>
        </Grid>
    }
  }










