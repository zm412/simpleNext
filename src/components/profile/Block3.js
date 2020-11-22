
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from '../../styles/Home.module.css'


class Block3 extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){



    
    return(

      <div className={styles.nameBlock}>
        <div className={styles.imgIcon}></div>
        <div className={styles.nameLine}><p>{this.props.fullName}</p></div>
      <Button href="#text-buttons"  onClick={this.props.forClick} color="primary">{this.props.buttonsName}</Button>
      </div>
    )
  }
}




module.exports = Block3;






