import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/navigation/headv1.module.css'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';
import Products from './../../pages/info/products';



const HeadV1 = ({pos, open, setOpen}) => {
 
  
  return (
    <div  className={pos === "top" ? style.main : style.off} >
        <div className={pos === "top" ? style.navbar : style.navbarFixed}>
          <div className={style.navbar1}>
              
              
              <div className={style.tinylogoToken}>
  
                <a href="/">
                <img  src={"/Favicon/logo.png"}  alt="MainLogo" className={style.logo}/>
                </a>
              </div>
                       
          </div>
          
            <div className={style.navbar2 }>
                
                <Link href="https://beta.phb2020.com/register">
                <div  className={style.buttonBox}  >
                  <h4 className={style.buttonFont}>Join</h4>
                </div>
                </Link>


                <Link href="https://ebuddy.ph/">
                <div  className={style.buttonBox}   >
                  <h4 className={style.buttonFont}>Shop</h4>
                </div>
                </Link>

               

                <Link  href="/info/plan">
                <div  className={style.buttonBox} >
                  <h4 className={style.buttonFont}>Business Plan</h4>
                </div>
                </Link>

            
                <Link  href="/info/products">
                <div  className={style.buttonBox} >
                  <h4 className={style.buttonFont}>Products</h4>
                </div>
                </Link>     

                <Link  href="/info/article">
                <div  className={style.buttonBox} >
                  <h4 className={style.buttonFont}>About</h4>
                </div>
                </Link>

              

            </div>
         
         
          <div className={style.navbar3}  >  
            <div id="google_translate_element1" ></div>
          </div>

          <div className={style.navbar4} onClick={()=>{setOpen(!open)}} >   
                <MenuIcon style={{color: '#fff', fontSize: '30px', cursor: 'pointer'}} />
          </div>
          
          
        </div>

    </div>
    
  )
}

export default HeadV1
