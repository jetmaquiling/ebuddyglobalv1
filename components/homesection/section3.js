/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section3.module.css'
import Link from 'next/link'




export default function Section3() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>
            <div className={`${style.bodyContent} `}>
              <h1 className={style.titleBody}>Global eBuddy COMMUNITY</h1>
              <p className={style.textBody}>Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
              <div  className={style.buttonContainer} >
                <Link href='/info/join'>
                  <div  className={`${style.buttonBox}`} >
                    <h4 className={style.buttonFontSpecial}>Join Now </h4> 
                  </div>
                </Link>
                <Link href='/info/community' >
                    <div  className={`${style.buttonBox2}`} >
                        <h4 className={style.buttonFont}>Learn More</h4>
                    </div>
                </Link>
              </div>

            </div>

            <div className={`${style.bodyImage}`}>
              <img src='/Resource/community2.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
        </div>
        
      </div>
      
      
    </div>
  )
}
