
import ProfileVers from '../components/profile/genpage/ProfileVers';
import Block3 from '../components/profile/Block3';
import {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import jwt from 'jsonwebtoken'





export default function Profile(){
  
  const [store, setStore] = useState(null);
 
  useEffect(() => {
    let data = JSON.parse( sessionStorage.getItem('login') ); 
    console.log(data);
    setStore(data.token)
    console.log(store);
     jwt.verify(store, process.env.NEXT_PUBLIC_SECRET_KEY, function(err, decoded) {
      console.log(decoded) // bar
       console.log(err) // bar

    });
  });


 



  return(<div>
    <Container maxWidth="lg">
        <ProfileVers />  
    </Container>
    </div>
  )

}

