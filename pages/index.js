/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import style from './home.module.css'
import Footer1 from '@/components/footer/footer';
import Youtube from '@/components/caveat/youtube';
import HeadV2 from '@/components/head/headv2';
import Section1 from '@/components/homesection/section1';
import Section2 from '@/components/homesection/section2';
import Section3 from '@/components/homesection/section3';
import Section4 from '@/components/homesection/section4';
import Section5 from '@/components/homesection/section5';
import Section6 from '@/components/homesection/section6';
import Empty from '@/components/caveat/empty';
import VideoSection from '@/components/homesection/videosection';
import Script from 'next/script'


export default function LandingPage () {
  const [openVideo , setOpenVideo] = useState({url:'none', open: false})

  

  return (
      <div className={style.main} >

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-EVVKEXLFCW"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EVVKEXLFCW');
          `}
        </Script>

        <Head>
          <title>Global eBuddy.PH - Shop and Earn Like No Other</title>
          <meta name="description" content="Shop and Earn Like No Other"/>
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Global ebuddy  - Shop and Earn Like No Other" />
          <meta property="og:image"              content='./Thumbnail/ebuddy.jpg' />
        </Head>
        
          <Youtube openVideo={openVideo} setOpenVideo={setOpenVideo}/>
          
          <HeadV2/>
          <VideoSection/>
          <Section1/>
          <Section4/>
          <Section3/>
          <Section2 openVideo={openVideo} setOpenVideo={setOpenVideo}/>
          <Section5/>
          
          <Section6/>
          <Footer1/> 
      </div>
      
      
  );
}