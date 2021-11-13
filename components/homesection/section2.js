/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section2.module.css'
import Link from 'next/link'





export default function Section2({openVideo,setOpenVideo}) {


    const toggle = (url) =>{
        setOpenVideo({url: url, open:true})
    }
    

  return (
    <div className={style.main}>
  
        <div className={`${style.section}`}>
       
            <div className={style.mainBody}>
            
                <div className={style.bodyContent}>
                    <h1 className={style.titleBody1}>About eBuddy Global</h1>
                    <p className={style.textBody2}>A GLOBAL PLATFORM that incorporates a Fusion of MAJOR INDUSTRIES made easy and available for ALL.</p>
                    <Link href='/info/about'>
                        <div  className={`${style.buttonBox} `} >
                        <h4 className={style.buttonFont}>Learn More</h4>
                        </div>
                    </Link>
                </div>
                
                <div className={style.documentContainer}>
                    <div className={style.documentBox}>
                        <h1 className={style.titleBody2}>How It Works?</h1>
                        <p className={style.textBody2}>We all have one thing in common, we are all CONSUMERS. The main concept of PHBworx is the ablility to convert consumers into BUSINESSMAN. There are so many ways to earn and it is up to YOU to choose.</p>
                        <div  className={style.buttonContainer} >
                        <div  className={`${style.buttonBox} `} onClick={()=>toggle("https://www.youtube.com/embed/V5Is1K5Bprs")} >
                            <h4 className={style.buttonFont} >Watch Video</h4>
                        </div>
                        </div>

                    </div>
                    
                    <div className={style.documentBox}>
                    
                        <h1 className={style.titleBody2}>Cashback</h1>
                        <p className={style.textBody2}>Earn 30% cashback for your every purchase in the platform of PHBworx and eBuddy.</p>
                        <br/>
                    
                        <h1 className={style.titleBody2}>Reward Points</h1>
                        <p className={style.textBody2}>Earn 10% reward points or your every purchase in the platform of PHBworx and eBuddy. Convert reward points to Products or DIGITAL TOKENS</p>
                    </div>

                    <div className={style.documentBox}>
                        
                        <h1 className={style.titleBody2}> Passive Income</h1>
                        <p className={style.textBody2}>Earn percentages </p>
                        <br/>
                        <h1 className={style.titleBody2}> Bonuses</h1>
                        <p className={style.textBody2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            simorets
                            molestiae quas vel sint commodi qestra s</p>
                    </div>
                </div>

                
            </div>
            
        </div>

      
    </div>
  )
}
