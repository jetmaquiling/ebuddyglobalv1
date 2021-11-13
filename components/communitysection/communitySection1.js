/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/communitysection/communitysection1.module.css'
import Link from 'next/link'




export default function CommunitySection1() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>
            <div className={`${style.bodyContent} `}>
              <h1 className={style.titleBody}>eBuddy COMMUNITY</h1>
              <p className={style.textBody}>Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
              <div  className={style.buttonContainer} >
                <Link href='/'>
                  <div  className={`${style.buttonBox}`} >
                    <h4 className={style.buttonFontSpecial}>Join Now </h4> 
                  </div>
                </Link>
              </div>

            </div>

            <div className={`${style.bodyImage}`}>
              <img src='/Resource/community.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
        </div>
        
      </div>
      
      
    </div>
  )
}
