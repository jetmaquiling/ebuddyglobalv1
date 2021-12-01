/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useReducer}from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import style from '@/styles/formsection/form.module.css'
import HeadV2 from '@/components/head/headv2';
import Footer1 from '@/components/footer/footer';
import Input1 from '@/components/input/input1';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import config from "@/config/configuration.json"
import Router from 'next/router'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Success() {

  return (
    <div  className={style.successContainer} >
      <HeadV2/>
        <div className={style.iconBox}>
            <CheckCircleIcon style={{color: '#00FF00', fontSize: '150px'}} />
            <h4 className={style.textSuccess}>Your Request was sent successfully.</h4>
            <h4  className={style.buttonNavText} onClick={()=>{Router.push("/")}}>Go back to homepage</h4>
        </div>
      <Footer1/>
    </div>
    
    
  );
}