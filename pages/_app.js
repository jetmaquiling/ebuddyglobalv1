import '../styles/globals.css'
import Head from 'next/head'
import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Chat from '@/components/chatFloat/chat'
import Popup from '@/components/caveat/popup';
function MyApp({ Component, pageProps }) {
  const matches = useMediaQuery('(min-width:900px)');

  React.useEffect(() => {
    (function googleTranslateElementInit() {
     
      try{
        if (window.innerWidth < 900) {
          new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element2')
       }
       else{
           new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element1')
       } 
      }catch(err){
        console.log(err)
          console.log("TRANSLATOR NOT WORKING")
      }
      
    })();
  })
      
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#C51111" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/Favicon/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>      
      </Head>
    <Popup/>
    <Component {...pageProps} />
    <Chat/>
    </>
  )
}

export default MyApp
