
import Dialog from "@material-ui/core/Dialog";
let React = require('react');
import Grid from '@material-ui/core/Grid';
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
    <Grid container spacing={4}>
        <Grid item xs={12}>
      <Button round variant="contained" onClick={ () => this.setState({isModalOpen: true}) } color="primary">Сохранить</Button>
        </Grid>
   </Grid>
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






