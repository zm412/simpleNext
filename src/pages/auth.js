
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';
import Link from 'next/link';

export default function About() {
  return (
  <Layout>
    <h1>About </h1>
    <p>
    <Link href='/auth/login'><a>Login</a></Link>
    <Link href='/auth/registration'><a>Registration</a></Link>
 </Layout>
  )
}
