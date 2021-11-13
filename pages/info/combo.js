/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/caveats/content.module.css'
import LazyLoad from 'react-lazyload';
import Section1 from '@/components/homesection/section1';
import HeadV2 from '@/components/head/headv2';
import Footer1 from '@/components/footer/footer';
import ComboSection1 from '@/components/combosection/combosection1';
import ComboSection2 from '@/components/combosection/combosection2';


export default function Combo () {

  return (
      <div className={style.main}>
          <HeadV2/>
          <ComboSection1/>
          <ComboSection2/>
            <Footer1/>
      </div>
  );
}