
import Link from 'next/link'
import Head from 'next/head'
import { IconButton,Grid, Button ,Box,Typography, Container,  Breadcrumps, AppBar, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styles from '../../styles/Home.module.scss';
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
    
    iconPerson: {
    borderRadius: '50%',
  },
 
  }));

export default function Layout({ children, title = 'This is the default title', chapter }) {

  const chooseHref = chapter == 'Личный кабинет' ? '/profile' : '/auth/login';
  const classes = useStyles();
  const router = useRouter();

  console.log(chapter)
  const exitFunc = () => {
    sessionStorage.setItem('login', JSON.stringify({login: false, id: '', token: ''})) ;
    router.push('/auth/login', undefined, { shallow: true });
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    <body>
      <header>
      <AppBar position="static">

    <nav>
          <Link href="/">
            <a>LOGO</a>
          </Link>

          <Link href="/">
            <a>Home</a>
          </Link>
  
          <Box mr={3} align-content='flex-end' className={classes.icon}>
            <IconButton edge='end' color ='inherit' className={classes.menuButton}  >
              <NotificationsNoneOutlinedIcon />
            </IconButton>
          </Box>

          <Box mr={3} align-content='flex-end' className={classes.icon}>
            <a onClick={exitFunc}>Выход</a>
          </Box>


          <Box mr={2}>
            <Image src="/img/image3.png" alt="avatar" width={35} height={35} className={classes.iconPerson} />
          </Box>

              <Link href={chooseHref}>
            <a style={{textDecoration:'none'}}><Typography variant='h6' align='right' className={classes.title}>{chapter}</Typography> </a>
          </Link>

   
    </nav>
        </AppBar>
      </header>
    

    <main className={styles.main}>

      {children}

    </main>


    <footer className={styles.footer}>{'I`m here to stay'}</footer>
    </body>
 
     <style jsx>{`

      nav {
        position: fixed;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        background: lightgray;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      nav a {
        color: #fff;
        text-decoration: none;
      }

      main {
        margin-top: 60px;
        padding: 1rem;
      }

      .logo {
        background-image: url('../public/img/logo.png');
        background-repeat: no-repeat;
        width: 100px;
        height: 90%;
        margin-right: 15px;
      }
     `}
    </style>
    </>
  )
}










