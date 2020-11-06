
import Head from 'next/head'
import Home from '../../styles/Home.module.css'
import Link from 'next/link';

export default function Footer(){
  return(
   
    <footer>{'I`m here to stay'}
     <style jsx>{`

      footer {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        border-top: 1px solid #eaeaea;
        background: darkblue;
        display: flex;
        justify-content: center;
        align-items: center;
      }


        `}
      </style>

    </footer>
   
  )
}
