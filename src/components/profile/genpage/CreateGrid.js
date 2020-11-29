
let React = require('react');
import { borders } from '@material-ui/system';
import styles from '../../../../styles/Home.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, TextField, Button} from '@material-ui/core';


export default function CreateGrid({collection, idEl}){

    let {data, idArr, regimRedact, funcOnChange} = collection;
    let currentId = idEl;
    let defineProfile;
    let label = data[currentId].label;
    let meaning = data[currentId].meaning;
    let temp = data[currentId].temp;
    let err = data[currentId].isError;
    let messageErr = data[currentId].messageErr;
    let styleShow = styles[data[currentId].classNameShow] ;
    let styleRedact = styles[data[currentId].classNameRedact] ;

    if(regimRedact){
      
     return <Box className={styles.block4ThirdPart}>
        <TextField
            label={label} 
            id={currentId} 
            error={err} 
            helperText={err ? messageErr : '' } 
            size="normal"
            defaultValue={meaning}
            className={styles.block4TextField}
            variant="outlined" 
            onChange={funcOnChange} />
        </Box>
        
      
    }else{
        return <Box className={styles.block4InfoShow} >
                          <Box className={styles.block4InfoFirst}>
                            <Box className={styleShow}></Box>
                          </Box>
                          <Box className={styles.block4InfoSecond}>
                            <Typography variant='h6'> {meaning} </Typography>
                          </Box>
                  </Box>
    }
  }










