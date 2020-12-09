
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import Layout from '../components/layout1';
import {useState, useEffect} from 'react';
import jwt from 'jsonwebtoken';

export default function About() {

  const [isAuth, setIsAuth] = useState(false);
  const [chapter, setChapter] = useState('Exit');

  useEffect(() => {
    isAuth ? setChapter('Выйти') : setChapter('Войти');
    console.log(chapter)
  }, [isAuth]);
  
  useEffect( () => {
      let data = JSON.parse( sessionStorage.getItem('login') ); 
      jwt.verify(data.token, process.env.NEXT_PUBLIC_SECRET_KEY, function(err, decoded) {
         if(!err && decoded){
            console.log(decoded);
           setIsAuth(true);
         }else{
           setIsAuth(false);
         }
        console.log(isAuth)
    });

   }, []);


  return (
  <Layout chapter={chapter}>
    <div className={styles.gradient} >
    <p>;ljklkjlj lkj;kj;lkj; ;lj;j;lj;lsdflkjsdkfj ;lkj;lj; lkj lkjlskj;kj ;lkj lkj;sdkjf ;lkjsdjh;slkjf sfkjsdkfj sdf;lkjfdslkjfsdlkjsd;lkjfds ;lsdfkj sd;lfkjsfd ;lkjsdf;lkjsd;kjfdslkjfdslkjfdslkjdskjfdl;k  ;lkj;ojlk </p>
</div>
  </Layout>
  )
}
