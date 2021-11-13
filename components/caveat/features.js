/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import Carousel from 'nuka-carousel';
import style from '@/styles/caveats/features.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LazyLoad from 'react-lazyload';

export default function Features () {

  return (
      <div className={style.main}>
        <LazyLoad height={20}>
        <div className={style.carousel}>
        <Carousel
            width="100%"
            height="80vh"
            transitionMode='fade'
            autoplay={true}
            autoplayInterval={4000}
            wrapAround={true}
            renderCenterLeftControls={({ previousSlide }) => (
                <ArrowBackIosIcon  className={style.carouselButton} onClick={previousSlide} />
            )}

            renderCenterRightControls={({ nextSlide }) => (

                <ArrowForwardIosIcon className={style.carouselButton} onClick={nextSlide}/>
            )}

        >
            <div className={style.itemContainer1}>
               <div className={style.itemBox1}>
                   
               </div>
            </div>

            <div className={style.itemContainer2}>
                <div className={style.itemBox2}>
                    
                </div>
            </div>

            <div className={style.itemContainer3}>
                <div className={style.itemBox3}>
                    
                </div>
            </div>

        </Carousel>
        </div>
        </LazyLoad>
      </div>
  );
}