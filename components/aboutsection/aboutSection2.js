/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/aboutsection/aboutsection2.module.css'
import Link from 'next/link'




export default function AboutSection2() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>MISSION</h2>
              <p className={style.textBody}> Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
            </div>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/mission.png'  alt="global"  className={`${style.image} ${style.image1}`} />
            </div>
        </div>

        <div className={`${style.mainBody} ${style.mainInvertedBody}`}>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/vision.png'  alt="global"  className={`${style.image} ${style.image1}`} />
            </div>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>VISION</h2>
              <p className={style.textBody}> Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
            </div>
        </div>
        <div className={`${style.mainBody}`}>
            <h3 className={style.titleBody1}>#ComfortableLifeForAll</h3>
        </div>
      </div>
      
      
    </div>
  )
}
