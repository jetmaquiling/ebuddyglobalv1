/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/plansection/plansection1.module.css'
import Link from 'next/link'




export default function PlanSection1() {
  

  return (
    <div className={style.main}>
     
  
      <div className={`${style.section}`}>
        
        <div className={`${style.mainBody}`}>
             
            <div className={`${style.bodyContent} `}>
              <h1 className={style.titleBody}>Who is eBuddy Global For?</h1>
              <h1 className={style.textBody}>We all have one thing in common, we are all CONSUMERS. The main concept of Global eBuddy is the ablility to convert consumers into BUSINESSMAN. There are so many ways to earn and it is up to YOU to choose.</h1>
            </div>

            <div className={`${style.bodyImage}`}>
              {/* <video loop autoPlay muted className={style.video} poster="/Resource/mainpage.png">
                <source src="/Video/phbworx.mp4" type="video/webm"/>
                <source src="/Video/phbvideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video> */}
              <img src='/Resource/industry.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
            
        </div>
        
      </div>
      
      
    </div>
  )
}
