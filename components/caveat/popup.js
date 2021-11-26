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

export default function Popup() {
    const [data, setData] = React.useState({popup_image: null , popup_link: ""})
    const [open, setOpen] = React.useState(false)
    const toggle = () =>{
        setOpen(!open)
    }

   


    React.useEffect(() => {
        axios.get(`${config.SERVER_URL}/csr`).then(res => {
            setData({popup_image: res.data.popup_image.url , popup_link: res.data.popup_link })

            if(res.data.is_popup_open){
                console.log("WORKING")
                setTimeout(function(){ 
                    setOpen(true)
                }, 5000);
            }

        }).catch(error=> {
          console.log(error)
        })
     }, [])
    

  return (
            <div className={open ? style.main : style.off} onClick={()=>toggle()}>
                <div className={style.xbutton} >
                    <ClearIcon style={{fontSize: "30px" , color: '#fff', cursor: 'pointer'}} />
                </div>
                <div className={style.imageContainer}  >
                       <Link href={data.popup_link}><img src={data.popup_image} alt="POP" className={style.image} /></Link>
                </div>
            </div>
  );
}