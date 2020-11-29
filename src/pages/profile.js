
import ProfileVers from '../components/profile/genpage/ProfileVers';
import Block3 from '../components/profile/Block3';
import {useState, useEffect} from 'react';
import Link from 'next/link'
import {Container, Button, Grid, Typography, Breadcrumbs} from  '@material-ui/core';
import jwt from 'jsonwebtoken';
const models = require('../models');
const database = require('../../database');
import {useRouter} from 'next/router';






export default function Profile(){
  
  const [store, setStore] = useState(null);
  const [id, setId] = useState(null);
  const router = useRouter();

  
   const getInfo = (obj) => {
    let token = "Bearer " + obj.token;
    let url = 'http://localhost:3000/api/profile';
    console.log(token, 'token')
    
    fetch(url, {
      method: "POST",
      headers: {
         'Content-Type': 'application/json',
        "Authorization": token
      },
     body: JSON.stringify( { id: obj.id })   
    })
      .then( response => response.json())
      .then((result) => {
        setStore(result) ;
        console.log(result, 'result')
        //console.log(objStore, 'objStore')
      })
      .catch (err => console.log(err))

  }



   useEffect( () => {
      let data = JSON.parse( sessionStorage.getItem('login') ); 
 
       jwt.verify(data.token, process.env.NEXT_PUBLIC_SECRET_KEY, function(err, decoded) {
         if(!err && decoded){
            getInfo(data);
            console.log(decoded)
         }
    });

   }, []);



  return(<div>
    <Container maxWidth="lg">
    {
      store && (
        <ProfileVers params={store} />  
      )

    }
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

