

let React = require('react');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import ButtonSave from '../ButtonSave';
import InputEl from './inputEl';


export default Form({collection}){

    let list = collection.idArr.map((item, index) => <InputEl idEl={item} key={index}  collection={collection} />
);
    let button = collection.regimRedact ?  <ButtonSave  closeRedact={collection.changeRegim} currentValue={collection.currentValue} funcSendInfo={collection.funcSendInfo} dataObj={collection.data}/> : '';

    return(
      <form action="" method="post" >
            {list}
            {button}

      </form>
    )
}










