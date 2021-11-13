/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/caveats/content.module.css'
import LazyLoad from 'react-lazyload';

export default function Content () {

  return (
      <div className={style.main}>
          <LazyLoad height={10}>
            <div className={style.container1}>

              <div className={style.imageBox}>
              <img src="/affiliate.jpg" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Affiliate Marketing</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <h4 className={style.button}>Learn More</h4>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/business.jpg" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Business Owners</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <h4 className={style.button}>Learn More</h4>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
          <div className={style.container1}>

            <div className={style.imageBox}>
            <img src="/shopping.jpg" className={style.image} />
            </div>

            <div className={style.textBox}>
                <h3 className={style.title}>Membership Shopping</h3>
                <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                <h4 className={style.button}>Learn More</h4>
            </div>
          </div>
          </LazyLoad>

      </div>
  );
}