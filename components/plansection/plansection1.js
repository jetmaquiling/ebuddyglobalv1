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
              <h1 className={style.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras</h1>
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
