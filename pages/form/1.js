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
import { LaptopWindows } from '@material-ui/icons';
import Router from 'next/router'

const initialState = {
    concern: 'Reset Password/Pin Code',
    username: '',
    email: '',
    message: '',
    user_id: '',
    valid_id: null,
    valid_id_code: null,
    authorization: null,
    valid_id_code: null,
    status: 'PENDING',
  };
  
  
  
  function reducer(state, action) {
    switch (action.type) {
      case 'ONCHANGE':
        return {
            ...state,
            [action.field] : action.payload
        };
      default:
        return;
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function randomNumber() {
    return `user_${Math.floor(Math.random() * 10000000) + 1}`
}




export default function Form1 () {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [ warning , setWarning] = useState(false);
  const [ load , setLoad] = useState(false);

  const onValidate = () => {
    setLoad(true)
    if(state.username.length <= 3 || state.message.length <= 3 || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email))  || state.valid_id == null){
      setWarning(true)
      setLoad(false)
      scrollToTop()
    }else{
      sendData()
    }
  }

  const formPackage = JSON.stringify([{"type": "text", "label": "message", "value":state.message }, {"type": "text","label": "email", "value":state.email } ,{"type": "text","label": "username", "value":state.username }, {"type": "image","label": "valid_id", "value":state.valid_id , "id": state.valid_id_code} ,{"type": "image", "label": "authorization", "value":state.authorization, "id": state.authorization_code }]); 


 
  const sendData = async () => {
    const output = await axios.post(`${config.SERVER_URL}/form-requests`, {
        concern : state.concern,
        status: 'PENDING',
        user_id : randomNumber(),
        data: formPackage
    })
    if(output.status === 200){
      Router.push("/form/success")
      setLoad(false)
    }else{
      alert("Error, please ask CSR for help.",output.status)
      setLoad(false)
    }
    


  } 





  const onChange = (field,e) => {
    dispatch({
        type:"ONCHANGE",
        field: field,
        payload: e.target.value,
    })
}

  return (
    <div >
      <HeadV2/>

      {load &&
        <div className={style.backdrop}>
          <CircularProgress color="secondary" style={{position: 'fixed', top: '50%', left: '50%'}} />
        </div>
      }
     
      <div className={style.main}>
        <div className={style.mainBox}>
          <div className={style.imageSide}>
              <img src="/Resource/question3.png" className={style.image} />
          </div>

          <div className={style.contentSide}>
              <h1 className={style.title} >Reset Password/PinCode</h1>
              <p className={style.warning}>{warning && "Please Fill Up Everything Correctly."}</p>
              <div className={style.inputBox}>
                  <h2 className={style.label} >Account Username</h2>
                  <input placeholder="JuanCruz" type="name" value={state.username} className={style.input} onChange={(e)=>onChange("username",e)}/>
                  <h2 className={style.label} >Email Address</h2>
                  <input placeholder="juandelacruz@gmail.com" type="email-address"  value={state.email}  className={style.input} onChange={(e)=>onChange("email",e)}/>
                  <h2 className={style.label}>Message</h2>
                  <textarea placeholder="Hi, I want to change my password to 1298953439." type="message"  value={state.message} className={style.inputLong} onChange={(e)=>onChange("message",e)}/>
                  <Input1 placeholder={"(REQUIRED)"} dispatch={dispatch} field={"valid_id"} label={"Valid ID"} picture={state.valid_id}  code={"valid_id_code"}  code_id={state.valid_id_code} />
                  <Input1  placeholder={"(If representing owner)"} dispatch={dispatch} field={"authorization"}  label={"Authorization"} picture={state.authorization} code={"authorization_code"} code_id={state.authorization_code}  />
              </div>
              <div className={style.navigationBox}>
                <h4 className={style.buttonNavText} onClick={()=> {Router.push("/")}} >Cancel</h4>
                <h4 className={style.buttonNavText} onClick={onValidate} >Submit</h4>
              </div>
                
          </div>
        </div>
      </div>
      <Footer1/>
    </div>
    
    
  );
}