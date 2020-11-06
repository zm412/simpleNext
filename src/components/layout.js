
import Link from 'next/link';
import Head from 'next/head';
import Home from '../styles/Home.module.css';
import Header from '../components/parts/header';
import Footer from '../components/parts/footer';

export default function Layout({ children, title = 'This is the default title', }) {

  return (
    <html>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //material-ui
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <title>{title}</title>
      </Head>
      <body>
        <Header />
        <main className={Home.main}>

          {children}

        </main>

        <Footer />

      </body>
    <style jsx>{`
            
      main {
        margin-top: 60px;
        padding: 1rem;
      }

     `}
    </style>
    </html>
  )
}
