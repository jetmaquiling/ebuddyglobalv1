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



export default function NoPage () {
  


  return (
      <div className={style.main} >
          <HeadV2/>
            <div className={style.section}>
                    <img src='/Resource/construction.png'  alt="PHB"  className={style.image} />
                    <h1 className={style.text} >Sorry, No Page Found.</h1>
            </div>
          <Footer1/> 
      </div>
      
      
  );
}