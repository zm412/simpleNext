
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from '../../../styles/Home.module.scss';


class Block3 extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){

    let secondButtClass = this.props.buttonsName == 'РЕДАКТИРОВАТЬ' ? styles.button2 : styles.button3;
    
    return(

      <div className={styles.block3}>
        <div className={styles.block3Icon1}></div>
        <div className={styles.block3Text1}>{this.props.fullName}</div>
        <div className={styles.block3Button1}>
          <Button href="#text-buttons"  className={styles.button1} onClick={this.props.forClick} color="primary">{this.props.buttonsName}</Button>
        </div>

        <div className={styles.block3Button2}>
          <Button  onClick={this.props.forClick}><div className={secondButtClass}></div></Button>
        </div>
      </div>
    )
  }
}




module.exports = Block3;






