/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, {useEffect} from 'react';
import styles from  "@/styles/blogsection/blog.module.css"
import IconButton from '@material-ui/core/IconButton';
import config from '@/config/configuration.json';
import axios from 'axios';
import Link from 'next/link'
import { Typography } from '@material-ui/core';
import {useRouter} from 'next/router';
import moment from 'moment';
import Skeleton from '@material-ui/lab/Skeleton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import Head from 'next/head'
import qs from 'qs'
import HeadV2 from '@/components/head/headv2';
import Footer1 from '@/components/footer/footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function BlogPage() {
    const myRef = React.useRef(null);
    const router = useRouter();
    const id = router.query.id
    const [blog , setBlog] = React.useState({});
    const [link, setLink] = React.useState(false);
    const [feature, setFeature] = React.useState([])

  
    useEffect(() => {
        scrollToRef(myRef)
    }, [])



    useEffect(() => {
        setBlog({})
        setFeature([])
        async function getBlog() { 
            try{
                const {data} = await axios.get(`${config.SERVER_URL}/blogs/${id}`);
                setBlog(data)
                const url = `"${data.title.replaceAll(' ', '%20')}"%20%0D%0A${data.description.replaceAll(' ', '%20')}`
                setBlog({...data, 
                    clipboard: data.clipboard.url, 
                    thumbnail: data.clipboard.formats.thumbnail.url,
                    urltitle : url
                })

                

            }catch(err){
                console.log(err)
            }


            try{
                const query = qs.stringify({ _where: { _or:[{"subject": blog.subject} ]} });
                const newdata = await axios.get(`${config.SERVER_URL}/blogs?${query}&_limit=7`);
                setFeature(newdata.data);

            }catch(err){
                console.log("second request",err)
            }
            
        }
        getBlog()

    }, [id])




    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(`https://jetzrecords.com/blog/${id}`)
        setLink(true)
      }
      
    if(blog.title){
        return (

            <div className={styles.root} ref={myRef} >
              
                <Head>  
                    <title>{blog.title}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <HeadV2/>

                <div  className={styles.mainContainer}>
                
                    <h6 className={styles.subject}>{blog.subject}</h6>
                    <h1 className={styles.title}>{blog.title}</h1>
                    

                </div>
               
                <div className={styles.sectionContainer}>
                    <div  className={styles.sectionA}>
                        <h2 className={styles.subtitle}>"{blog.description}"</h2>
                        <h6 className={styles.time}> Updated {moment(blog.published_at).fromNow()} ...</h6>
                        <div className={styles.content} dangerouslySetInnerHTML={{__html: `${blog.content}`}} />

                    </div>

                    <div  className={styles.sectionB}>
                            <h3  className={styles.label}>READ MORE</h3>
                        {feature.map((article, index)=>{
                       
                            return (
                                <div key={index} className={styles.featureBox}>
                                    <h6 className={styles.featureSubject}>
                                        {article.subject}
                                    </h6>
                                    <h4 className={styles.featureTitle}>
                                        {article.title}
                                    </h4>
                                    <Link href={`/info/article/${article.id}`}><h3 className={styles.featureButton}>Read</h3></Link>
                                </div>  
                                    )
                            
                            
                        })}
                        

                        
                    </div>
                </div>
                
                <Footer1/>
               
            </div>
        );
    }else{
        return(
            <div className={styles.root} ref={myRef}>
                <div  className={styles.main}>
                      
                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h4" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h4" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h4" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h4" >
                        <Skeleton />
                    </Typography>
                    
                    
                    <Skeleton variant="rect" style={{width: '100%', height: '300px'}} />

                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                </div>
            
            </div>
        );
           
    }
    
}
  