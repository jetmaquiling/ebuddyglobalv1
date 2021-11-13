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
import ProductSection1 from '@/components/productsection/productsection1';
import ProductSection2 from '@/components/productsection/productsection2';


export default function Products () {

  return (
      <div className={style.main}>
          <HeadV2/>
            <ProductSection1/>
            <ProductSection2/>
          <Footer1/>
      </div>
  );
}