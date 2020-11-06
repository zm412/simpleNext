
import Head from 'next/head'
import Home from '../../styles/Home.module.css'
import Link from 'next/link';

export default function Header(){
  return(
       <header>
        <nav>
          <Link href="/">
            <a className={Home.logo}></a>
          </Link>
          |
          <Link href="/">
            <a>Home</a>
          </Link>
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contacts">
            <a>Contacts</a>
          </Link>
          |
          <Link href="/tasks">
            <a>Tasks</a>
          </Link>
           |
          <Link href="/posts">
            <a>Posts</a>
          </Link>
           |
          <Link href="/auth/login">
            <a>Sign In</a>
          </Link>
        </nav>
    
 <style jsx>{`
      nav {
        position: fixed;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        background: darkblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
      }

      nav a {
        color: #fff;
        text-decoration: none;
      }
   `}
    </style>

      </header>
   
  )
}
