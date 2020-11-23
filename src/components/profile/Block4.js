
import Dialog from "@material-ui/core/Dialog";
let React = require('react');
import Button from '@material-ui/core/Button';


class Block4 extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false
    }
  }
  
  render(){



    
    return(
    <div>
      <Button round variant="contained" onClick={ () => this.setState({isModalOpen: true}) } color="primary">Сохранить</Button>
            <Dialog
              title="Сохранить измеения?"
              open={this.state.isModalOpen}
              onRequesClose={() => this.setState({isModalOpen:false})}
              >
              Actionslkjljljl ljlsjdf l;kjsdfjsdflj sd;flkjsd f;lksjdfo
              </Dialog>
    </div>       
    )
  }
}




module.exports = Block4;






