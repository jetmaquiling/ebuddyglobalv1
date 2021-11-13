/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/aboutsection/aboutsection3.module.css'
import Link from 'next/link'




export default function AboutSection3() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody} ${style.specialMainBody}`}>
            <div className={`${style.bodyContent} ${style.specialBodyContent}`}>
                <h2 className={style.titleBody1}>How It Works?</h2>
                <p className={style.textBody}>An Autonomous Association of persons united voluntarily
                        to meet their common economic, social, and cultural needs.
                </p>
                <div className={style.buttonBox}>
                    <h4 className={style.buttonFont}>Get Started</h4>
                </div>
            </div>
           
        </div>

        <div className={`${style.mainBody}`}>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Cashback</h2>
              <p className={style.textBody}> Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
            </div>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/cashback.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
        </div>

        <div className={`${style.mainBody} ${style.mainInvertedBody}`}>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/rewards.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Reward Points</h2>
              <p className={style.textBody}> Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
            </div>
        </div>
       
        <div className={`${style.mainBody}`}>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Passive Income</h2>
              <p className={style.textBody}> Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
            </div>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/passive.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
        </div>

        <div className={`${style.mainBody} ${style.mainInvertedBody}`}>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/bonus.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
            </div>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Bonuses</h2>
              <p className={style.textBody}> Be the Leading Provider of Networked Life-Enhancing Products and Services Via Easy and Lucrative E-Commerce Platform</p>
            </div>
        </div>


      </div>
      
      
    </div>
  )
}
