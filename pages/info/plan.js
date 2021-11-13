/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Footer1 from '@/components/footer/footer';
import HeadV2 from '@/components/head/headv2';
import Section5 from '@/components/homesection/section5';
import Section1 from './../../components/homesection/section1';
import Empty from '@/components/caveat/empty';
import PlanSection1 from './../../components/plansection/plansection1';




export default function BusinessPlan () {
  const [openVideo , setOpenVideo] = useState({url:'none', open: false})


  return (
      <div >
        <Head>
          <title>PHBWorx - We are A People Helping Business</title>
          <meta name="description" content="We make it easy for you! Comfortable Life For All! Earn While Spending"/>
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="PHBWorx - We are A People Helping Business" />
          <meta property="og:image"              content='./Thumbnail/phbworx.png' />
        </Head>
          <HeadV2/>
          <PlanSection1/>
          <Section5/>
          <Footer1/> 
      </div>
      
      
  );
}