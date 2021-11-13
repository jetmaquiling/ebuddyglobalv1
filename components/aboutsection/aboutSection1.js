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
                    <h1 className={style.titleBody1}>About PHBworx</h1>
                    <p className={style.textBody2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        simorets molestiae quas vel sint commodi qestra s</p>
                    <p className={style.textBody2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. s</p>
                </div>
                
            </div>
            
        </div>

      
    </div>
  )
}
