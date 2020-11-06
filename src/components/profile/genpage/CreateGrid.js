
let React = require('react');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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

    if(regimRedact){
      
     return <Grid item xs={12} sm={3}>
          <TextField 
            label={label} 
            id={currentId} 
            error={err} 
            helperText={err ? messageErr : '' } 
            defaultValue={temp}
            variant="outlined" 
            onChange={funcOnChange} />
        </Grid>
        
      
    }else{
        return <Grid item xs={12}>,
                  <p> {meaning} </p>,
                  <p> {console.log(data[currentId].isError)} </p>,
              </Grid>
    }
  }
}




module.exports = CreateGrid;






