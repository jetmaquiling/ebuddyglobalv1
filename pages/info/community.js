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
import CommunitySection1 from '@/components/communitysection/communitySection1';
import CommunitySection2 from '@/components/communitysection/communitySection2';



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
          <CommunitySection1/>
          <CommunitySection2/>
          <Footer1/> 
      </div>
      
      
  );
}