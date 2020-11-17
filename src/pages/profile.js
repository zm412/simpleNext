
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
const models = require('../models');
const database = require('../../database');






export default function Profile(){
  
  const [store, setStore] = useState(null);
  const [objStore, setObjStore] = useState({});
  const [id, setId] = useState(null);
  const [token, setTokent] = useState(null)

  

  const getInfo = (obj) => {
    let token = "Bearer " + obj.token;
    let url = 'http://localhost:3000/api/profile';
    console.log(token, 'token')
    
    fetch(url, {
      method: "POST",
      headers: {
        "Authorization": token
      },
      body: obj.id
    })
      .then( response => response.text())
      .then((result) => {
        setObjStore(result) 
        console.log(result, 'result')
        console.log(store, 'store')
      })
      .catch (err => console.log(err))
  }



   useEffect( () => {
      let data = JSON.parse( sessionStorage.getItem('login') ); 
      console.log(store, 'store', data)
      getInfo(data);
   }, []);


 



  return(<div>
    <Container maxWidth="lg">
        <ProfileVers />  
    </Container>
    </div>
  )

}


//
//Profile.getInitialProps = async (ctx) => {
//  let url = 'http://localhost:3000/api/profile';
//  let text;
//
//     
//    fetch(url)
//      .then(response => response.text())
//      .then(result => {
//          console.log(result);
//          text = result ;
//        })
//      .catch(err => {
//        console.log('err', err);
//      })
// 
//
//  return { props: text }
//}

