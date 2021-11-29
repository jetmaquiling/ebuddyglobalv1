/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import style from '@/styles/navigation/footer1.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Footer1() {

  return (
        <div className={style.main}>
            <h3 className={style.title}>Shop and Earn Like No Other.</h3>
                <div className={style.maincontainer}>
                    <div className={style.section1}>
                        <h3 className={style.label}>
                            About Global eBuddy
                        </h3>

                        <div className={style.links1}>
                            <Link href="/info/about">
                                <p className={style.textlink}>
                                    About 
                                </p>
                            </Link>

                            <Link href="/info/plan">
                                <p className={style.textlink}>
                                    Affiliate Marketing
                                </p>
                            </Link>
                            <Link href="/info/plan">
                                <p className={style.textlink}>
                                    Membership Shopping
                                </p>
                            </Link>

                            <Link href="/info/plan">
                                <p className={style.textlink}>
                                    Business Owners
                                </p>
                            </Link>
                            <Link href="https://beta.phb2020.com/login">
                                <p className={style.textlink}>
                                    My Dashboard
                                </p>
                            </Link>
                            <Link href="https://ebuddy.ph/">
                                <p className={style.textlink}>
                                    ebuddy.ph
                                </p>
                            </Link>
                        
                            <Link href="/info/products">
                                <p className={style.textlink}>
                                    Products
                                </p>
                            </Link>
                            
                        </div>
                    </div>
                    <div className={style.section2}>
                        <h3 className={style.label}>
                            Follow Us
                        </h3>
                        <div className={style.links2}>
                            <a href="https://www.facebook.com/OfficialPHBworx"><FacebookIcon style={{fontSize: '40px' , color: "#C51111"}} 
                            className={style.icons}/></a>


                            <a href="https://www.instagram.com/phbworxinternational/?hl=en"><InstagramIcon style={{fontSize: '40px', color: "#C51111"}} className={style.icons}/></a>

                            <a href="https://www.youtube.com/channel/UCrCcVsRGOcJUt9P-gaF_v0w"><YouTubeIcon style={{fontSize: '40px', color: "#C51111"}} className={style.icons}/></a>

                            <a href="https://ph.linkedin.com/company/phbworx-gbd"><LinkedInIcon style={{fontSize: '40px', color: "#C51111"}} className={style.icons}/></a>
                        </div>
                        
                    </div>
                </div>
                <h3 className={style.copywrite}>Copyright©globalebuddy.com•2021</h3>
        </div>
  );
}