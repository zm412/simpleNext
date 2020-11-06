
import Header from '../components/profile/Header';
import ProfileVers from '../components/profile/genpage/ProfileVers';
import Block3 from '../components/profile/Block3';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';



export default function Profile(){
  return(<div>
    <Container maxWidth="lg">
        <Header />
        <ProfileVers />  
    </Container>
    </div>
  )

}

