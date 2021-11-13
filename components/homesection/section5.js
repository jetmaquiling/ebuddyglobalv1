/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section5.module.css'
import Link from 'next/link'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



const c2bData = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    
]


const boosterData = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    
]


const comboData = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestra",
]


export default function Section5() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>

            <div className={style.bodyContent}>
                <h1 className={style.titleBody1}>Choose Your Business Plan</h1>
                <p className={style.textBody2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    simorets molestiae quas vel sint commodi qestra s</p>
                <p className={style.textBody2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. s</p>
            </div>

            <div className={style.documentContainer}>
                
                    <div className={style.documentBox}>
                        <h1 className={style.titleBody2}> C2B Plan</h1>
                        <div className={`${style.bodyImage}`}>
                            <img src='/Resource/unilevel.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
                        </div>

                        {c2bData.map((data,index)=>{
                            return (
                                <div className={style.textContainer} key={index}>
                                    <CheckCircleIcon style={{color:"#fff"}}/>
                                    <p className={style.textBody2}>{data}</p>
                                </div>
                            )   
                        })}
                        
                            <Link href='/info/join'>
                                <div  className={`${style.buttonBox}`} >
                                    <h4 className={style.buttonFont}>Sign Up Now </h4> 
                                </div>
                            </Link>
                            <Link href='/info/c2b'>
                                <div  className={`${style.specialButtonBox}`} >
                                    <h4 className={style.specialButtonFont}>Learn More </h4> 
                                </div>
                            </Link>
                    </div>
                    
                    <div className={style.documentBox}>
                    
                       
                        <h1 className={style.titleBody2}> Booster Plan</h1>
                        <div className={`${style.bodyImage}`}>
                            <img src='/Resource/binary.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
                        </div>

                        {boosterData.map((data,index)=>{
                            return (
                                <div className={style.textContainer} key={index}>
                                    <CheckCircleIcon style={{color:"#fff"}}/>
                                    <p className={style.textBody2}>{data}</p>
                                </div>
                            )   
                        })}
                        
                            
                        <Link href='/info/join'>
                            <div  className={`${style.buttonBox}`} >
                                <h4 className={style.buttonFont}>Sign Up Now </h4> 
                            </div>
                        </Link>
                        <Link href='/info/booster'>
                            <div  className={`${style.specialButtonBox}`} >
                                <h4 className={style.specialButtonFont}>Learn More</h4> 
                            </div>
                        </Link>
                    </div>

                    <div className={style.documentSpecialBox}>
                        
                        <h1 className={style.titleBody3}>Combo Plan</h1>
                        <div className={`${style.bodyImage}`}>
                            <img src='/Resource/combo.png'  alt="PHB"  className={`${style.image} ${style.image1}`} />
                        </div>

                        {comboData.map((data,index)=>{
                            return (
                                <div className={style.textContainer} key={index}>
                                    <CheckCircleIcon style={{color:"#C51111"}}/>
                                    <p className={style.textBody}>{data}</p>
                                </div>
                            )   
                        })}
                        


                        <Link href='/info/join'>
                            <div  className={`${style.specialButtonBox}`} >
                                <h4 className={style.specialButtonFont}>Sign Up Now  </h4> 
                            </div>
                        </Link>
                        <Link href='/info/combo'>
                            <div  className={`${style.buttonBox}`} >
                                <h4 className={style.buttonFont}>Learn More  </h4> 
                            </div>
                        </Link>
                    </div>
                </div>

                
            </div>

            
        </div>
        
      </div>
      
  )
}
