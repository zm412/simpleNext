
let React = require('react');
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import { IconButton, Button ,Hidden, withWidth, Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import Image from 'next/image';




const url = '../../../public/img/image3.jpg' ;
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
    borderRadius: '10px',
    color: 'white',
    margin: theme.spacing(1),
  },

  icon: {
    borderRadius: '50%',
  },
  fullName: {
  }
  

}))


function Block3({buttonsName, forClick, fullName, ...rest}){
  const {width} = rest;
  const classes = useStyles();
  let iconButt = buttonsName == 'РЕДАКТИРОВАТЬ' ? <CreateIcon /> : <CloseIcon />  ;
    
  return ( <Toolbar className={classes.root}>
    <Box mt={2} mb={2}>
    <Grid container 
            spacing={3}
            direction="row"
            alignItems="center"
      >
      <Grid item xs={3}>
           <Image
              src="/img/image3.png"
              alt="avatar"
              width={75}
              height={75}
              className={classes.icon}
            />
      </Grid>

      <Grid item xs={7}>
          <Typography variant='h6' className={classes.fullName}>{fullName}</Typography>
      </Grid>

      <Grid item xs={2} justify='right' className={classes.button} >
        <Button onClick={forClick} color="primary" startIcon={iconButt} >
          <Hidden xsDown>{buttonsName}</Hidden>
        </Button>
      </Grid>

    </Grid>
    </Box>
    </Toolbar>
    )
  }



Block3.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Block3);






