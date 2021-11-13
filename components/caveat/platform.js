/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/caveats/platform.module.css'


export default function Platform () {

  return (
      <div className={style.main}>
          <div className={style.platform}>
            <img src="/affiliate.png" className={style.platformImage} />
            <h3 className={style.title}>Affiliate Marketing</h3>
            <p className={style.subText}>Affiliate marketing is a type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate's own marketing efforts.</p>
          </div>

          <div className={style.platform}>
            <img src="/business.png" className={style.platformImage} />
            <h3 className={style.title}>Business Owner</h3>
            <p className={style.subText}>A business owner is a person who organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.</p>
          </div>

          <div className={style.platform}>
            <img src="/shopping.png" className={style.platformImage} />
            <h3 className={style.title}>Membership Shopping</h3>
            <p className={style.subText}>We deliver significant value to member-customers through an effective and efficient system anchored on aggressive buying, low-cost distribution and streamlined operations.</p>
          </div>
      </div>
  );
}