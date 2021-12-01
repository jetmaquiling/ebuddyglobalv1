/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section5.module.css'
import Link from 'next/link'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



const c2bData = [
    "Earn 30% cashback for every purchase of products.",
    "Build your organization that’s both deep and wide with Unilevel Compensation Plan.",
    "Earn Up to the 10th Level as your direct sponsor bonus.",
    "With Leadership Bonus, you can earn percentages up to the infinite level based on your ranking status.",
    "E-commerece integrated. You will earn income through every purchase in ebuddy.ph under your account.",
    "Enjoy C2B Plan Unilevel Bonus for only 200CV as your personal monthly consumption.",
    "From womb to tomb products, you can purchase or market a variety of products that is essential, consumable, and beneficial.",
    "Earn reward points that can be converted into products or digital token."
]


const boosterData = [
    "An opportunity to enjoy residual income with Binary Compensation Plan.",
    "Earn up to Php 100,000 pairing bonus.",
    "Choose the packages according to your needs.",
    "Get a percentage of your investment as a return daily.",
    "Payout is protected through capped commissions.",
    "Receive refferal bonus for every new members in your binary tree.",
    "Earn reward points that can be converted into products or digital token."
]


const comboData = [
    "Get more opportunities for earning with the combination of Booster and C2b Plan.",
    "Enjoy residual income while building an organization with Combo Plan.",
    "Improved compensations and bonuses received by the members of the network.",
    "Have the benefits of both Booster and C2B Plan.",
    "Choose the packages according to your needs.",
]


export default function Section5() {


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>

            <div className={style.bodyContent}>
                <h1 className={style.titleBody1}>Choose Your Business Plan</h1>
                <p className={style.textBody2}>No matter what Business Plan you decide to pursue, it’s smart to think of your business plan that details your goals and how you plan to achieve them. A Global eBuddy helps you to examine the effectiveness of your business idea, giving you a better shot at success.</p>
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
                        
                            <Link href='https://office.phb2020.com/register'>
                                <div  className={`${style.buttonBox}`} >
                                    <h4 className={style.buttonFont}>Sign Up Now </h4> 
                                </div>
                            </Link>
                            <Link href='/info/about'>
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
                        
                            
                        <Link href='https://office.phb2020.com/register'>
                            <div  className={`${style.buttonBox}`} >
                                <h4 className={style.buttonFont}>Sign Up Now </h4> 
                            </div>
                        </Link>
                        <Link href='/info/about'>
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
                        


                        <Link href='https://office.phb2020.com/register'>
                            <div  className={`${style.specialButtonBox}`} >
                                <h4 className={style.specialButtonFont}>Sign Up Now  </h4> 
                            </div>
                        </Link>
                        <Link href='/info/about'>
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
