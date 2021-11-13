/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/joinsection/joinsection1.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function JoinSection2 ({dispatch, state, toggleSlide,toggleBack, slide, warning}) {

    
    const toggle = (field) => {
        dispatch({
            type:"toggle",
            field: field,
        })
    }

    const onChange = (field,payload) => {
        dispatch({
            type:"onChange",
            field: field,
            payload: payload,
        })
    }

    
  return (
    <div className={slide === 1 ? style.main : style.off}>
        <div className={style.mainBox}>
            <div className={style.imageSide}>
                <img src="/Resource/question2.png" className={style.image} />
            </div>

            <div className={style.contentSide}>
                <h1 className={style.title} >Almost There.</h1>
                <h2 className={style.label}>Have you ever been to a Networking Company?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.TB ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("TB")}>Yes</h4>
                    <h4 className={!state.TB ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("TB")}>No</h4>
                </div>

                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>What is your current status?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.CS == "Employed" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("CS","Employed")}>Employed</h4>
                    <h4 className={state.CS == "Unemployed" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("CS","Unemployed")}>Unemployed</h4>
                    <h4 className={state.CS == "Networker" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("CS","Networker")}>Networker</h4>
                    <h4 className={state.CS == "OFW" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("CS","OFW")}>OFW</h4>
                    <h4 className={state.CS == "Business Owner" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("CS","Business Owner")}>Business Owner</h4>
                    <h4 className={state.CS == "Student" ? style.buttonChosenText : style.buttonText} onClick={()=>onChange("CS","Student")}>Student</h4>
                </div>
                    
                <div className={style.navigationBox}>
                    <h4 className={style.buttonNavText} onClick={()=>toggleBack(0)}>{"< back"}</h4>

                    <h4 className={style.buttonText} onClick={()=>toggleSlide(2)}>{"next >"} </h4>
                </div>
            </div>
        </div>
    </div>
  );
}