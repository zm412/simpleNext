
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


class Block2 extends React.Component{

  constructor(props){
    super(props);
  }
 
  render(){
    
    return(
      <div>
    <Grid container spacing={4}>
        <Grid item xs={4}> ЛИЧНЫЙ ПРОФИЛЬ </Grid>
        <Grid item xs={7}></Grid>
    </Grid>
      
    <Grid container spacing={4}>
        <Grid item xs={6}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={this.handleClick}>
                  Главная
                </Link>
                <Link color="inherit" href="/profile" onClick={this.handleClick}>
                  Личный профиль
                </Link>
              </Breadcrumbs>
        </Grid>
   </Grid>
      </div>
    )
  }
}




module.exports = Block2;






