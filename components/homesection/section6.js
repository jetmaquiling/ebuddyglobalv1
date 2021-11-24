/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/homesection/section6.module.css'
import Link from 'next/link'
import HelpIcon from '@material-ui/icons/Help';
import moment from 'moment';
import config from '@/config/configuration.json';
import axios from 'axios';
import qs from 'qs'



export default function Section6() {
    const [feature, setFeature] = React.useState([])


    React.useEffect(() => {

        async function getBlog() { 
            try{
                const query = qs.stringify({ _where: { _or:[{"subject": "FAQ"}]} });
                const newdata = await axios.get(`${config.SERVER_URL}/blogs?${query}`);
                console.log("nEw Data",newdata.data);
                setFeature(newdata.data);

            }catch(err){
                console.log("second request",err)
            }
            
        }
        getBlog()

    }, [])


  return (
    <div className={style.main}>
  
  
      <div className={`${style.section}`}>

        <div className={`${style.mainBody}`}>

            <div className={style.documentContainer}>
                
                    <div className={style.documentBox}>
                        <h1 className={style.titleBody1}>Frequently Asked Questions</h1>

                        {feature.map((data,index)=>{
                            return (
                                <Link href={`/info/article/${data.id}`} key={data.title}>
                                  <div className={style.textContainer} key={index}>
                                        <HelpIcon/>
                                        <h3 className={style.textTitle}>{data.title}</h3>
                                    </div>
                                </Link>
                            )   
                        })}
                    </div>
                    
                </div>

                
            </div>

            
        </div>
        
      </div>
      
  )
}
