
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
    let style = styles[data[currentId].className] ;
    console.log(style)

    if(regimRedact){
      
     return <Grid item xs={12} sm={3} className={style} >
          <TextField 
            label={label} 
            id={currentId} 
            error={err} 
            helperText={err ? messageErr : '' } 
            defaultValue={meaning}
            variant="outlined" 
            onChange={funcOnChange} />
        </Grid>
        
      
    }else{
        return <div className={styles.infoBlock} >
                  <p>{label}</p>
                  <p> {meaning} </p>
                  <p> {console.log(data[currentId].isError)} </p>
              </div>
    }
  }
}




module.exports = CreateGrid;






