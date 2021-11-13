/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/communitysection/communitysection2.module.css'
import Link from 'next/link'




export default function CommunitySection2() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

            <div className={`${style.bodyContent} `}>
                <div className={`${style.bodyImage}`}>
                <img src='/Resource/testimony1.png'  alt="testimony1"  className={`${style.image} ${style.image1}`} />
                </div>
                <h1 className={style.titleBody}>Maria Theresa More</h1>
                <p className={style.textBody}>Important Concept is to increase people’s morale and provide a button that will directly link to affiliates’ back offices.</p>
            </div>

            <div className={`${style.bodyContent} `}>
                <div className={`${style.bodyImage}`}>
                <img src='/Resource/testimony2.png'  alt="testimony1"  className={`${style.image} ${style.image1}`} />
                </div>
                <h1 className={style.titleBody}>Maria Theresa More</h1>
                <p className={style.textBody}>Important Concept is to increase people’s morale and provide a button that will directly link to affiliates’ back offices.</p>
            </div>


            <div className={`${style.bodyContent} `}>
                <div className={`${style.bodyImage}`}>
                <img src='/Resource/testimony3.png'  alt="testimony1"  className={`${style.image} ${style.image1}`} />
                </div>
                <h1 className={style.titleBody}>Maria Theresa More</h1>
                <p className={style.textBody}>Important Concept is to increase people’s morale and provide a button that will directly link to affiliates’ back offices.</p>
            </div>

      </div>
      
      
    </div>
  )
}
