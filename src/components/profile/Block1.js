
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


export default function Block1({chapter, resp}){

  const chooseHref = chapter == 'Личный кабинет' ? '/profile' : '/api/login';
  
    
    return <div>
              <nav>
          <Link href="/">
            <a><NotificationsNoneIcon /></a>
          </Link>
          |
          <Link href="/profile">
            <a><FaceIcon />{chapter} </a>
          </Link>
              </nav>
    
 <style jsx>{`
      nav {
        position: fixed;
        height: 60px;
        top: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
        align-items: right;
        
      }

      nav a {
        color: #fff;
        text-decoration: none;
      }
   `}
    </style>
      </div>
   
  }










