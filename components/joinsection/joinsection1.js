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

export default function JoinSection1 ({dispatch, state, toggleSlide, slide, warning}) {

    const toggle = (field) => {
        dispatch({
            type:"toggle",
            field: field,
        })
    }

    
  return (
    <div className={slide === 0 ? style.main : style.off}>
        <div className={style.mainBox}>
            <div className={style.imageSide}>
                <img src="/Resource/question1.png" className={style.image} />
            </div>

            <div className={style.contentSide}>
                <h1 className={style.title} >Let's Get Started.</h1>
                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>
                    What are you interested in? 
                <label className={style.warning}>{warning.Q1 && `Please Choose Atleast One`}</label>
                </h2>

                <div className={style.buttonBox}>
                    <h4 className={state.BO ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("BO")}>Business Ownership</h4>
                    <h4 className={state.AM ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("AM")}>Affiliate Marketing</h4>
                    <h4 className={state.MS ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("MS")}>Membership Shopping</h4>
                </div>
                
                <p className={style.warning}>{warning && "Atleast choose one."}</p>
                <h2 className={style.label}>
                    How do you want to earn?
                <label className={style.warning}>{warning.Q2 && `Please Choose Atleast One`}</label>
                </h2>

                <div className={style.buttonBox}>
                    <h4 className={state.PI ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("PI")}>Passive Income</h4>
                    <h4 className={state.CB ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("CB")}>Cashback</h4>
                    <h4 className={state.RP ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("RP")}>Reward Points</h4>
                    <h4 className={state.PP ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("PP")}>Product Percentage</h4>
                    <h4 className={state.CP ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("CP")}>Compensation</h4>
                    <h4 className={state.BN ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("BN")}>Bonuses</h4>
                </div>

                <h2 className={style.label}>Are you a Team Builder?</h2>
                <div className={style.buttonBox}>
                    <h4 className={state.TB ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("TB")}>Yes</h4>
                    <h4 className={!state.TB ? style.buttonChosenText : style.buttonText} onClick={()=>toggle("TB")}>No</h4>
                </div>
                    
                <div className={style.navigationBox}>
                    <Link href="/"><h4 className={style.buttonNavText}>{"< Homepage"}</h4></Link>

                    <h4 className={style.buttonText} onClick={()=>toggleSlide(1)}>{"next >"} </h4>
                </div>
            </div>
        </div>
    </div>
  );
}