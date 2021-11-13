/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useReducer}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import Carousel from 'nuka-carousel';
import style from '@/styles/joinsection/joinsection.module.css'
import JoinSection1 from '@/components/joinsection/joinsection1';
import HeadV2 from '@/components/head/headv2';
import Footer1 from '@/components/footer/footer';
import JoinSection2 from '@/components/joinsection/joinsection2';
import JoinSection3 from '@/components/joinsection/joinsection3';
import axios from "axios";
import JoinSection4 from '@/components/joinsection/joinsection4';
import JoinSection5 from '@/components/joinsection/joinsection5';

const initialState = {
  BO: false ,
  AM: false, 
  MS: false, 
  PI: false , 
  CB: false, 
  RP: false ,
  PP: false ,
  CP: false, 
  BN: false , 
  TB : true , 
  NM : true,
  CS : undefined,
  firstName: '',
  lastName: '',
  emailAddress: '',
  contactNumber: ''
};



function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return {
          ...state,
          [action.field] : !state.[action.field]
      };
    case 'onChange':
      return {
          ...state,
          [action.field] : action.payload
      };
    default:
      return;
  }
}




export default function Join () {
  const [slide, setSlide] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [ warning , setWarning] = useState(false);

  
  const toggleWarning = () => {
    setWarning(true)
  }



  const handleSubmit = (state) => {
    if(state.firstName.length <= 2 && state.lastName.length <= 2){
      toggleWarning()
      scrollToTop()
      return
    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.emailAddress))){
      toggleWarning()
      scrollToTop()
      return
    } 
    scrollToTop()
    setSlide(3)
    
    let interest = `I am currently a/an ${state.CS}, I ${state.TB ? "am" : "am not"} a Team Builder and I ${state.true ? "have" : "have not"} been in a network company. I am interested in ${state.BO && "Business Ownership,"} ${state.AM && "Affiliate Marketing,"} ${state.MS && "Membership Shopping"} and I want to earn through ${state.PI && "Passive Income,"} ${state.CB && "Cashback,"} ${state.RP && "Reward Points,"} ${state.PP && "Product Percentage,"} ${state.CP && "Compensation,"} ${state.BN && "Bonuses."}`

    const params = new URLSearchParams({
      firstname: state.firstName,
      lastname: state.lastName,
      email: state.emailAddress,
      contact: state.contactNumber,
      interest: interest,
      address: "phbworxtechnical@gmail.com",
    }).toString();

    axios.post(`https://pcmjourney.herokuapp.com/prospects/test?${params}`).then(() => {
        setSlide(4)
        scrollToTop()
    })
  };






  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  const toggleSlide = (num) =>{
      scrollToTop()
      setWarning(false)
      if(slide === 0){
        if(!state.BO && !state.AM && !state.MS){
          toggleWarning()
          return
        }
        if(!state.PI && !state.CB && !state.RP && !state.PP && !state.CP && !state.BN){
          toggleWarning()
          return
        }
        setSlide(num)
      }
      if(slide === 1){
        if(!state.CS){
          toggleWarning()
          return
        }
        setSlide(num)
      }
     
  }

  const toggleBack = (num) =>{
    setSlide(num)
    setWarning(false)
    scrollToTop()
  }


  return (
      <div className={style.main}>
        <HeadV2/>
          <JoinSection1 dispatch={dispatch} state={state} toggleSlide={toggleSlide} toggleBack={toggleBack} slide={slide} warning={warning}/>
          <JoinSection2 dispatch={dispatch} state={state} toggleSlide={toggleSlide}  toggleBack={toggleBack}  slide={slide} warning={warning}/>
          <JoinSection3 dispatch={dispatch} state={state} toggleSlide={toggleSlide}   toggleBack={toggleBack} slide={slide} handleSubmit={handleSubmit} warning={warning}/>
          <JoinSection4 slide={slide}/>
          <JoinSection5 slide={slide}/>
        <Footer1/>
      </div>
  );
}