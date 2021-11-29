/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import styles from '@/styles/blogsection/article.module.css'
import Footer1 from '@/components/footer/footer';
import Youtube from '@/components/caveat/youtube';
import HeadV2 from '@/components/head/headv2';
import AboutSection1 from '@/components/aboutsection/aboutSection1';
import AboutSection2 from '@/components/aboutsection/aboutSection2';
import AboutSection3 from '@/components/aboutsection/aboutSection3';
import config from '@/config/configuration.json';
import axios from 'axios';



export default function Article () {
  const [articles, setArticles] = React.useState([])
  const [page, setPage] = React.useState(2)
  const [load, setLoad] = React.useState(false)

  React.useEffect(() => {

    async function getBlog() { 
        try{
            setLoad(true)
            const newdata = await axios.get(`${config.SERVER_URL}/blogs?_start=${page === 1 ? page : (page -1)*8}&_limit=8`);
            console.log("nEw Data",newdata.data);
            setArticles(newdata.data);
            setLoad(false)
        }catch(err){
            console.log("second request",err)
        }
        
    }

    getBlog()
    

}, [page])






  return (
      <div className={styles.main} >
        <Head>
          <title>Global Ebuddy Available Documents You Can Read</title>
          <meta name="description" content="Global Ebuddy Available Documents You Can Read"/>
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Global Ebuddy Available Documents You Can Read" />
          <meta property="og:image"              content='./Thumbnail/ebuddy.jpg' />
        </Head>
          <HeadV2/>
            <div className={styles.container}>
              <h1 className={styles.mainTitle}>Newest</h1>

              <div className={styles.articleContainer}>    

                {articles.map((data,index)=>{
                  return(
                    <Link key={data.id}  href={`/info/article/${data.id}`}>
                      <div   className={styles.articleBox}>
                        <img src={data.clipboard ? data.clipboard.url : '/Thumbnail/ebuddy.jpg'}  className={styles.image}/>
                        <h3  className={styles.articleSubject}>{data.subject ? data.subject : 'Updates'} </h3>
                        <h2  className={styles.articleTitle}>{data.title}</h2>
                      </div>
                    </Link>
                   
                  )
                })}
                
                

                
              </div>

              <div className={styles.naviagationContainer} >
                  {page == 1 ? <h4></h4>  :<h4 onClick={()=>{setPage(page-1)}} className={styles.navigationButton}>Back</h4>}
                  {articles.length < 8 ? <h4></h4>  : <h4 onClick={()=>{setPage(page+1)}} className={styles.navigationButton}>Next</h4>}
                 
              </div>
            </div>
          <Footer1/> 
      </div>
      
      
  );
}