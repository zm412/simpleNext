import Link from 'next/link'
import Head from 'next/head'
import Home from '../styles/Home.module.css'

export default function Layout({

  children,
  title = 'This is the default title',
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //material-ui
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <body className={Home.container}>
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
          <Link href="/auth">
            <a>Sign In</a>
          </Link>
        </nav>
      </header>
    <main className={Home.main}>

      {children}

    </main>

      <footer className={Home.footer}>{'I`m here to stay'}</footer>
    </body>
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

      main {
        margin-top: 60px;
        padding: 1rem;
      }

      logo {
        background-image: url('../public/img/logo.png');
        background-repeat: no-repeat;
        //background-size: contain;
        //background-position: center;
        width: 100px;
        height: 90%;
        margin-right: 15px;
      }
     `}
    </style>
    </>
  )
}
