/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import style from '../home.module.css'
import Footer1 from '@/components/footer/footer';
import Youtube from '@/components/caveat/youtube';
import HeadV2 from '@/components/head/headv2';
import AboutSection1 from '@/components/aboutsection/aboutSection1';
import AboutSection2 from '@/components/aboutsection/aboutSection2';
import AboutSection3 from '@/components/aboutsection/aboutSection3';



export default function AboutUs () {
  const [openVideo , setOpenVideo] = useState({url:'none', open: false})


  return (
      <div className={style.main} >
        <Head>
          <title>PHBWorx - We are A People Helping Business</title>
          <meta name="description" content="We make it easy for you! Comfortable Life For All! Earn While Spending"/>
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="PHBWorx - We are A People Helping Business" />
          <meta property="og:image"              content='./Thumbnail/phbworx.png' />
        </Head>
          <Youtube openVideo={openVideo} setOpenVideo={setOpenVideo}/>
          <HeadV2/>
          <AboutSection1/>
          <AboutSection2/>
          <AboutSection3/>
          <Footer1/> 
      </div>
      
      
  );
}