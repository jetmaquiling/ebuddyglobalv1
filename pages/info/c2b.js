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
import C2BSection1 from '@/components/c2bsection/c2bsection1';
import Footer1 from '@/components/footer/footer';
import C2BSection2 from '@/components/c2bsection/c2bsection2';

export default function C2B () {

  return (
      <div className={style.main}>
          <HeadV2/>
          <C2BSection1/>
          <C2BSection2/>
            <Footer1/>
      </div>
  );
}