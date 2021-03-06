/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback, forwardRef}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/joinsection/joinsection1.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';



export default function JoinSection4 ({dispatch, state,toggleBack , slide, handleSubmit}) {


    
  return (
    <div className={slide === 3 ? style.main : style.off}>
        <div className={style.mainBox}>
           
                <h1 className={style.subTitle} >Please wait for a while ...</h1>
               
        </div>
    </div>
  );
}