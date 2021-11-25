/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/aboutsection/aboutsection1.module.css'
import Link from 'next/link'




export default function AboutSection1() {


  return (
    <div className={style.main}>
  
        <div className={`${style.section}`}>
       
            <div className={style.mainBody}>
            
                <div className={style.bodyContent}>
                    <h1 className={style.titleBody1}>About Global eBuddy</h1>
                    <p className={style.textBody2}>A GLOBAL PLATFORM that incorporates a Fusion of MAJOR INDUSTRIES made easy and available for ALL.</p>
                    <p className={style.textBody2}>We make it easy for you.</p>
                </div>
                
            </div>
            
        </div>

      
    </div>
  )
}
