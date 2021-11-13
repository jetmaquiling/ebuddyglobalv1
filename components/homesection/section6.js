/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section6.module.css'
import Link from 'next/link'
import HelpIcon from '@material-ui/icons/Help';



const c2bData = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, simorets molestiae quas vel sint commodi qestras",
]



export default function Section6() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>

            <div className={style.documentContainer}>
                
                    <div className={style.documentBox}>
                        <h1 className={style.titleBody1}>Frequently Asked Questions</h1>

                        {c2bData.map((data,index)=>{
                            return (
                                <div className={style.textContainer} key={index}>
                                    <HelpIcon style={{color:"#C51111"}}/>
                                    <p className={style.textBody}>{data}</p>
                                </div>
                            )   
                        })}
                    </div>
                    
                </div>

                
            </div>

            
        </div>
        
      </div>
      
  )
}
