
let React = require('react');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreateGrid from './CreateGrid';
import ButtonSave from './ButtonSave';
import Block4 from '../Block4';


class FormBlock extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }
  
 


  render(){

    
    let inputProps = this.props.collection; 
    let list = this.props.collection.idArr.map((item, index) => <CreateGrid idEl={item} key={index}  inputProps={inputProps} />)
    let button = inputProps.regimRedact ?  <ButtonSave  closeRedact={inputProps.changeRegim} currentValue={inputProps.currentValue} dataObj={inputProps.data} /> : '';
    return(
      <form action="" method="post" >
          <Grid container spacing={4}>
            {list}
            {button}
         </Grid>

      </form>
    )
  }
}




module.exports = FormBlock;






