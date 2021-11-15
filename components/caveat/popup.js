/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import Carousel from 'nuka-carousel';
import style from '@/styles/caveats/popup.module.css'
import ClearIcon from '@material-ui/icons/Clear';


export default function Popup() {
    const [open, setOpen] = React.useState(true)
    const toggle = () =>{
        setOpen(!open)
    }

  return (
            <div className={open ? style.main : style.off} onClick={()=>toggle()}>
                <div className={style.xbutton} >
                    <ClearIcon style={{fontSize: "30px" , color: '#fff', cursor: 'pointer'}} />
                </div>
                <div className={style.imageContainer}>
                   <img src="/Thumbnail/popup.jpg" alt="POP" className={style.image}/>
                </div>
            </div>
  );
}