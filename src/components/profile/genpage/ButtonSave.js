import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fab,Dialog, IconButton,Grid, Button ,Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import jwt from 'jsonwebtoken';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialog: {
    height: '200px',
    width: '200px',
    borderRadius: '15%',

  },
  typographyStyle: {
    height: '200px',
    width: '200px',
    borderRadius: '25px',
  }

})) 



export default function ButtonSave({closeRedact, currentValue, dataObj}) {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [openErr, setOpenErr] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () =>  setOpen(true); 

  const handleClose = async () => {
    setOpen(false);
      let data = await JSON.parse( sessionStorage.getItem('login') ); 
      let verifyToken; 
         await jwt.verify(data.token, process.env.NEXT_PUBLIC_SECRET_KEY, function(err, decoded) {
           if(!err && decoded){
              //this.funcSendInfo(data.id);
              verifyToken = true;
              console.log('decoded')
           }else{
             console.log(err)
             window.location.href = '/auth/login'

           }


      });

    if(verifyToken){
          setOpenSecond(true);
            if(!dataObj.name.isError && !dataObj.email.isError && !dataObj.phoneNumber.isError){
              currentValue();
            }else{
              setOpenErr(true);
            }
    }else{
      console.log(err)
    }

  };

  const handleCloseSecond = () =>  setOpenSecond(false);

  const handleCloseErr = () => {
    setOpenErr(false);
    setOpenSecond(false);
  }


  const handleCloseModal = () =>  setOpen(false) ;

  return (
    <div>
      <Fab variant="contained" color="primary" onClick={handleClickOpen}>
       Сохранить 
      </Fab>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" className={classes.root} open={open}>

        <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>

          <Typography display='block' className={classes.typographyStyle} gutterBottom> Сохранить изменения?  </Typography>
    
          <Button autoFocus variant="contained" color="primary" onClick={handleClose} color="primary">
            Save changes
          </Button>
          <Button autoFocus variant="contained" color="primary" onClick={closeRedact} color="primary">
    Cancel
          </Button>
      </Dialog>

      <Dialog onClose={handleCloseSecond} aria-labelledby="customized-dialog-title" open={openSecond}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
          <Typography gutterBottom> Изменения сохранены </Typography>
    
          <Button autoFocus variant="contained" color="primary" onClick={handleCloseSecond} color="primary">
   Хорошо 
          </Button>
      </Dialog>
    
      <Dialog onClose={handleCloseErr} aria-labelledby="customized-dialog-title" open={openErr}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
          <Typography gutterBottom>
   Неверно введены данные. Изменения не сохранены 
        </Typography>
    
          <Button autoFocus variant="contained" color="primary" onClick={handleCloseErr} color="primary">
              Вернуться к редактированию 
          </Button>
      </Dialog>



    </div>
  )
}

