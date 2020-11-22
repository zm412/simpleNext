
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import styles from '../../../styles/Home.module.scss';


class Block2 extends React.Component{

  constructor(props){
    super(props);
  }
 
  render(){
    
    return(
      <div className={styles.block2}>
        <div className={styles.block2Text1}>ЛИЧНЫЙ ПРОФИЛЬ</div>
        <div className={styles.block2Text2}>
            <Link color="inherit" href="/">
                <a> Главная / </a>
            </Link>
              
            <Link color="inherit" href="/profile">
                <a>Личный профиль</a>
            </Link>
        </div>
    </div>
    )
  }
}




module.exports = Block2;






