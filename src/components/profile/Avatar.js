import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));





export default function AvatarTop({thisChapter}) {
  const classes = useStyles();

  return (

    <Grid container spacing={4}>
      <Grid item xs={9}> </Grid>
      <Grid item xs={1}>
        <div className={classes.root}>
          <Avatar src="/broken-image.jpg" className={classes.orange}/>
        </div>
    </Grid>
        <Grid item xs={2}>

            <Button href="/profile" color="primary">{thisChapter}</Button>
        </Grid>
 
    </Grid>
  );
}
