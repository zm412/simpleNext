
import Link from 'next/link'
import { IconButton,Grid, Button ,Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styles from '../../../styles/Home.module.scss';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Image from 'next/image';
import {useRouter} from 'next/router';


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      color: 'white',
    },
    title: {
      flexGrow: 1,
      color: 'white',
    },
    icon: {
      borderRight: '2px solid white',
    },
    
    iconPerson: {
    borderRadius: '50%',
  },
 
  }));

export default function Block1({chapter}){

  const chooseHref = chapter == 'Личный кабинет' ? '/profile' : '/auth/login';
  const classes = useStyles();
  const router = useRouter();

  const exitFunc = () => {
    sessionStorage.setItem('login', JSON.stringify({})) ;
    router.push('/auth/login', undefined, { shallow: true })

  }

  return (
    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        <Toolbar>
      <Box mr={3} align-content='flex-end' className={classes.icon}>
    <Button onClick={exitFunc}>Выход</Button>
    </Box>
      <Box mr={3} align-content='flex-end' className={classes.icon}>
    
        <IconButton edge='end' color ='inherit' className={classes.menuButton}  >
            <NotificationsNoneOutlinedIcon />
        </IconButton>

      </Box>
      <Box mr={2}>
          <Image
              src="/img/image3.png"
              alt="avatar"
              width={45}
              height={45}
              className={classes.iconPerson}
            />
    </Box>
        <Link href={chooseHref}>
          <a style={{textDecoration:'none'}}><Typography variant='h6' align='right' className={classes.title}>{chapter}</Typography> </a>
        </Link>
       
    </Toolbar>
    </Grid>

   
  )
  }










