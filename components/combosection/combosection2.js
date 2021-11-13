/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/c2bsection/c2bsection2.module.css'
import LazyLoad from 'react-lazyload';

export default function ComboSection2 () {

  return (
      <div className={style.main}>
          <LazyLoad height={10}>
            <div className={style.container1}>

              <div className={style.imageBox}>
              <img src="/Thumbnail/phbworx.png" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Scenario 1</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Sign Up Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Thumbnail/phbworx.png" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Scenario 2</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Sign Up Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
          <div className={style.container1}>

            <div className={style.imageBox}>
            <img src="/Thumbnail/phbworx.png" className={style.image} />
            </div>

            <div className={style.textBox}>
                <h3 className={style.title}>Scenario 3</h3>
                <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                <Link href="/info/join"><h4 className={style.button}>Sign Up Now</h4></Link>
            </div>
          </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Thumbnail/phbworx.png" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Scenario 4</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Sign Up Now</h4></Link>
              </div>
            </div>
          </LazyLoad>
      </div>
  );
}