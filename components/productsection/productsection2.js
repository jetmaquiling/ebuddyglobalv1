/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import style from '@/styles/c2bsection/c2bsection2.module.css'
import LazyLoad from 'react-lazyload';
import moment from 'moment';
import config from '@/config/configuration.json';
import axios from 'axios';
import qs from 'qs'


export default function ProductSection2 () {
  const [product, setProduct] = React.useState([])
  const [side, setSide] = React.useState(true);

  React.useEffect(() => {

      async function getBlog() { 
          try{
              const query = qs.stringify({ _where: { _or:[{"subject": "PRODUCT"}]} });
              const newdata = await axios.get(`${config.SERVER_URL}/blogs?${query}`);
              console.log("nEw Data",newdata.data);
              setProduct(newdata.data);

          }catch(err){
              console.log("second request",err)
          }
          
      }
      getBlog()

  }, [])




  return (
      <div className={style.main}>
          {product === [] ? <h1>LOADING....</h1> : 
            product.map((data,index)=>{
              console.log("DATA CHECH NHERE", data)
              return (
                  <LazyLoad height={10} key={data.title}>
                    <div className={index % 2 == 0 ? style.container2 : style.container1}>

                      <div className={style.imageBox}>
                      <img src={data.clipboard ? data.clipboard.url : "/Resource/products.png"} className={style.image} />
                      </div>

                      <div className={style.textBox}>
                          <h3 className={style.title}>{data.title}</h3>
                          <p className={style.subText}>{data.description}</p>
                          <Link href={`/info/article/${data.id}`}><h4 className={style.button}>Learn More</h4></Link>

                          
                      </div>
                    </div>
                  </LazyLoad>
              )
            })
            
          
          }
      </div>
  );
}