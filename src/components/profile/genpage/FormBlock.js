
let React = require('react');
import { borders } from '@material-ui/system';
import CreateGrid from './CreateGrid';
import ButtonSave from './ButtonSave';
import Block4 from '../Block4';
import styles from '../../../../styles/Home.module.scss';
import {Typography, Box, Button} from '@material-ui/core';


export default function FormBlock({ collection }){
     
    let {regimRedact} = collection;
    let list = collection.idArr.map((item, index) => <CreateGrid idEl={item} key={index}  collection={collection} />)
    let button = collection.regimRedact ?  <ButtonSave  closeRedact={collection.changeRegim} currentValue={collection.currentValue} dataObj={collection.data} /> : '';


    if(regimRedact){
      return <Box className={styles.block4}>
        <Box className={styles.block4Redact}>
                <form action="" method="post" >
                  <Box className={styles.block4RedactHalf}>
                    {list}
                  </Box>
                  <Box className={styles.block4RedactHalf}>
                    {button}
                  </Box>
                </form>
            </Box>
        </Box>
    }else{
      return <Box className={styles.block4}>
        <Box className={styles.block4Info}>
                <form action="" method="post" >
                    {list}
                    {button}
                </form>
            </Box>
        </Box>
    }
}










