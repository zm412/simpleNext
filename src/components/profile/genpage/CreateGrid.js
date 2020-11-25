
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
      
     return <Grid item xs={12} sm={3} >
        <div className={styleRedact}>
          <TextField 
            label={label} 
            id={currentId} 
            error={err} 
            helperText={err ? messageErr : '' } 
            defaultValue={meaning}
            variant="outlined" 
            onChange={funcOnChange} />
        </div>
        </Grid>
        
      
    }else{
        return <div className={styles.block4Show} >
                <div className={styles.block4First}>
                  <div className={styleShow}></div>
                </div>
                <div className={styles.block4Second}>
                  <div className={styles.block4Text1}> {meaning} </div>
                </div>
              </div>
    }
  }
}




module.exports = CreateGrid;






