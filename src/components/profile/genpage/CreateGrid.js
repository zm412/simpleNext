
let React = require('react');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from '../../../../styles/Home.module.scss';


class CreateGrid extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  
  render(){

    let {data, idArr, regimRedact, funcOnChange} = this.props.inputProps;
    let currentId = this.props.idEl;
    let defineProfile;
    let label = data[currentId].label;
    let meaning = data[currentId].meaning;
    let temp = data[currentId].temp;
    let err = data[currentId].isError;
    let messageErr = data[currentId].messageErr;
    let styleShow = styles[data[currentId].classNameShow] ;
    let styleRedact = styles[data[currentId].classNameRedact] ;

    if(regimRedact){
      
     return <div className={styles.block4ThirdPart}>
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
        </div>
        
      
    }else{
        return <div className={styles.block4InfoShow} >
                          <div className={styles.block4InfoFirst}>
                            <div className={styleShow}></div>
                          </div>
                          <div className={styles.block4InfoSecond}>
                            <div className={styles.block4Text1}> {meaning} </div>
                          </div>
                  </div>
    }
  }
}




module.exports = CreateGrid;






