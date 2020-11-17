
let React = require('react');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Button from '@material-ui/core/Button';


export default function InputEl ({collection, idEl}){

    let {data, idArr, regimRedact, funcOnChange} = collection;
    let label = data[idEl].label;
    let meaning = data[idEl].meaning;
    let temp = data[idEl].temp;
    let err = data[idEl].isError;
  console.log(meaning, 'meaning')

      
     return <TextField 
                label={label} 
                id={idEl} 
                error={err} 
                defaultValue={meaning}
                variant="outlined" 
                onChange={funcOnChange} />
            

}










