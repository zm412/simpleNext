
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import styles from '../../../styles/Home.module.scss';


export default function Block1({chapter}){

  const chooseHref = chapter == 'Личный кабинет' ? '/profile' : '/auth/login';
  
    
    return <div className={styles.block1} >

              <Link href="/">
                <a className={styles.block1Icon1}></a>
              </Link>
              <div className={styles.block1LineVertical} ></div>
              <Link href={chooseHref}>
                <a className={styles.block1Icon2}></a>
              </Link>
              <Link href={chooseHref}>
                <a className={styles.block1Text}>{chapter} </a>
              </Link>
       
      </div>
   
  }










