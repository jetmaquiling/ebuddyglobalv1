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
                <p className={style.textBody}>We all have one thing in common, we are all CONSUMERS. The main concept of Global eBuddy is the ablility to convert consumers into BUSINESSMAN. There are so many ways to earn and it is up to YOU to choose.
                </p>
                <div className={style.buttonBox}>
                    <h4 className={style.buttonFont}>Get Started</h4>
                </div>
            </div>
           
        </div>

        <div className={`${style.mainBody}`}>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Cashback</h2>
              <p className={style.textBody}> Earn 30% cashback for your every purchase in the platform of Global eBuddy.</p>
            </div>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/cashback.png'  alt="global ebuddy"  className={`${style.image} ${style.image1}`} />
            </div>
        </div>

        <div className={`${style.mainBody} ${style.mainInvertedBody}`}>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/rewards.png'  alt="global ebuddy"  className={`${style.image} ${style.image1}`} />
            </div>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Reward Points</h2>
              <p className={style.textBody}> Earn 10% reward points or your every purchase in the platform of Global eBuddy. Convert reward points to Products or DIGITAL TOKENS</p>
            </div>
        </div>
       
        <div className={`${style.mainBody}`}>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Passive Income</h2>
              <p className={style.textBody}> Enjoy residual income while building organization with our Business Plan</p>
            </div>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/passive.png'  alt="global ebuddy"  className={`${style.image} ${style.image1}`} />
            </div>
        </div>

        <div className={`${style.mainBody} ${style.mainInvertedBody}`}>
            <div className={`${style.bodyImage}`}>
              <img src='/Resource/bonus.png'  alt="global ebuddy"  className={`${style.image} ${style.image1}`} />
            </div>
            <div className={`${style.bodyContent} `}>
              <h2 className={style.titleBody}>Compensation</h2>
              <p className={style.textBody}> Improved compensations and bonuses received by the members of the network.</p>
            </div>
        </div>


      </div>
      
      
    </div>
  )
}
