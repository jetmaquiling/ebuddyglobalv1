/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/c2bsection/c2bsection2.module.css'
import LazyLoad from 'react-lazyload';

export default function ProductSection2 () {

  return (
      <div className={style.main}>
           <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Product/Slide20.JPG" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Melliwil Carbo Vegetalis</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container1}>

              <div className={style.imageBox}>
              <img src="/Product/Slide9.JPG" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Scalar Quantum Pendant</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Product/Slide10.JPG" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Scalar Quantum Bracelet</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
          <div className={style.container1}>

            <div className={style.imageBox}>
            <img src="/Product/Slide11.JPG" className={style.image} />
            </div>

            <div className={style.textBox}>
                <h3 className={style.title}>Scalar Quantum Shield</h3>
                <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
            </div>
          </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Product/Slide12.JPG" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Scalar Quantum Flask</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
          <div className={style.container1}>

            <div className={style.imageBox}>
            <img src="/Product/Slide13.JPG" className={style.image} />
            </div>

            <div className={style.textBox}>
                <h3 className={style.title}>Scalar Quantum Watch</h3>
                <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
            </div>
          </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Product/Slide14.JPG" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Quantum Napkin</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
          <div className={style.container1}>

            <div className={style.imageBox}>
            <img src="/Product/Slide15.JPG" className={style.image} />
            </div>

            <div className={style.textBox}>
                <h3 className={style.title}>Quantum-C</h3>
                <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
            </div>
          </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Product/Slide16.JPG" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Cardio Nerve</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
          <div className={style.container1}>

            <div className={style.imageBox}>
            <img src="/Product/Slide17.JPG" className={style.image} />
            </div>

            <div className={style.textBox}>
                <h3 className={style.title}>TCK</h3>
                <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
            </div>
          </div>
          </LazyLoad>

          <LazyLoad height={10}>
            <div className={style.container2}>

              <div className={style.imageBox}>
              <img src="/Product/Slide18.JPG" className={style.image} />
              </div>

              <div className={style.textBox}>
                  <h3 className={style.title}>Meta Skin</h3>
                  <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                  <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
              </div>
            </div>
          </LazyLoad>

          <LazyLoad height={10}>
          <div className={style.container1}>

            <div className={style.imageBox}>
            <img src="/Product/Slide19.JPG" className={style.image} />
            </div>

            <div className={style.textBox}>
                <h3 className={style.title}>We Juice</h3>
                <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
                <Link href="/info/join"><h4 className={style.button}>Buy Now</h4></Link>
            </div>
          </div>
          </LazyLoad>
      </div>
  );
}