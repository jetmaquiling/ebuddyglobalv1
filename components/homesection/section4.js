/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section4.module.css'
import Link from 'next/link'




export default function Section4() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>

            <div className={`${style.bodyImage}`}>
              <img src='/Resource/products.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>

            <div className={`${style.bodyContent} `}>
              <h1 className={style.titleBody}>Global eBuddy Products</h1>
              <p className={style.textBody}>Be the leading provider of Life-Enhancing Products Internationally, that ensures health benefits to customers.</p>
              <div  className={style.buttonContainer} >
                <Link href='https://ebuddy.ph/'>
                  <div  className={`${style.buttonBox}`} >
                    <h4 className={style.buttonFontSpecial}>Check Promos</h4> 
                  </div>
                </Link>
                <Link href='/info/about' >
                    <div  className={`${style.buttonBox2}`} >
                        <h4 className={style.buttonFont}>Learn More</h4>
                    </div>
                </Link>
              </div>

            </div>

            
        </div>
        
      </div>
      
      
    </div>
  )
}
