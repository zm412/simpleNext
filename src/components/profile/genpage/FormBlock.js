
let React = require('react');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreateGrid from './CreateGrid';
import ButtonSave from './ButtonSave';
import Block4 from '../Block4';
import styles from '../../../../styles/Home.module.scss';


class FormBlock extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }


  render(){

     
    let inputProps = this.props.collection; 
    let {regimRedact} = inputProps;
    let list = this.props.collection.idArr.map((item, index) => <CreateGrid idEl={item} key={index}  inputProps={inputProps} />)
    let button = inputProps.regimRedact ?  <ButtonSave  closeRedact={inputProps.changeRegim} currentValue={inputProps.currentValue} dataObj={inputProps.data} /> : '';


    if(regimRedact){
      return <div className={styles.block4}>
        <div className={styles.block4Redact}>
                <form action="" method="post" >
                  <div className={styles.block4RedactHalf}>
                    <div className={styles.block4RedactThirdPart}>
                    {list}
                    </div>
                  </div>
                  <div className={styles.block4RedactHalf}>
                    {button}
                  </div>
                </form>
            </div>
        </div>
    }else{
      return <div className={styles.block4}>
        <div className={styles.block4Info}>
                <form action="" method="post" >
                    {list}
                    {button}
                </form>
            </div>
        </div>
    }
}
}




module.exports = FormBlock;






