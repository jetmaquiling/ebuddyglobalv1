/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section1.module.css'
import Link from 'next/link'




export default function Section1() {

    

  return (
    <div className={style.main}>
     
  
      <div className={`${style.section}`}>
        
        <div className={`${style.mainBody}`}>
             
            <div className={`${style.bodyContent} `}>
              
          
              <div className={`${style.carouselContainer} `}>
                <span  className={style.carouselBox}></span>
                <h1  className={style.titleBody}>A GLOBAL PLATFORM that incorporates a Fusion of Major Industries made easy and available for ALL.</h1>
                
              </div>
    
              <div  className={style.buttonContainer} > 
                <Link href='/info/join'>
                  <div  className={`${style.buttonBox}`} >
                    <h4 className={style.buttonFontSpecial}>Join Now </h4> 
                  </div>
                </Link>
                <Link href='https://office.phb2020.com/login' >
                    <div  className={`${style.buttonBox2}`} >
                        <h4 className={style.buttonFont}>Log In</h4>
                    </div>
                </Link>
                {/* <div id="google_translate_element" ></div> */}
              </div>

            </div>

            <div className={`${style.bodyImage}`}>
              {/* <video loop autoPlay muted className={style.video} poster="/Resource/mainpage.png">
                <source src="/Video/phbworx.mp4" type="video/webm"/>
                <source src="/Video/phbvideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video> */}
              <img src='/Resource/mainpage2.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
            
        </div>
        
      </div>
      
      
    </div>
  )
}
