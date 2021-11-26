/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import Carousel from 'nuka-carousel';
import style from '@/styles/caveats/popup.module.css'
import ClearIcon from '@material-ui/icons/Clear';
import config from '@/config/configuration.json'
import axios from 'axios';

export default function Popup({data}) {
    const [open, setOpen] = React.useState(false)
    const toggle = () =>{
        setOpen(!open)
    }


    React.useEffect(() => {
        setTimeout(function(){ 
            setOpen(true)
        }, 5000);
     }, [])
    

  return (
            <div className={open ? style.main : style.off} onClick={toggle}>
                <div className={style.xbutton} >
                    <ClearIcon style={{fontSize: "30px" , color: '#fff', cursor: 'pointer'}} />
                </div>
                <div className={style.imageContainer}  >
                       <Link href={data.popup_link ? data.popup_link : "/" }><img src={data.popup_image ? data.popup_image.url : "/Logo/ebuddyLogo.png" } alt="POP" className={style.image} /></Link>
                </div>
            </div>
  );
}